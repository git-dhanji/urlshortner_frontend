export default function ShowBoxesDsb({
  fistIcon = '',
  secondIcon = '',
  titleText = '',
  titleValue = '',
  paraTitle = '',
  totalClicks,
  totalUrls,
  avgClicks = '',
  topUrl,

}) {
  return (
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