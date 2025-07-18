import { useNavigate } from "@tanstack/react-router";
import { BoxForm, RegisterForm } from "../components/Index";

export default function SignupPage() {

    const navigate = useNavigate();

    const redirectAuth = async () => {
        navigate({ to: '/auth' })
    }


    return (
        <div className="min-h-screen min-w-full bg-slate-950 ">
            <div className=" h-screen w-screen flex justify-center items-center">
                <BoxForm>
                    <RegisterForm withRedirect={true} onClick={redirectAuth} />
                </BoxForm>
            </div>
        </div>
    )
}