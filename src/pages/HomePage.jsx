import { UrlForm } from "../components/Index.components";
import AuthPage from "./AuthPage";
function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between ">
        {" "}
        <div className="flex flex-1 items-center justify-center">
          <UrlForm />
        </div>
      </div>

      <AuthPage/>
    </>
  );
}

export default HomePage;
