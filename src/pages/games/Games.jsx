import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Games.scss";

const Games = () => {
  const [games, setGames] = useState([]);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  console.log(token);
  console.log(id);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const res = await axios.get("http://localhost:3001/games");
      setGames(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateGames = async (event) => {
    if (!token) {
      alert("Debes iniciar sesión para votar.");
      return;
    }
    const id = event.target.getAttribute("id");
    try {
      const res = await axios.put(
        `http://localhost:3001/games/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await getGames();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header-logo" src="./img/vegetta.png" alt="logo" />
        </Link>
        <nav className="header-nav">
          <Link className="header-nav__link" to="/register">
            Registro
          </Link>
          <Link className="header-nav__link" to="/login">
            Iniciar sesión
          </Link>
          <Link className="header-nav__link" to="/logout">
            Cerrar sesión
          </Link>
        </nav>
      </div>

      <div className="games">
        {games.map((game, index) => (
          <div className="games-juegos" key={index}>
            <img
              className="games-juegos__img"
              src={game.img}
              alt={game.title}
            />
            <div className="games-juegos__text">
              <h2>{game.title}</h2>
              <p>Votos: {game.votes}</p>
              <p>Comentarios: {game.comment}</p>
              <p>Categoria: {game.category}</p>
              <button
                id={game._id}
                onClick={updateGames}
                className="games-voto"
              >
                {" "}
                Votar
              </button>
              <button id={game._id} className="games-voto">
                {" "}
                Comentar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Games;
