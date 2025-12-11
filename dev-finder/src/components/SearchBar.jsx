import { useState } from "react";

const SearchIcon = () => (
  <svg
    height="24"
    width="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="text-blue-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      onSearch(username);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 bg-[#fefefe] dark:bg-[#1e2a47] p-2 rounded-xl shadow-lg mb-6 transition-colors duration-300"
    >
      <div className="pl-4">
        <SearchIcon />
      </div>

      <input
        type="text"
        placeholder="Search GitHub username..."
        className="w-full bg-transparent text-[#4b6a9b] dark:text-white placeholder-gray-400 focus:outline-none h-10"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
      >
        Search
      </button>
    </form>
  );
};
