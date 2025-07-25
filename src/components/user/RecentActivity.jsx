import { Link } from "@tanstack/react-router";

export default function RecentActivity({ urls = [] }) {
  const recentUrls = urls.slice(0, 5); // Show only 5 most recent

  const handleCopyUrl = (shortUrl) => {
    const fullUrl = `${window.location.origin}/${shortUrl}`;
    navigator.clipboard.writeText(fullUrl);
  };

  if (recentUrls.length === 0) {
    return (
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Recent Activity</h2>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Links Yet</h3>
            <p className="text-gray-400 mb-6">Start by creating your first short link above.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Create Your First Link
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Recent Activity</h2>

        <div className="space-y-4">
          {recentUrls.reverse().map((url, index) => (
            <div
              key={url._id || index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0 ">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold truncate">
                        {window.location.origin}/{url.short_url}
                      </h3>
                      <p className="text-gray-400 text-sm truncate">
                        {url.original_url}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Created: {new Date(url.createdAt).toLocaleDateString()}</span>
                    <span className="bg-blue-950 text-green-500  px-2 py-1 rounded -mt-12 mr-3">
                      {url.clicks || 0} clicks
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 ">
                  <Link
                    to={`/user/analytics/${url.short_url}`}
                    className="p-2 bg-indigo-500/20 text-indigo-300 rounded-lg hover:bg-indigo-500/30 transition-all duration-200"
                    title="View Analytics"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 00-2-2m0 0V9a2 2 0 012-2h2a2 2 0 00-2-2" />
                    </svg>
                  </Link>

                  <button
                    onClick={() => handleCopyUrl(url.short_url)}
                    className="p-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
                    title="Copy URL"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {urls.length > 5 && (
          <div className="text-center mt-8">
            <Link
              to="/user/dashboard"
              className="inline-block bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
            >
              View All Links ({urls.length})
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
