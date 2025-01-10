import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const isDoor = useMatch("/door");
  const isBox = useMatch("/box");
  const isClear = useMatch("/clear");
  const isRecycle = useMatch("/recycle");

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <div className="footer">
      <button
        className={`footer-icon ${isDoor ? "selected" : ""}`}
        onClick={() => handleImageClick("/door")}
      >
        <img src="/door.svg" alt="학교지도" />
      </button>
      <button
        className={`footer-icon ${isBox ? "selected" : ""}`}
        onClick={() => handleImageClick("/box")}
      >
        <img src="/box.svg" alt="파손신고" />
      </button>
      <button
        className={`footer-icon ${isClear ? "selected" : ""}`}
        onClick={() => handleImageClick("/clear")}
      >
        <img src="/clear.svg" alt="시설예약" />
      </button>
      <button
        className={`footer-icon ${isRecycle ? "selected" : ""}`}
        onClick={() => handleImageClick("/recycle")}
      >
        <img src="/recycle.svg" alt="스마트가전" />
      </button>
    </div>
  );
};

export default Footer;
