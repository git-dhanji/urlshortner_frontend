import AdvanceCapBox from "../box/AdvanceCapBox"
import DeveloperSection from "./DeveloperSection"
import PricingSection from "./PricingSection"
import SecurityCompSection from "./SecurityCompSection"

const featureHighlight = [
    { number: "99.9%", label: "Uptime" },
    { number: "10M+", label: "Links Created" },
    { number: "150+", label: "Countries" },
    { number: "24/7", label: "Support" }
]



const CoreFeature = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center ">
            <div>
                <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-[#6366F1] dark:bg-[#818CF8] text-white">
                    {/* Icon */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-semibold text-[#111827] dark:text-[#F9FAFB] mb-1">No Signup Needed</h3>
                <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">Start shortening links instantly, no account required.</p>
            </div>
            <div>
                <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-[#10B981] dark:bg-[#34D399] text-white">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-semibold text-[#111827] dark:text-[#F9FAFB] mb-1">Reliable & Fast</h3>
                <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">Lightning-fast redirects and 99.99% uptime guarantee.</p>
            </div>
            <div>
                <div className="mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-[#EF4444] dark:bg-[#F87171] text-white">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-semibold text-[#111827] dark:text-[#F9FAFB] mb-1">Privacy First</h3>
                <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">No tracking, no ads, and your data stays yours.</p>
            </div>
        </div>
    )
}

export default function FeaturesSection({ isPriceSectionInclude = true }) {
    return (
        <div className="bg-slate-950 min-h-screen transition-all ease-in">
            <section className="relative overflow-hidden md:py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Background decorations */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white font-space-grotesk">
                            Powerful
                            <span className="text-center pl-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                                Features
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Discover everything QuickLink has to offer. From basic URL shortening to advanced analytics and team collaboration.
                        </p>

                        {/* Feature highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            {featureHighlight.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">{stat.number}</div>
                                    <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="md:py-20 px-4">
                <div className="max-w-7xl mx-auto pb-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
                            Core Features
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Everything you need to manage your links effectively
                        </p>
                    </div>
                    <CoreFeature />
                </div>
            </section>

            <section>
                <AdvanceCapBox />
            </section>

            {/* Integration & Developer Tools */}
            <section>
                <DeveloperSection />
            </section>
            {/* Security & Compliance */}

            <section>
                <SecurityCompSection />
            </section>

            {/* Pricing Tiers Preview */}
            <section id={`${isPriceSectionInclude ? 'pricing' : ''}`}>
                {
                    isPriceSectionInclude && <PricingSection />
                }

            </section>
        </div>
    )
}