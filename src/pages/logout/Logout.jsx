import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Logout.scss";

const Logout = () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(id);
  const navigate = useNavigate();

  localStorage.removeItem("id");
  localStorage.removeItem("token");

  return (
    <div className="logout">
      <h2 className="logout__titulo">
        ¿Estas seguro que quieres cerrar sesion?
      </h2>
      <div className="logout-botones">
        <div className="logout-botones__boton1">
          <Link to="/">Si</Link>
        </div>
        <div className="logout-botones__boton2">
          <Link to="/">No</Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
