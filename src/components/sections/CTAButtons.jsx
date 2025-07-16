import { Link } from "@tanstack/react-router";

export default function CTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <Link
                to="/signup"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Free Today
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>

            <Link
                to="/features"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-indigo-300 border-2 border-indigo-500/50 rounded-xl hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105"
            >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Explore Features
            </Link>
        </div>
    )
}