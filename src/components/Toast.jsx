export default function Toast({ message, type = "success", onClose }) {
  return (
    <div
      className={`fixed top-6 bg-center z-50 px-4 py-2 rounded shadow-lg text-white text-sm font-semibold transition-all animate-fade-in ${
        type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {message}
      <button onClick={onClose} className="ml-4 text-white font-bold">
        ×
      </button>
    </div>
  );
}
