import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-xl cursor-pointer bg-card-bg border border-card-border hover:bg-nav-hover transition-all duration-200"
            aria-label="Toggle theme"
        >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
    );
};

export default ThemeToggle;
