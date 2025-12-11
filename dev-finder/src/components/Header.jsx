export const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-[#222731] dark:text-white transition-colors duration-300">
        DevFinder
      </h1>

      <div
        onClick={toggleTheme}
        className="flex items-center gap-4 cursor-pointer text-[#697c9a] dark:text-white hover:text-[#222731] dark:hover:text-gray-300 tracking-widest text-sm font-bold transition-colors duration-300"
      >
        <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
        <span>{theme === "dark" ? "☀️" : "🌙"}</span>
      </div>
    </div>
  );
};
