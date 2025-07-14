export default function Badge({ className = "", url = "", onClick }) {
  return (
    <div
      className={`h-10 w-10 rounded-full overflow-hidden ${
        !url ? "bg-zinc-800" : ""
      }  border border-indigo-400 ${className}`}
      onClick={onClick}
    >
      {url && (
        <div className="relative h-full w-full">
          <img src={url} alt="badge" />
        </div>
      )}
    </div>
  );
}
