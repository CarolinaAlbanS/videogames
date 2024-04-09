import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Create = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3001/games", data);
      //   const cli = res.data.data._id;
      navigate("/login");
    } catch (error) {
      console.error("fallo en la llamada", error);
    }
  };

  return (
    <div className="register">
      <div className="register-box">
        <h1 className="register__title">Registrate</h1>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="img">
            <input
              className="register-form__input"
              type="url"
              id="img"
              accept="image/png, image/jpg"
              {...register("img", { required: true })}
              placeholder="Copia la URL"
            ></input>
          </label>
          <label htmlFor="title">
            <input
              className="register-form__input"
              type="text"
              id="title"
              {...register("title", { required: true })}
              placeholder="Nombre"
            ></input>
          </label>

          <label htmlFor="category">
            <input
              className="register-form__input"
              type="text"
              id="category"
              {...register("category", { required: true })}
              placeholder="Categoria"
            ></input>
          </label>
          <label htmlFor="comment">
            <input
              className="register-form__input"
              type="text"
              id="comment"
              {...register("comment", { required: true })}
              placeholder="Comentarios"
            ></input>
          </label>

          <button className="register-form__btn">Guardar perfil</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
