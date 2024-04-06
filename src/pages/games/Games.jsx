import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Games = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState();

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
    console.log(games);
  };

  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <img src={game.img} alt={game.title} />
          <p>Valoracion: {game.votes}</p>
          <p>{game.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Games;
