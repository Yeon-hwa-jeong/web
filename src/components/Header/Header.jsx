// Header.tsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <button className="header-button">
        <img src={`/hamburger.svg`} alt="Left Button" className="left"/>
      </button>
      <button className="header-button">
        <img src={`/YeonHwa.svg`} alt="Center Button" className="center"/>
      </button>
      <button className="header-button">
        <img src={`/alram.svg`} alt="Right Button" className="right"/>
      </button>
    </header>
  );
};

export default Header;