import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Edit = () => {
  const [game, setGame] = useState({});
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGame();
  }, []);

  const getGame = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/games/${id}`);
      setGame(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // El preventDefault previene el comportamiento por defecto del fomulario
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3001/games/${id}`,
        formData
      );
      alert("Juego modificado correctamente");
    } catch (error) {
      console.error("Error en la llamada", error);
    }
  };

  return (
    <div className="register">
      <div className="register-top">
        <Link to="/admin" className="register-top__link">
          Volver
        </Link>
      </div>
      <div className="register-box">
        <h1 className="register__title">Modificar juego</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="img">
            <input
              className="register-form__input"
              type="url"
              id="img"
              name="img"
              value={formData.img !== undefined ? formData.img : game.img || ""}
              onChange={handleChange}
              placeholder="Copia la URL"
            />
          </label>
          <label htmlFor="title">
            <input
              className="register-form__input"
              type="text"
              id="title"
              name="title"
              value={
                formData.title !== undefined ? formData.title : game.title || ""
              }
              onChange={handleChange}
              placeholder="Nombre"
            />
          </label>
          <label htmlFor="category">
            <input
              className="register-form__input"
              type="text"
              id="category"
              name="category"
              value={
                formData.category !== undefined
                  ? formData.category
                  : game.category || ""
              }
              onChange={handleChange}
              placeholder="category"
            />
          </label>
          <label htmlFor="comment">
            <input
              className="register-form__input"
              type="text"
              id="comment"
              name="comment"
              value={
                formData.comment !== undefined
                  ? formData.comment
                  : game.comment || ""
              }
              onChange={handleChange}
              placeholder="comment"
            />
          </label>

          <button className="register-form__btn">Guardar modificación</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
