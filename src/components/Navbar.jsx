import { useState, useEffect } from "react";
import { Badge, Logo } from "./Index";
import { Link } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useSelector } from "react-redux";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [dark, setDark] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="fixed">
      <nav className="min-w-screen z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-700 bg-[#F9FAFB] dark:bg-[#111827] transition-colors duration-300 font-space-gro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          <div className="hidden md:flex gap-6 items-center">
            <Link
              to="/"
              className="text-[#111827] dark:text-[#F9FAFB] hover:text-primary dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-primary dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-primary dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Right side: Theme toggle & Auth */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              aria-label="Toggle dark mode"
              className="rounded-full p-2 bg-[#E0E7FF] dark:bg-[#1F2937] border border-[#D1D5DB] dark:border-[#374151] text-primary dark:text-indigo-300 hover:bg-primary/10 dark:hover:bg-indigo-400/10 transition-colors"
              onClick={() => setDark((d) => !d)}
            >
              {dark ? (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 6.66l-.71-.71M4.05 4.93l-.71-.71"
                  />
                </svg>
              )}
            </button>
            {isAuthenticated ? (
              <Badge
                url={user?.avatar}
                className="cursor-pointer"
                onClick={() => {
                  navigate({ to: "/user/dashboard" });
                }}
              />
            ) : (
              <Link
                to="/auth"
                className="ml-2 px-4 py-2 rounded-lg font-semibold bg-primary text-white dark:bg-indigo-500 dark:text-white hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors"
                style={{ backgroundColor: dark ? "#6366F1" : "#6366F1" }}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
