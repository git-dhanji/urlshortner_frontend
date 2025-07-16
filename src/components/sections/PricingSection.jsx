export default function PricingSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
                    Choose Your Plan
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
                    From free personal use to enterprise solutions
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Free",
                            price: "$0",
                            period: "forever",
                            features: ["1,000 links/month", "Basic analytics", "Standard support"],
                            popular: false
                        },
                        {
                            name: "Pro",
                            price: "$9",
                            period: "per month",
                            features: ["Unlimited links", "Advanced analytics", "Custom domains", "Priority support"],
                            popular: true
                        },
                        {
                            name: "Enterprise",
                            price: "Custom",
                            period: "pricing",
                            features: ["Everything in Pro", "Team collaboration", "API access", "Dedicated support"],
                            popular: false
                        }
                    ].map((plan, idx) => (
                        <div key={idx} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${plan.popular
                            ? 'bg-gradient-to-b from-indigo-500/10 to-purple-500/10 border-indigo-500/50'
                            : 'bg-slate-800/30 border-slate-700/50 hover:border-indigo-500/30'
                            }`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-gray-400 ml-2">{plan.period}</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIdx) => (
                                    <li key={featureIdx} className="flex items-center text-gray-300">
                                        <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500'
                                : 'bg-slate-700 text-white hover:bg-slate-600'
                                }`}>
                                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}