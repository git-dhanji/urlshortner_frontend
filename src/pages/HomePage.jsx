import { BoxForm, UrlForm } from "../components/Index";

function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 flex flex-col justify-between w-full ">
        <div className="min-w-full">
          This is home page
          <div>
            <UrlForm/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
