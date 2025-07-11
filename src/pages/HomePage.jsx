import { UrlForm } from "../components/Index.components";
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800">
      {" "}
      <div className="flex flex-1 items-center justify-center">
        <UrlForm />
      </div>
    </div>
  );
}
export default HomePage;
