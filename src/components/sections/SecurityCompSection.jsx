export default function SecurityCompSection() {
    return (
        <section className="py-20 px-4 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
                        Security & Compliance
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Enterprise-grade security and compliance features
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: "🔒",
                            title: "SSL/TLS",
                            description: "End-to-end encryption for all connections"
                        },
                        {
                            icon: "🛡️",
                            title: "GDPR Ready",
                            description: "Full compliance with data protection regulations"
                        },
                        {
                            icon: "🔐",
                            title: "SOC 2",
                            description: "Type II compliance for security controls"
                        },
                        {
                            icon: "⚡",
                            title: "99.9% SLA",
                            description: "Guaranteed uptime with redundancy"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}