import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // <-- import Link

const useActiveSection = () => {
  const [activeBg, setActiveBg] = useState("jungleGreen");
  useEffect(() => {
    const sections = document.querySelectorAll("[data-bgcolor]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBg(entry.target.getAttribute("data-bgcolor"));
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);
  return activeBg;
};

const Header = () => {
  const activeBg = useActiveSection();

  const mapping = {
    jungleGreen: {
      logoAfro: "text-canary",
      logoHealth: "text-white",
      nav: "text-canary hover:text-white",
      button: "border-white hover:text-jungleGreen",
    },
    canary: {
      logoAfro: "text-jungleGreen",
      logoHealth: "text-white",
      nav: "text-jungleGreen hover:text-white",
      button: "border-white hover:text-canary",
    },
    white: {
      logoAfro: "text-jungleGreen",
      logoHealth: "text-canary",
      nav: "text-jungleGreen hover:text-canary",
      button: "border-jungleGreen hover:text-canary",
    },
  };

  const colors = mapping[activeBg] || mapping["jungleGreen"];

  return (
    <header
      className="
        fixed 
        top-0 
        left-0 
        w-full 
        flex 
        items-center 
        justify-between 
        px-10 
        py-4 
        backdrop-blur-3xl 
        z-50
      "
    >
      {/* Logo / Brand Name */}
      <div className="flex items-center ">
        <Link to="/" className="text-2xl font-bold">
          <span className={colors.logoAfro}>Afro</span>
          <span className={`${colors.logoHealth} ml-1`}>Health</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="space-x-8">
        {/* Example of a Link to the home page */}
        <Link to="/" className={`transition-colors ${colors.nav}`}>
          Home
        </Link>
        {/* New link to Site2 */}

        {/* If these are just internal section anchors on the Home page, you can keep them as <a> */}
        <a href="#shop" className={`transition-colors ${colors.nav}`}>
          Shop
        </a>
        <a href="#science" className={`transition-colors ${colors.nav}`}>
          Science
        </a>
        <a href="#contact" className={`transition-colors ${colors.nav}`}>
          Contact
        </a>
        <Link to="/site-2" className={`transition-colors ${colors.nav}`}>
          Site 2
        </Link>
      </nav>

      {/* Actions */}
      <div className="space-x-4 flex items-center">
        <button className="bg-transparent transition-colors hover:text-canary hover:border-canary border border-transparent px-2 py-1">
          Login
        </button>
        <button
          className={`border ${colors.button} px-4 py-2 rounded-full bg-transparent hover:bg-canary hover:text-jungleGreen transition-colors`}
        >
          Try Now
        </button>
      </div>
    </header>
  );
};

export default Header;
