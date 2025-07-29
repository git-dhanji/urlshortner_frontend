
const trust = [
    { number: "10M+", label: "Links Shortened", icon: "🔗" },
    { number: "500K+", label: "Happy Users", icon: "👥" },
    { number: "99.9%", label: "Uptime", icon: "⚡" },
    { number: "150+", label: "Countries", icon: "🌍" }
]
export default function TrustSection() {
    return (

        <div className="w-dvw flex items-center justify-center max-w-7xl">
            <div className=" grid grid-cols-2 gap-10  md:grid-cols-4 cursor-pointer md:gap-x-22 lg:gap-x-30 mb-16 animate-slideUp" style={{ animationDelay: '0.4s' }}>
                {trust.map((stat, index) => (
                    <div key={index} className="text-center group p-5 bg-gray-900 rounded-md">
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                            {stat.number}
                        </div>
                        <div className="text-gray-400 text-sm md:text-base">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}