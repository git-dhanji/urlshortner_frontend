import { LoginForm,RegisterForm } from "../components/Index.components";

import { useState } from "react";

export default function AuthPage() {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800">
      {login ? <LoginForm  state={setLogin}/> : <RegisterForm state={setLogin} />}
    </div>
  );
}
