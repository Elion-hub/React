import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { UserCard } from "./components/UserCard";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const getGitHubUser = async (username) => {
    setIsLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al buscar el usuario");
      }

      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-[#f6f8ff] dark:bg-[#141d2f] transition-colors duration-300 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-[730px]">
        <Header theme={theme} toggleTheme={handleThemeSwitch} />

        <SearchBar onSearch={getGitHubUser} />

        {/* Pasamos los tres estados a la tarjeta */}
        <UserCard user={user} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
}

export default App;
