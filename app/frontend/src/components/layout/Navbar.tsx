import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export function Navbar() {
  const [darkModeIcon, setDarkModeIcon] = useState(toggleDarkModeIcon());

  useEffect(() => {
    if (
      localStorage.dark === "1" ||
      (!("dark" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleDarkModeIcon() {
    return localStorage.dark === "1" ? (
      <MdOutlineLightMode className="font-semibold text-2xl" />
    ) : (
      <MdOutlineDarkMode className="font-semibold text-2xl" />
    );
  }

  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    localStorage.dark = localStorage.dark === "1" ? "0" : "1";
    setDarkModeIcon(toggleDarkModeIcon());
  }

  return (
    <nav className="h-12 w-full flex justify-between items-center px-4 py-10 bg-transparent">
      <div className="font-semibold text-2xl pl-4">
        <span className="text-red-700">NEWS</span>
        <span className="text-blue-600 dark:text-blue-200">APP</span>
      </div>
      <Button
        onClick={toggleDarkMode}
        variant="ghost"
        className="hover:bg-transparent"
      >
        {darkModeIcon}
      </Button>
    </nav>
  );
}
