import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import axiosInstance from "../../utils/axiosInstance.utils";
import { redirect, useNavigate } from "@tanstack/react-router";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/authslice";
import ToastMessage from "../../utils/toast";
import { LoginWithGoogleButton } from "../Index";

export default function RegisterForm({ state, withRedirect, onClick }) {

  const baseUri = import.meta.env.VITE_SERVER_URI;
  const [form, setForm] = useState({
    username: "",
    email: "@gmail.com",
    password: "demo123",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };




  const handleGoogleLogin = async () => {
    window.open(`${baseUri}/auth/google`, "_self");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axiosInstance.post("/api/auth/register", form);
      const user = data.user;
      dispatch(login(user));
      navigate({ to: "/user/dashboard" });
      ToastMessage("welcome mr -" + user.username);
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      ToastMessage(err.message || "error while registering");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="w-full font-poppins max-w-md mx-auto flex flex-col gap-6 animate-fade-in"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="text-xl text-center font-space-gro font-bold text-amber-50 mb-2">
          Create your account
        </h2>
        <Input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          autoFocus
          required
        />
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          required
        />
        <Input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          minLength={6}
          required
        />
        <Button
          text={loading ? "Registering..." : "Register"}
          type="submit"
          loading={loading}
          disabled={loading}
          className="w-full mt-2"
        />
        <div className="w-full lg:h-10 h-auto lg:grid">
          <div className="h-10 lg:mb-0 mb-3">
            <LoginWithGoogleButton onClick={handleGoogleLogin} />
          </div>
        </div>
        {
          withRedirect ? (<div className="text-center text-gray-200 text-xs mt-2">
            Already have an account?{" "}
            <span
              onClick={onClick}
              className="text-blue-400 pl-1 hover:underline cursor-pointer"
            >
              Login
            </span>
          </div>) : (<div className="text-center text-gray-200 text-xs mt-2">
            Already have an account?{" "}
            <span
              onClick={() => state(true)}
              className="text-blue-400 pl-1 hover:underline cursor-pointer"
            >
              Login
            </span>
          </div>)
        }

      </form>
    </>
  );
}
