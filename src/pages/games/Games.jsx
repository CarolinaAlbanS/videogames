import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Games.scss";

const Games = () => {
  const [games, setGames] = useState([]);
  const [gamesFiltered, setGamesFiltered] = useState([]);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const userRole = localStorage.getItem("role");

  useEffect(() => {
    getGames();
  }, []);

  // Peticion para pintar los juegos
  const getGames = async () => {
    try {
      const res = await axios.get("http://localhost:3001/games");
      const sortedGames = res.data.data.sort((a, b) => b.votes - a.votes);
      setGames(sortedGames);
      setGamesFiltered(sortedGames);
    } catch (error) {
      console.log(error);
    }
  };

  // Para votar los juegos
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

  // El buscador
  const filterGames = (inputValue) => {
    const gamesByInput = games.filter((game) =>
      game.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setGamesFiltered(gamesByInput);
  };

  // El filtro por voto
  const filterVotes = (votesValue) => {
    if (votesValue === "") {
      setGamesFiltered(games);
      return;
    }
    const numVotesValue = parseInt(votesValue);
    const votesByInput = games.filter((game) => game.votes === numVotesValue);
    setGamesFiltered(votesByInput);
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header-logo" src="./img/vegetta.png" alt="logo" />
        </Link>
        <nav className="header-nav">
          {userRole === "admin" && (
            <Link className="header-nav__link" to="/admin">
              Administrador
            </Link>
          )}

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
      <div className="boxSearchr">
        {/* Buscador */}
        <div className="boxSearchr-search">
          <p>Encuentra tu juego favorito</p>
          <input
            className="boxSearchr-search__input"
            type="text"
            placeholder="Buscar..."
            onChange={(e) => filterGames(e.target.value)}
          ></input>
        </div>
        {/* Filtrar votos */}
        <div className="boxSearchr-search">
          <p>Filtra por numero de votos</p>
          <input
            className="boxSearchr-search__input"
            type="text"
            placeholder="Buscar..."
            onChange={(e) => filterVotes(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="games">
        {gamesFiltered.map((game, index) => (
          <div className="games-game" key={index}>
            <img className="games-game__img" src={game.img} alt={game.title} />
            <div className="games-game__text">
              <h2>{game.title}</h2>
              <p>Votos: {game.votes}</p>
              <p>Comentarios: {game.comment}</p>
              <p>Categoria: {game.category}</p>
              <button
                id={game._id}
                onClick={updateGames}
                className="games-vote"
              >
                Votar
              </button>
              {/* <button id={game._id} className="games-vote">
                {" "}
                Comentar
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Games;
