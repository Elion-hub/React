function formatDate(isoDate) {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export const UserCard = ({ user, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="text-[#2b3442] dark:text-white text-center mt-8 font-bold text-xl">
        Cargando...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-8 font-bold text-xl">
        {error === "Not Found" ? "Usuario no encontrado" : error}
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="w-full bg-[#fefefe] dark:bg-[#1e2a47] rounded-2xl p-6 md:p-12 shadow-lg flex flex-col md:flex-row gap-6 md:gap-8 text-[#2b3442] dark:text-white mt-6 transition-colors duration-300">
      <div className="w-full md:w-auto flex justify-start md:justify-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-full w-20 h-20 md:w-32 md:h-32 border-4 border-white dark:border-[#141d2f]"
        />
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-4">
          <h2 className="text-2xl font-bold text-[#2b3442] dark:text-white">
            {user.name || user.login}
          </h2>
          <span className="text-[#697c9a] dark:text-gray-400">
            Joined {formatDate(user.created_at)}
          </span>
        </div>

        <p className="text-blue-500 mb-6">@{user.login}</p>

        <p className="text-[#4b6a9b] dark:text-gray-300 mb-8 leading-loose">
          {user.bio || "This profile has no bio"}
        </p>

        <div className="bg-[#f6f8ff] dark:bg-[#141d2f] rounded-xl p-4 md:p-8 grid grid-cols-3 text-center md:text-left mb-8 transition-colors duration-300">
          <div>
            <h4 className="text-[#4b6a9b] dark:text-gray-400 text-xs md:text-sm mb-1">
              Repos
            </h4>
            <span className="text-xl md:text-2xl font-bold text-[#2b3442] dark:text-white">
              {user.public_repos}
            </span>
          </div>
          <div>
            <h4 className="text-[#4b6a9b] dark:text-gray-400 text-xs md:text-sm mb-1">
              Followers
            </h4>
            <span className="text-xl md:text-2xl font-bold text-[#2b3442] dark:text-white">
              {user.followers}
            </span>
          </div>
          <div>
            <h4 className="text-[#4b6a9b] dark:text-gray-400 text-xs md:text-sm mb-1">
              Following
            </h4>
            <span className="text-xl md:text-2xl font-bold text-[#2b3442] dark:text-white">
              {user.following}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#4b6a9b] dark:text-gray-300">
          <div
            className={`flex items-center gap-3 ${
              !user.location ? "opacity-50" : ""
            }`}
          >
            <span>📍 {user.location || "Not Available"}</span>
          </div>
          <div
            className={`flex items-center gap-3 ${
              !user.twitter_username ? "opacity-50" : ""
            }`}
          >
            <span>🐦 {user.twitter_username || "Not Available"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
