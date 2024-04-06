import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer-title">Siguenos en:</h3>
      <ul className="footer-list">
        <li className="footer-list__enlace">
          <a href="https://www.instagram.com/" target="blank">
            <img src="./img/Instagram.png" alt="logo" />
          </a>
        </li>
        <li className="footer-list__enlace">
          <a href="https://twitter.com/?lang=es" target="blank">
            <img src="./img/twitter.png" alt="logo" />
          </a>
        </li>
        <li className="footer-list__enlace">
          <a href="https://www.youtube.com/" target="blank">
            <img src="./img/youtube.png" alt="logo" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
