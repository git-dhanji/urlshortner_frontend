export default function QuickStats({ urls = [] }) {
  // Calculate stats from urls data
  const totalLinks = urls?.length;
  const totalClicks = urls?.reduce((sum, url) => sum + (url.clicks || 0), 0);

  const thisMonth = urls.filter(url => {
    const urlDate = new Date(url.createdAt);
    const now = new Date();
    return urlDate.getMonth() === now.getMonth() && urlDate.getFullYear() === now.getFullYear();
  }).length;

  const lastMonth = urls.filter(url => {
    const urlDate = new Date(url.createdAt);
    const now = new Date();
    const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1);
    return urlDate.getMonth() === lastMonthDate.getMonth() && urlDate.getFullYear() === lastMonthDate.getFullYear();
  }).length;

  const growth = lastMonth > 0 ? Math.round(((thisMonth - lastMonth) / lastMonth) * 100) : 0;

  const stats = [
    {
      title: "Total Links",
      value: totalLinks,

      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Total Clicks",
      value: totalClicks,

      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "This Month",
      value: thisMonth,

      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Growth",
      value: `${growth}%`,

      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="px-4 h-20 hidden lg:block pt-10">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center h-20 flex items-center justify-center">
              <div>
                <h3 className="text-2xl font-bold text-white ">{stat.value}</h3>
                <p className="text-gray-400">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
