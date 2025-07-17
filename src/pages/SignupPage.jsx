import { BoxForm, RegisterForm } from "../components/Index";

export default function SignupPage() {
    return (
        <div className="min-h-screen min-w-full bg-slate-950 ">
            <div className=" h-screen w-screen flex justify-center items-center">
                <BoxForm>
                    <RegisterForm />
                </BoxForm>
            </div>
        </div>
    )
}