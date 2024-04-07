import React from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="home">
        <h1>Bienvenido a nuestra Web</h1>
        <p className="home-text">
          Te damos la bienvenida y te animamos a conocer las nuevas tendencias
          en videojuegos. Estaremos encantados de que votes y compartas tu
          opinión sobre los juegos mas actuales del mercado
        </p>
        <p>¡Que las votaciones las gane el mejor!</p>
        <Link className="home-link" to="/games">
          Ver juegos
        </Link>
      </div>
    </>
  );
};

export default Home;
