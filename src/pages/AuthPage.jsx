import { BoxForm, LoginForm, RegisterForm } from "../components/Index";
import { useState } from "react";

export default function AuthPage() {
  const [login, setLogin] = useState(true);
  return (
    <div className="min-h-screen min-w-full bg-slate-950 ">
      <div className=" h-screen w-screen flex justify-center items-center">
        <BoxForm>
          {login ? (
            <LoginForm state={setLogin} />
          ) : (
            <RegisterForm state={setLogin} />
          )}
        </BoxForm>
      </div>
    </div>
  );
}
