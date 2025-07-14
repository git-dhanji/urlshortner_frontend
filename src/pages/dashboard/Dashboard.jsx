import { useDispatch, useSelector } from "react-redux";
import { Badge } from "../../components/Index";
import { logoutUser } from "../../apis/user.apis";
import { logout } from "../../store/slice/authslice";
import { useNavigate } from "@tanstack/react-router";
import ReToast from "../../utils/toast";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser();
    dispatch(logout());
    navigate({ to: "/" });
    ReToast("logout successfully",2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#F9FAFB] dark:bg-[#111827] p-4">
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
          <button className="px-4 py-2 rounded-lg font-semibold bg-[#6366F1] text-white dark:bg-[#818CF8] dark:text-[#F9FAFB] hover:bg-[#4F46E5] dark:hover:bg-[#6366F1] transition-colors">
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
            <div className="flex items-center justify-between py-2 border-b border-[#D1D5DB] dark:border-[#374151] last:border-b-0">
              <span className="text-[#111827] dark:text-[#F9FAFB] font-medium">
                short.ly/abc123
              </span>
              <span className="text-[#10B981] dark:text-[#34D399] font-semibold">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#D1D5DB] dark:border-[#374151] last:border-b-0">
              <span className="text-[#111827] dark:text-[#F9FAFB] font-medium">
                short.ly/xyz789
              </span>
              <span className="text-[#EF4444] dark:text-[#F87171] font-semibold">
                Expired
              </span>
            </div>
          </div>

          {/* Stats Card Example */}
          <div className="bg-[#FFFFFF] dark:bg-[#1F2937] rounded-xl shadow p-6 border border-[#D1D5DB] dark:border-[#374151] flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-[#111827] dark:text-[#F9FAFB] mb-2">
              Stats
            </h2>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280] dark:text-[#9CA3AF]">
                  Total Links
                </span>
                <span className="text-[#6366F1] dark:text-[#818CF8] font-bold">
                  12
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280] dark:text-[#9CA3AF]">
                  Clicks
                </span>
                <span className="text-[#10B981] dark:text-[#34D399] font-bold">
                  1,234
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
