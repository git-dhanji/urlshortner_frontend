

export default function DeveloperSection() {
    return (
        <section id="devtools" className="py-20 pt-30 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
                        Developer Tools
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Integrate QuickLink seamlessly into your workflow
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* API Documentation */}
                    <div className="space-y-8">
                        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                            <h3 className="text-2xl font-semibold text-white mb-4">REST API</h3>
                            <p className="text-gray-300 mb-4">
                                Full-featured REST API with comprehensive documentation and SDKs for popular languages.
                            </p>
                            <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm text-emerald-400 overflow-x-auto">
                                <div className="text-gray-400">// Create a short link</div>
                                <div>POST /api/v1/links</div>
                                <div className="text-gray-400">{"{"}</div>
                                <div className="ml-4">"url": "https://example.com",</div>
                                <div className="ml-4">"custom": "my-link" <span className="text-white">//for authenticated dev or user only</span></div>
                                <div className="text-gray-400">{"}"}</div>
                            </div>
                        </div>

                        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                            <h3 className="text-2xl font-semibold text-white mb-4">Webhooks [ working ]</h3>
                            <p className="text-gray-300 mb-4">
                                Real-time notifications for link events and analytics updates.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["link.created", "link.clicked", "link.updated", "analytics.daily"].map((event, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                                        {event}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Integration Examples */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Popular Integrations</h3>
                        {[
                            { name: "Zapier", description: "Connect with 5000+ apps", icon: "⚡" },
                            { name: "Slack", description: "Share links in channels", icon: "💬" },
                            { name: "WordPress", description: "Plugin for easy integration", icon: "📝" },
                            { name: "Google Analytics", description: "Enhanced tracking", icon: "📊" },
                            { name: "Buffer", description: "Social media scheduling", icon: "📱" },
                            { name: "Mailchimp", description: "Email campaign tracking", icon: "📧" }
                        ].map((integration, idx) => (
                            <div key={idx} className="flex items-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
                                <div className="text-2xl mr-4">{integration.icon}</div>
                                <div>
                                    <h4 className="text-white font-semibold">{integration.name}</h4>
                                    <p className="text-gray-400 text-sm">{integration.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}