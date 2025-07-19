import { useState, useEffect } from "react";
import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
    LineChart,
    Line,
    AreaChart,
    Area,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import BgEffect from "../effects/BgEffect";
import fetchAnalytics from "../../apis/analytics.api";
import AnalyticsHeader from "./AnalyticsHeader";


export default function AnalyticsMainSections() {
    // const { shortId } = useParams();
    const shortId='asdfjaslk'
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", name: "Overview", icon: "📊" },
        { id: "traffic", name: "Traffic", icon: "🚦" },
        { id: "devices", name: "Devices", icon: "📱" },
        { id: "locations", name: "Locations", icon: "🌍" },
    ];

    const timeRanges = [
        { value: "24h", label: "Last 24 Hours" },
        { value: "7d", label: "Last 7 Days" },
        { value: "30d", label: "Last 30 Days" },
        { value: "90d", label: "Last 90 Days" },
    ];
    const { data: analytics, isLoading, error } = useQuery({
        queryKey: ["analytics", shortId],
        queryFn: () => fetchAnalytics(shortId),
    });


    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-300">Loading analytics...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Error Loading Analytics</h3>
                    <p className="text-gray-400">Unable to load analytics data for this link.</p>
                </div>
            </div>
        );
    }



    return (
        <div className="min-h-screen bg-slate-950">
            {/* Background Effects */}
            <BgEffect />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8">
                    {/* Header */}
                    <AnalyticsHeader
                        timeRanges={timeRanges}
                        analyticsShortUrl="shortly.ly/short"
                        analyticsLongUrl="https://www.longurl.com/somepara/en-hi"
                    />
                    {/* Navigation Tabs */}
                    <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeTab === tab.id
                                    ? "bg-indigo-500 text-white shadow-lg"
                                    : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                                    }`}
                            >
                                <span>{tab.icon}</span>
                                <span className="hidden sm:block">{tab.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Overview Tab */}
                {activeTab === "overview" && (
                    <div className="space-y-8">
                        {/* Key Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-indigo-500/20 rounded-xl">
                                        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                        </svg>
                                    </div>
                                    <span className="text-2xl">👆</span>
                                </div>
                                <h3 className="text-sm font-medium text-gray-400 mb-1">Total Clicks</h3>
                                <p className="text-3xl font-bold text-white">{analytics?.url?.totalClicks?.toLocaleString()}</p>
                                <p className="text-sm text-emerald-400 mt-2">+12% from last period</p>
                            </div>

                            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-emerald-500/20 rounded-xl">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <span className="text-2xl">📈</span>
                                </div>
                                <h3 className="text-sm font-medium text-gray-400 mb-1">Click Rate</h3>
                                <p className="text-3xl font-bold text-white">8.4%</p>
                                <p className="text-sm text-emerald-400 mt-2">Above average</p>
                            </div>

                            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-purple-500/20 rounded-xl">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-2xl">👥</span>
                                </div>
                                <h3 className="text-sm font-medium text-gray-400 mb-1">Unique Visitors</h3>
                                <p className="text-3xl font-bold text-white">892</p>
                                <p className="text-sm text-purple-400 mt-2">71% of total clicks</p>
                            </div>

                            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-yellow-500/20 rounded-xl">
                                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-2xl">⏱️</span>
                                </div>
                                <h3 className="text-sm font-medium text-gray-400 mb-1">Avg. Session</h3>
                                <p className="text-3xl font-bold text-white">2m 34s</p>
                                <p className="text-sm text-yellow-400 mt-2">Engagement time</p>
                            </div>
                        </div>

                        {/* Clicks Over Time Chart */}
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                            <h3 className="text-xl font-semibold text-white mb-6">Clicks Over Time</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={analytics?.clicksOverTime}>
                                    <defs>
                                        <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="date" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1F2937',
                                            border: '1px solid #374151',
                                            borderRadius: '8px',
                                            color: '#F9FAFB'
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="clicks"
                                        stroke="#6366F1"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorClicks)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Device Types and Top Countries */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Device Types Pie Chart */}
                            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                <h3 className="text-xl font-semibold text-white mb-6">Device Types</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={analytics?.deviceTypes}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={100}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        >
                                            {analytics?.deviceTypes?.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1F2937',
                                                border: '1px solid #374151',
                                                borderRadius: '8px',
                                                color: '#F9FAFB'
                                            }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Top Countries */}
                            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                <h3 className="text-xl font-semibold text-white mb-6">Top Countries</h3>
                                <div className="space-y-4">
                                    {analytics?.countries?.map((country, index) => (
                                        <div key={country.name} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-2xl">{country.flag}</span>
                                                <span className="text-white font-medium">{country.name}</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-24 bg-slate-700 rounded-full h-2">
                                                    <div
                                                        className="bg-indigo-500 h-2 rounded-full"
                                                        style={{ width: `${(country.clicks / analytics.countries[0].clicks) * 100}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-gray-300 font-semibold w-12 text-right">{country.clicks}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Traffic Tab */}
                {activeTab === "traffic" && (
                    <div className="space-y-8">
                        {/* Hourly Traffic */}
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                            <h3 className="text-xl font-semibold text-white mb-6">Traffic by Hour</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={analytics?.hourlyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="hour" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1F2937',
                                            border: '1px solid #374151',
                                            borderRadius: '8px',
                                            color: '#F9FAFB'
                                        }}
                                    />
                                    <Bar dataKey="clicks" fill="#6366F1" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Referrers */}
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                            <h3 className="text-xl font-semibold text-white mb-6">Top Referrers</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={analytics?.referrers} layout="horizontal">
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis type="number" stroke="#9CA3AF" />
                                    <YAxis dataKey="name" type="category" stroke="#9CA3AF" width={80} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1F2937',
                                            border: '1px solid #374151',
                                            borderRadius: '8px',
                                            color: '#F9FAFB'
                                        }}
                                    />
                                    <Bar dataKey="clicks" fill="#10B981" radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}

                {/* Devices Tab */}
                {activeTab === "devices" && (
                    <div className="space-y-8">
                        {/* Browser Distribution */}
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                            <h3 className="text-xl font-semibold text-white mb-6">Browser Distribution</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={analytics?.browsers}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="name" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1F2937',
                                            border: '1px solid #374151',
                                            borderRadius: '8px',
                                            color: '#F9FAFB'
                                        }}
                                    />
                                    <Bar dataKey="clicks" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Device Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                <h3 className="text-xl font-semibold text-white mb-6">Device Breakdown</h3>
                                <div className="space-y-4">
                                    {analytics?.deviceTypes?.map((device, index) => (
                                        <div key={device.name} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{ backgroundColor: device.color }}
                                                ></div>
                                                <span className="text-white font-medium">{device.name}</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-32 bg-slate-700 rounded-full h-2">
                                                    <div
                                                        className="h-2 rounded-full"
                                                        style={{
                                                            width: `${device.value}%`,
                                                            backgroundColor: device.color
                                                        }}
                                                    ></div>
                                                </div>
                                                <span className="text-gray-300 font-semibold w-12 text-right">{device.value}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                <h3 className="text-xl font-semibold text-white mb-6">Operating Systems</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Windows", percentage: 45, color: "#0078D4" },
                                        { name: "macOS", percentage: 25, color: "#000000" },
                                        { name: "Android", percentage: 20, color: "#3DDC84" },
                                        { name: "iOS", percentage: 8, color: "#007AFF" },
                                        { name: "Linux", percentage: 2, color: "#FCC624" },
                                    ].map((os, index) => (
                                        <div key={os.name} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{ backgroundColor: os.color }}
                                                ></div>
                                                <span className="text-white font-medium">{os.name}</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-32 bg-slate-700 rounded-full h-2">
                                                    <div
                                                        className="h-2 rounded-full"
                                                        style={{
                                                            width: `${os.percentage}%`,
                                                            backgroundColor: os.color
                                                        }}
                                                    ></div>
                                                </div>
                                                <span className="text-gray-300 font-semibold w-12 text-right">{os.percentage}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Locations Tab */}
                {activeTab === "locations" && (
                    <div className="space-y-8">
                        {/* World Map Placeholder */}
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                            <h3 className="text-xl font-semibold text-white mb-6">Geographic Distribution</h3>
                            <div className="h-64 bg-slate-700/30 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🗺️</div>
                                    <p className="text-gray-400">Interactive world map would go here</p>
                                    <p className="text-sm text-gray-500 mt-2">Integration with mapping library needed</p>
                                </div>
                            </div>
                        </div>

                        {/* Countries List */}
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                            <h3 className="text-xl font-semibold text-white mb-6">Countries & Regions</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-slate-700">
                                            <th className="text-left py-3 px-4 text-gray-400 font-medium">Country</th>
                                            <th className="text-left py-3 px-4 text-gray-400 font-medium">Clicks</th>
                                            <th className="text-left py-3 px-4 text-gray-400 font-medium">Percentage</th>
                                            <th className="text-left py-3 px-4 text-gray-400 font-medium">Trend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {analytics?.countries?.map((country, index) => (
                                            <tr key={country.name} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                                                <td className="py-3 px-4">
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-2xl">{country.flag}</span>
                                                        <span className="text-white font-medium">{country.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4 text-white font-semibold">{country.clicks}</td>
                                                <td className="py-3 px-4 text-gray-300">
                                                    {((country.clicks / analytics.countries.reduce((sum, c) => sum + c.clicks, 0)) * 100).toFixed(1)}%
                                                </td>
                                                <td className="py-3 px-4">
                                                    <span className="text-emerald-400 text-sm">↗ +{Math.floor(Math.random() * 20)}%</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}