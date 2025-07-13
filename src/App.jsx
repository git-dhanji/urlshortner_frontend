import HomePage from "./pages/HomePage";
import "./index.css";

export default function App() {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #23243a 0%,  50%, #6be0e6 100%)",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 30%, #0000 0%, #86a8e7 40%, #0000 100%)",
          opacity: 0.7,
          filter: "blur(40px)",
        }}
      />
      <div className="relative z-10">
        <HomePage />
      </div>
    </div>
  );
}
