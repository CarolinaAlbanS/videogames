import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.scss";

const Admin = () => {
  const [games1, setGames1] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const role = localStorage.getItem("role");

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const res = await axios.get("http://localhost:3001/games");
      const games = res.data.data;
      setGames1(games);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGames = async (event) => {
    const id = event.target.getAttribute("id");
    try {
      await axios.delete(`http://localhost:3001/games/${id}`);
      await getGames();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img className="header-logo" src="./img/vegetta.png" alt="logo" />
        </Link>
        <nav className="header-navAdmin">
          <Link className="header-navAdmin__link" to="/games">
            Volver
          </Link>
          <Link className="header-navAdmin__link" to="/logout">
            Cerrar sesión
          </Link>
        </nav>
      </div>
      <div>
        <Link className="create" to="/create">
          Crear nuevo juego
        </Link>
      </div>
      <div className="games">
        {games1.map((game, index) => (
          <div className="games-game" key={index}>
            <img className="games-game__img" src={game.img} alt={game.title} />
            <div className="games-game__text">
              <h2>{game.title}</h2>
              <p>Votos: {game.votes}</p>
              <p>Comentarios: {game.comment}</p>
              <p>Categoria: {game.category}</p>
              <button
                id={game._id}
                onClick={deleteGames}
                className="games-admin"
              >
                {" "}
                Eliminar
              </button>
              <Link to={`/edit/${game._id}`} className="games-admin__link">
                <button id={game._id} className="games-admin">
                  {" "}
                  Editar{" "}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
