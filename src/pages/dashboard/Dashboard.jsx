import { useDispatch, useSelector } from "react-redux";
import { UrlForm } from "../../components/Index";
import { getCurrentUserData, logoutUser } from "../../apis/user.apis";
import { login, logout } from "../../store/slice/authslice";
import { useNavigate } from "@tanstack/react-router";
import ReToast from "../../utils/toast";
import { userAllUrls } from "../../apis/user.apis";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import AvatarLogo from "../../components/logos/AvatarLogo";

export default function Dashboard() {
  const queryClient = useQueryClient();
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showUrlForm, setShowUrlForm] = useState(false);
  const [selectedUrls, setSelectedUrls] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // grid or list
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const { data, isLoading } = useQuery({
    queryKey: ["userUrls"],
    queryFn: userAllUrls,
    refetchInterval: 30000,
  });


  useEffect(() => {
    if (data) {
      setAnaId(data[0]?.short_url)
    }
  }, [data]);

  const { user } = useSelector((state) => state.auth);
  // Filter and sort URLs
  const filteredUrls = data?.filter(url =>
    url.redirect_url.toLowerCase().includes(searchTerm.toLowerCase()) ||
    url.short_url?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const sortedUrls = [...filteredUrls].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt) - new Date(a.createdAt);
      case 'oldest':
        return new Date(a.createdAt) - new Date(b.createdAt);
      case 'clicks':
        return b.clicks - a.clicks;
      case 'alphabetical':
        return a.redirect_url.localeCompare(b.redirect_url);
      default:
        return 0;
    }
  });

  // Calculate stats
  const totalClicks = data?.reduce((acc, curr) => acc + curr.clicks, 0) || 0;
  const totalUrls = data?.length || 0;
  const avgClicks = totalUrls > 0 ? Math.round(totalClicks / totalUrls) : 0;
  const topUrl = data?.reduce((max, url) => url.clicks > max.clicks ? url : max, { clicks: 0 }) || null;

  const logoutHandler = async () => {
    await logoutUser();
    dispatch(logout());
    navigate({ to: "/" });
    ReToast("logout successfully", 2000);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSelectUrl = (urlId) => {
    setSelectedUrls(prev =>
      prev.includes(urlId)
        ? prev.filter(id => id !== urlId)
        : [...prev, urlId]
    );
  };

  const handleSelectAll = () => {
    setSelectedUrls(
      selectedUrls.length === sortedUrls.length
        ? []
        : sortedUrls.map(url => url._id)
    );
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'links', name: 'My Links', icon: '🔗' },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
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

        {/* Quick URL Form */}
        {showUrlForm && (
          <div className="mb-8 animate-slideDown relative">
            <div
              onClick={() => setShowUrlForm(false)}
              className="absolute top-3 right-5 md:text-2xl cursor-pointer text-white z-10">X</div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Create New Short Link</h3>
              <UrlForm onSubmit={() => queryClient.invalidateQueries({ queryKey: ["userUrls"] })} />
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeTab === tab.id
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:block">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        {
          activeTab == "overview" && (

            //TODO: create a component for box
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-indigo-500/20 rounded-xl">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🔗</span>
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Total Links</h3>
                <p className="text-3xl font-bold text-white">{totalUrls}</p>
                <p className="text-sm text-emerald-400 mt-2">+12% from last month</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📊</span>
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Total Clicks</h3>
                <p className="text-3xl font-bold text-white">{totalClicks.toLocaleString()}</p>
                <p className="text-sm text-emerald-400 mt-2">+24% from last month</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📈</span>
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Avg. Clicks</h3>
                <p className="text-3xl font-bold text-white">{avgClicks}</p>
                <p className="text-sm text-purple-400 mt-2">Per link performance</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">⭐</span>
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Top Link</h3>
                <p className="text-lg font-bold text-white truncate">{topUrl?.clicks || 0} clicks</p>
                <p className="text-sm text-yellow-400 mt-2">Best performer</p>
              </div>
            </div>
          )
        }

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search your links..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="clicks">Most Clicks</option>
              <option value="alphabetical">A-Z</option>
            </select>

            <div className="flex bg-slate-800/50 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid'
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list'
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* URLs List */}

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
          <div className="p-6 border-b border-slate-700/50">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Your Links</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">{sortedUrls.length} links</span>
                {sortedUrls.length > 0 && (
                  <button
                    onClick={handleSelectAll}
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                  >
                    {selectedUrls.length === sortedUrls.length ? 'Deselect All' : 'Select All'}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="p-6">
            {sortedUrls.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-700/50 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No links found</h3>
                <p className="text-gray-400 mb-6">
                  {searchTerm ? 'Try adjusting your search terms' : 'Create your first short link to get started'}
                </p>
                <button
                  onClick={() => setShowUrlForm(true)}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Create Your First Link
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {sortedUrls.map((url, index) => (
                  <div
                    key={url._id}
                    className={`group relative ${viewMode === 'grid'
                      ? 'bg-slate-700/30 p-6 rounded-xl border border-slate-600/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105'
                      : 'flex items-center justify-between p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-indigo-500/50 transition-all duration-300'
                      }`}
                  >
                    {/* Selection checkbox */}
                    <div className="absolute top-3 left-3">
                      <input
                        type="checkbox"
                        checked={selectedUrls.includes(url._id)}
                        onChange={() => handleSelectUrl(url._id)}
                        className="w-4 h-4 text-indigo-500 bg-slate-600 border-slate-500 rounded focus:ring-indigo-500 focus:ring-2"
                      />
                    </div>

                    {viewMode === 'grid' ? (
                      <>
                        <div className="mb-4 pt-6">
                          <h3 className="font-semibold text-white mb-2 truncate pr-8">
                            {url.redirect_url}
                          </h3>
                          <p className="text-sm text-indigo-400 mb-3 font-mono">
                            {url.short_url}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>{url.clicks} clicks</span>
                            <span className="text-green-400">{new Date(url.createdAt).toLocaleDateString()
                              || 89}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => copyToClipboard(url?.redirect_url, index)}
                            className={`flex-1 px-3 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${copiedIndex === index
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-600/50 text-gray-300 hover:bg-slate-600 hover:text-white'
                              }`}
                          >
                            {copiedIndex === index ? 'Copied!' : 'Copy'}
                          </button>
                          <Link
                            to={`/user/analytics/${url.short_url}`}
                            className="px-3 py-2 text-sm bg-indigo-500/20 text-indigo-300 rounded-lg hover:bg-indigo-500/30 transition-all duration-200"
                          >
                            📊
                          </Link>

                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex-1 min-w-0 pl-8">
                          <h3 className="font-semibold text-white truncate mb-1">
                            {url.redirect_url}
                          </h3>
                          <p className="text-sm text-indigo-400 font-mono">
                            {url.short_url}
                          </p>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <p className="text-lg font-bold text-white">{url.clicks}</p>
                            <p className="text-xs text-gray-400">clicks</p>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => copyToClipboard(url.short_url, index)}
                              className={`px-3 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${copiedIndex === index
                                ? 'bg-emerald-500 text-white'
                                : 'bg-slate-600/50 text-gray-300 hover:bg-slate-600 hover:text-white'
                                }`}
                            >
                              {copiedIndex === index ? 'Copied!' : 'Copy'}
                            </button>
                            <Link
                              to={`/user/analytics/${url.short_url}`}
                              className="px-3 py-2 text-sm bg-indigo-500/20 text-indigo-300 rounded-lg hover:bg-indigo-500/30 transition-all duration-200"
                            >
                              Analytics
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
