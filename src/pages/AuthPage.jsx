import { BoxForm, LoginForm, RegisterForm } from "../components/Index";
import { useState } from "react";

export default function AuthPage() {
  const [login, setLogin] = useState(true);
  return (
    <BoxForm>
      {login ? (
        <LoginForm state={setLogin} />
      ) : (
        <RegisterForm state={setLogin} />
      )}
    </BoxForm>
  );
}
