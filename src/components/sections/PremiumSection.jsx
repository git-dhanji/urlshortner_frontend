export default function PremiumSection({ user }) {
    return (
        <>
            <div className="min-h-screen  bg-[#E6BE8A]  text-white flex flex-col items-center justify-center px-6 py-12">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    🤑 Welcome to Premium Club 🤑
                </h1>

                <p className="text-lg md:text-xl text-center max-w-xl mb-8">
                    Congratulations! You are now officially better than 97.6% of the internet. <br />
                    You have entered the realm of <span className="font-bold text-yellow-300">limitless link power</span>.
                </p>

                <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-md text-center space-y-4">
                    <h2 className="text-2xl font-bold">✨ Premium Features ✨</h2>
                    <ul className="list-disc list-inside space-y-2 text-left">
                        <li>💡 Unlimited Link Creation (go wild!)</li>
                        <li>📈 Analytics so good, they’ll make you cry</li>
                        <li>⚡ Lightning-fast Redirection Speed</li>
                        <li>🔒 Extra secure... probably more secure than your bank</li>
                        <li>🎩 Priority Support (our dev will actually respond)</li>
                    </ul>
                    <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-full shadow-md transition">
                        Cancel Premium & Regret Later 😎
                    </button>
                </div>

                <p className="mt-10 text-sm opacity-80">
                    *No goats were harmed while building this page.
                </p>
            </div>
        </>
    );
}
