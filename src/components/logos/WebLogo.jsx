export default function WebLogo() {
  return (
    <>
      <div>
        <span className="flex items-center gap-2 font-bold text-xl tracking-tight font-space-gro">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="32"
              height="32"
              rx="8"
              fill="currentColor"
              className="text-primary dark:text-indigo-400"
            />
            <path
              d="M10 16h12M16 10v12"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-primary dark:text-indigo-300">Shortly</span>
        </span>
      </div>
    </>
  );
}
