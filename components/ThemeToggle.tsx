import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gradient-to-r from-emerald-100 via-green-50 to-teal-100 dark:from-emerald-900/40 dark:via-green-900/30 dark:to-teal-900/40 rounded-full p-1 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 group"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Toggle background */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-slate-800 to-slate-900"
            : "bg-gradient-to-r from-yellow-200 to-orange-200"
        }`}
      />

      {/* Toggle slider */}
      <div
        className={`relative w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-blue-400" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </div>

      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-full opacity-0  transition-opacity duration-300 ${
          theme === "dark"
            ? "shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            : "shadow-[0_0_20px_rgba(251,191,36,0.3)]"
        }`}
      />
    </button>
  );
}
