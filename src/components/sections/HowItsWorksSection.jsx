import { Link } from "@tanstack/react-router";

export default function HowItsWorksSection() {
    return (
        <section className="md:py-50 py-20 px-4 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Three simple steps to transform your long URLs into powerful short links
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            step: "01",
                            title: "Paste Your URL",
                            description: "Simply paste your long URL into our shortener tool. No registration required for basic use.",
                            icon: (
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            ),
                            color: "from-indigo-500 to-blue-600"
                        },
                        {
                            step: "02",
                            title: "Customize & Generate",
                            description: "Optionally customize your short link with a memorable alias or let us generate one automatically.",
                            icon: (
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            ),
                            color: "from-purple-500 to-pink-600"
                        },
                        {
                            step: "03",
                            title: "Share & Track",
                            description: "Share your short link anywhere and track its performance with detailed analytics and insights.",
                            icon: (
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            ),
                            color: "from-emerald-500 to-teal-600"
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative group">
                            {/* Connection line */}
                            {index < 2 && (
                                <div className="hidden md:block absolute top-20 left-full w-12 h-0.5 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 transform translate-x-0 z-10"></div>
                            )}

                            <div className="text-center">
                                {/* Step number */}
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 border-2 border-indigo-500/30 rounded-full text-2xl font-bold text-indigo-400 mb-6 group-hover:border-indigo-400 transition-colors duration-300">
                                    {item.step}
                                </div>

                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}