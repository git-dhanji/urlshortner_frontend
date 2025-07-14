import { LoginForm, RegisterForm } from "../components/Index";
import { useState } from "react";



export default function AuthPage() {
  const [login, setLogin] = useState(true);

  return (
    <div className="dark:bg-slate-950 min-h-screen w-full flex justify-center items-center p-4">
      <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg xl:max-w-xl">
        <div className="relative w-full mx-auto">
          <div
            className={`absolute inset-0 bg-gradient-to-r  from-indigo-800/100 to-gray-950 blur-3xl`}
          />

          <div className="relative w-full flex flex-col p-6 sm:p-8 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] bg-gradient-to-br from-white/10 to-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-sky-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(6,182,212,0.15),transparent_70%)]" />

            <div className="relative z-10">
              {/* <h1 className="font-heading text-2xl font-bold pb-3  text-center text-emerald-300 ">
            {login ? "Welcome Back!" : "Create Account"}
          </h1> */}
              {login ? (
                <LoginForm state={setLogin} />
              ) : (
                <RegisterForm state={setLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
