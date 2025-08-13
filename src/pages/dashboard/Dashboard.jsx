import { useSelector } from "react-redux";
import { DashboardLoader, GridBox, HeaderDashboard, Input, ListBox, ShowBoxesDsb, UrlForm } from "../../components/Index";
import { userAllUrls } from "../../apis/user.apis";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import ShowQrCode from "../../components/dashboard/ShowQrCode";



export default function Dashboard() {
  const queryClient = useQueryClient();
  const [showQr, setShowQr] = useState(false)
  const [showUrlForm, setShowUrlForm] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedUrls, setSelectedUrls] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [urlForQrCode, setUrlForQrCode] = useState('')
  const { user } = useSelector((state) => state.auth);


  const { data, isLoading } = useQuery({
    queryKey: ["userUrls"],
    queryFn: userAllUrls,
    refetchInterval: 30000,
  });

  // Filter and sort URLs
  const filteredUrls = data?.filter((url) =>
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
      <DashboardLoader
        title="Loading your dashboard..."
      />
    );
  }



  return (
    <div className="min-h-screen bg-slate-950">
      {
        showQr && (
          <ShowQrCode
            state={setShowQr}
            url={urlForQrCode}
          />
        )
      }
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <HeaderDashboard
          user={user}
        />

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
            <ShowBoxesDsb
              avgClicks={avgClicks}
              totalClicks={totalClicks}
              totalUrls={totalUrls}
              topUrl={topUrl}
            />
          )
        }

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              <Input
                type='text'
                placeholder="Search your links..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            >
              {
                ['Newest First', 'Oldest First', 'Most Clicks', 'A-Z'].map((elem, index) => (
                  <option key={index + elem} value="newest">{elem}</option>
                ))
              }
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
            {sortedUrls.length === 0 ?
              (
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
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
                      : "flex flex-col space-y-4"
                  }
                >
                  {sortedUrls.map((url, index) => (
                    <div
                      key={url._id}
                      className={`relative group ${viewMode === "grid"
                        ? "bg-slate-700/30 p-4 sm:p-5 rounded-xl border border-slate-600/50 hover:border-indigo-500/50 transition-transform duration-300 hover:scale-[1.02]"
                        : "flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-5 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-indigo-500/50 transition-transform duration-300"
                        }`}
                    >
                      {/* Checkbox */}
                      <div
                        className={`absolute ${viewMode === "grid"
                          ? "top-3 right-4 sm:top-4 sm:right-6"
                          : "top-3 left-4"
                          }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedUrls.includes(url._id)}
                          onChange={() => handleSelectUrl(url._id)}
                          className="w-4 h-4 text-indigo-500 bg-slate-600 border-slate-500 rounded focus:ring-indigo-500"
                        />
                      </div>

                      {viewMode === "grid" ? (
                        <>
                          <GridBox
                            state={setShowQr}
                            url={url}
                            urlState={setUrlForQrCode}
                            index={index}
                          />
                        </>
                      ) : (
                        <>
                          <ListBox
                            url={url}
                          />
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



