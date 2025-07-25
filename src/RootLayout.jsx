import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import { Outlet, redirect } from "@tanstack/react-router";
import { getCurrentUserData } from "./apis/user.apis";
import { useDispatch } from "react-redux";
import { login } from "./store/slice/authslice";
import ToastMessage from "./utils/toast";
import Footer from "./pages/Footer";

export function Empty() {
  return <div id="home" className="h-16 w-full -z-10"></div>;
}
export default function RootLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    //check user 
    const fetchUser = async () => {
      try {
        const user = await getCurrentUserData();
        if (user) {
          dispatch(login(user));
          ToastMessage(`welcome back ${user.displayName}`);
        } else redirect({ to: "/auth" });
      } catch (err) { }
    };

    fetchUser();
  }, []);


  return (
    <>
      <Navbar />
      <Empty />
      <Outlet />
      <Footer />
    </>
  );
}
