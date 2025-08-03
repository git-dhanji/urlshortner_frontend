export default function DashboardLoader({
    title = 'Loading your dashboard...'
}) {
    return (
        <div>
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                    <p className="text-gray-300">{title}</p>
                </div>
            </div>
        </div>
    )
}


