import React from "react";
import { Link } from "react-router-dom";
import "./Logout.scss";

const Logout = () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const role = localStorage.getItem("role");

  const cerrar = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <div className="logout">
      <div className="logout-cube">
        <h2 className="logout__titulo">
          ¿Estas seguro que quieres cerrar sesion?
        </h2>
        <div className="logout-botones">
          <Link to="/Login" className="logout-botones__boton1" onClick={cerrar}>
            Si
          </Link>

          <Link to="/" className="logout-botones__boton2">
            No
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
