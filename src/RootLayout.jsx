import Navbar from "./components/Navbar";
import "./index.css";
import { Outlet } from "@tanstack/react-router";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
