import { useState } from "react";
import { Input, Button } from "../Index";
import axiosInstance from "../../utils/axiosInstance.utils";
import Toast from "../Toast";

export default function LoginForm({ state }) {
  const [form, setForm] = useState({
    email: "example@gmail.com",
    password: "password",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type }), 1800);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await axiosInstance.post("/api/auth/login", form);
      console.log("Login successful:", data);
      showToast("Login successful!", "success");
      setForm({ email: "", password: "" });
    } catch (err) {
      showToast(err.message || "Login failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() =>
            setToast({ show: false, message: "", type: "success" })
          }
        />
      )}
      <form
        className="w-full  max-w-md mx-auto flex flex-col gap-6 rounded-2xl"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="text-2xl font-space-gro font-bold text-center dark:text-amber-50 mb-2 text-black">
          Login to your account
        </h2>
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          autoFocus
        />
        <Input
          name="password"
          type="text"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          minLength={6}
          required
        />
        <Button
          text={loading ? "Logging in..." : "Login"}
          type="submit"
          loading={loading}
          disabled={loading}
          className="w-full mt-2"
        />
        <div className="text-center text-gray-200 text-xs mt-2">
          Don't have an account?{" "}
          <span
            onClick={() => state(false)}
            className="text-blue-400 pl-1 hover:underline cursor-pointer"
          >
            Register
          </span>
        </div>
      </form>
    </>
  );
}
