export default function WebLogo({ isSubscribe,userDisplayName=''}){
  return (
    <>
      <div>
        <span className="flex items-center gap-2  text-xl tracking-tight font-space-gro">
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
          <div className="relative  w-full">
            <span className="text-primary dark:text-indigo-300 font-bold">Shortly</span>
            <span className="absolute font-poppins top-5 text-[13px] font-extralight left-0 text-amber-300 text-nowrap"> {isSubscribe && userDisplayName}</span>
          </div>

        </span>
      </div>
    </>
  );
}
