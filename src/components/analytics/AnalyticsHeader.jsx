import { useState } from "react";

export default function AnalyticsHeader({
    analyticsName = "Link Analytics",
    analyticsShortUrl = "",
    analyticsLongUrl = "",
    timeRanges = [],
    ButtonText = "Export Data",
    analytics = {}
}) {

    const [timeRange, setTimeRange] = useState("7d");


    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">{analyticsName}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <p className="text-indigo-400 font-mono text-lg">{analytics?.url?.shortUrl || analyticsShortUrl}</p>
                    <span className="text-gray-400">→</span>
                    <p className="text-gray-300 truncate max-w-md">{analytics?.url?.originalUrl || analyticsLongUrl}</p>
                </div>
            </div>

            <div className="flex items-center space-x-4 mt-4 lg:mt-0 border-none">
                <select
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="px-4 py-2 bg-slate-800 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    {timeRanges?.map((range) => (
                        <option key={range.value} value={range.value}>
                            {range.label}
                        </option>
                    ))}
                </select>

                <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-colors duration-200">
                    {ButtonText}
                </button>
            </div>
        </div>
    )
}