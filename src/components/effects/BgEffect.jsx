export default function BgEffect({className=""}) {
    return (
        <div className="fixed inset-0 -z-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
    )
}