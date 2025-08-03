import { useState } from "react";
import AvatarLogo from "../logos/AvatarLogo";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../apis/user.apis";
import { logout } from "../../store/slice/authslice";
import { useNavigate } from "@tanstack/react-router";
import ReToast from '../../utils/toast'

export default function HeaderDashboard({
    user = []
}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = async () => {
        await logoutUser();
        dispatch(logout());
        navigate({ to: "/" });
        ReToast("logout successfully", 2000);
    };

    const [showUrlForm, setShowUrlForm] = useState(false);
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
                <div className="relative">
                    <AvatarLogo url={user?.avatar} />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-slate-950 rounded-full"></div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">
                        Welcome back, {user?.displayName}! 👋
                    </h1>
                    <p className="text-gray-400">
                        Manage and track your shortened URLs
                    </p>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setShowUrlForm(!showUrlForm)}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <span className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>New Link</span>
                    </span>
                </button>

                <button
                    onClick={logoutHandler}
                    className="px-4 py-3 text-gray-300 hover:text-red-400 border border-slate-700 hover:border-red-500/50 rounded-xl transition-all duration-300"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </button>
            </div>
        </div>
    )
}