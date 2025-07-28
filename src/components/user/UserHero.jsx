import InputWithButton from "../box/InputWithButton";

export default function UserHero({ user }) {
  return (
    <div className="relative px-4 pt-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
          Welcome back, <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{user?.displayName || user?.username}</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Create, manage, and track your short links with powerful analytics.
        </p>

        {/* URL Form */}
        <div className="max-w-2xl mx-auto">
          <InputWithButton />
        </div>
      </div>
    </div>
  );
}
