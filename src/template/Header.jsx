import React, { useEffect, useState } from "react";
export default function Header() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="z-20 top-0 left-0 border-b border-none dark:shadow-xl dark:bg-[#2b3945] bg-slate-100 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/HomePage">
          <span className="self-center md:text-2xl font-semibold whitespace-nowrap">
            Where in the world ?
          </span>
        </a>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center ">
            <div className="w-[5px]"></div>
            <button type="button" onClick={handleThemeSwitch}>
              <i className="fa-solid fa-moon pr-2 text-sm text-black dark:text-white" />
              Dark mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
