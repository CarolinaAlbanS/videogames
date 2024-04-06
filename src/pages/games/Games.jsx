import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Games.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Games = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [modifi, setModifi] = useState();
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const res = await axios.get("http://localhost:3001/games");
      setGames(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateGames = async (event) => {
    const id = event.target.getAttribute("id");
    try {
      const res = await axios.put(
        `http://localhost:3001/games/votes/${id}`,
        { votes: modifi }
        // { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="header">
        <img className="header-logo" src="./img/vegetta.png" alt="logo" />
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
        {games.map((game) => (
          <div className="games-juegos" key={game.id}>
            <img
              className="games-juegos__img"
              src={game.img}
              alt={game.title}
            />
            <div className="games-juegos__text">
              <h2>{game.title}</h2>
              <h3>Votos</h3>
              <p>{game.votes}</p>
              <h3>Comentarios</h3>
              <p>{game.comment}</p>
              <h3>Vota!</h3>
            </div>
            <button onClick={updateGames} className="games-voto">
              <img
                id={game._id}
                className="games-voto__img"
                src="./img/added.png"
                alt="voto"
              />
            </button>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Games;
