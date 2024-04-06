import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src="./img/vegetta.png" alt="logo" />
      <nav className="header-nav">
        <Link className="header-nav__link" to="/games">
          Juegos
        </Link>
        <Link className="header-nav__link" to="/register">
          Registro
        </Link>
        <Link className="header-nav__link" to="/login">
          Iniciar sesión
        </Link>
      </nav>
    </div>
  );
};

export default Header;
