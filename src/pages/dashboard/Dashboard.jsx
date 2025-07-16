import { useDispatch, useSelector } from "react-redux";
import { Badge } from "../../components/Index";
import { logoutUser } from "../../apis/user.apis";
import { logout } from "../../store/slice/authslice";
import { useNavigate } from "@tanstack/react-router";
import ReToast from "../../utils/toast";
import { userAllUrls } from "../../apis/user.apis";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

export default function Dashboard() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const { data } = useQuery({
    queryKey: ["userUrls"],
    queryFn: userAllUrls,
    refetchInterval: 30000,
  });

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser();
    dispatch(logout());
    navigate({ to: "/" });
    ReToast("logout successfully", 2000);
  };

  const handleClick = () => {
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen w-full  p-4 bg-slate-900">
      <div className="max-w-7xl mx-auto pt-10 px-10">
        <h1 className="relative top-0 right-0 text-2xl sm:text-3xl font-bold text-indigo-400  tracking-tight pb-10">
          User Dashboard
        </h1>
        {/* Header */}
        <header className="flex 0 flex-col h-40 md:flex-row  sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-start flex-col-reverse gap-4 bg-[#FFFFFF] dark:bg-[#1F2937] rounded-xl shadow p-6 border border-[#D1D5DB] dark:border-[#374151]">
            <span
              className=" text-red-500 cursor-pointer font-medium  select-none text-xl border border-amber-200"
              onClick={logoutHandler}
            >
              Logout
            </span>
            <p className="text-white text-start text-lg">{user?.email}</p>
            {/* User badge */}
            <div className="flex items-center gap-4 rounded-full bg-[#FFFFFF] dark:bg-[#1F2937] ">
              <Badge className="cursor-pointer" />

              <span className="text-[#111827] dark:text-[#F9FAFB] font-medium  select-none text-xl">
                {user?.username}
              </span>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="px-4 py-2 rounded-lg font-semibold bg-[#6366F1] text-white dark:bg-[#818CF8] dark:text-[#F9FAFB] hover:bg-[#4F46E5] dark:hover:bg-[#6366F1] transition-colors"
          >
            + New Link
          </button>
        </header>

        {/* Card Example */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FFFFFF] dark:bg-[#1F2937] rounded-xl shadow p-6 border border-[#D1D5DB] dark:border-[#374151]">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-[#F9FAFB] mb-2">
              Your Links
            </h2>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-4">
              Manage and track your shortened URLs here.
            </p>
            {/* Example link row */}
            {data?.length === 0 ? (
              <p className=" dark:text-[#ff4949] mb-4 text-amber-400">
                No links found{" "}
                <Link
                  className="text-white bg-indigo-400 px-2 py-1 rounded-sm ml-3"
                  to="/"
                >
                  create urls
                </Link>
              </p>
            ) : (
              data?.map((value, index) => (
                <div
                  key={value._id + index || index}
                  className="flex items-center justify-between py-2 border-b border-[#D1D5DB] dark:border-[#374151] last:border-b-0 gap-2"
                >
                  <span className="text-[#111827] dark:text-[#F9FAFB] font-medium break-all max-w-xs">
                    {value.redirect_url}
                  </span>
                  <span className="text-[#10B981] dark:text-[#34D399] font-semibold min-w-[60px] text-center">
                    {value.clicks}
                  </span>
                  <button
                    className={`ml-2 px-2 py-1 rounded bg-[#6366F1] text-white text-xs font-medium hover:bg-[#4F46E5] transition-colors cursor-pointer ${
                      copiedIndex === index ? "bg-green-500" : ""
                    }`}
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(value.redirect_url);
                        setCopiedIndex(index);
                        ReToast("Copied!", 1200);
                        setTimeout(() => setCopiedIndex(null), 1200);
                      } catch (err) {
                        ReToast("Failed to copy", 1200);
                      }
                    }}
                    title="Copy short URL"
                  >
                    {copiedIndex === index ? "Copied!" : "Copy"}
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Stats Card Example */}
          <div className="bg-[#FFFFFF] h-fit dark:bg-[#1F2937] rounded-xl shadow p-6 border border-[#D1D5DB] dark:border-[#374151] flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-[#F9FAFB] mb-2">
              Stats
            </h2>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280] dark:text-[#9CA3AF]">
                  Total Links
                </span>
                <span className="text-[#6366F1] dark:text-[#818CF8] font-bold">
                  {data?.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280] dark:text-[#9CA3AF]">
                  Clicks
                </span>
                <span className="text-[#10B981] dark:text-[#34D399] font-bold">
                  {data?.reduce((acc, curr) => acc + curr.clicks, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
