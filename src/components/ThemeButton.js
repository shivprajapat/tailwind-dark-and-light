import React, { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const ThemeButton = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light");
      }
    
      const html = document.querySelector("html");
      if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
        setTheme("dark");
      } else {
        html.classList.remove("dark");
        setTheme("light");
      }
    }, [theme]);
    
    const handleThemeSwitch = () => {
      if (localStorage.getItem("theme") === "light") {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    };
  return (
    <button
      onClick={handleThemeSwitch}
      className="p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center"
    >
      {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
    </button>
  );
};

export default ThemeButton;
