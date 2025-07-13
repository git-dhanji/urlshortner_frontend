import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import axiosInstance from "../../utils/axiosInstance.utils";
import Toast from "../Toast";


export default function RegisterForm({state}) {
  const [form, setForm] = useState({ username: "username", email: "example@gmail.com", password: "password" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type }), 3000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Registering user with data:", form);
      await axiosInstance.post("/api/auth/register", form);
      
      showToast("Registration successful!", "success");
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      showToast(err.message || "Registration failed", "error");
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
        className="w-full max-w-md mx-auto flex flex-col gap-6 p-6 bg-slate-800 rounded-2xl shadow-2xl mt-10 animate-fade-in"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">
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
        <div className="text-center text-gray-500 text-xs mt-2">
          Already have an account?{" "}
          <span onClick={() => state(true)} className="text-blue-600 hover:underline cursor-pointer">
            Login
          </span>
        </div>
      </form>
    </>
  );
}
