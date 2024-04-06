import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await axios.post("http://localhost:3001/users", data);
      const cli = res.data.data._id;
      console.log(cli);
      localStorage.setItem("id", cli);
      navigate("/games");
    } catch (error) {
      console.error("fallo en la llamada", error);
    }
  };

  return (
    <div className="register">
      <div className="register-top">
        <Link to="/" className="register-top__link">
          Volver
        </Link>
      </div>

      <h1 className="register__title">Registrate</h1>

      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="register-form__input"
          type="text"
          id="name"
          {...register("name", { required: true })}
          placeholder="Nombre"
        ></input>
        <label htmlFor="email"></label>
        <input
          className="register-form__input"
          type="email"
          id="email"
          {...register("email", { required: true })}
          placeholder="Dirección de email"
        ></input>

        <label htmlFor="password"></label>
        <input
          className="register-form__input"
          type="password"
          id="password"
          {...register("password", { required: true })}
          placeholder="Password"
        ></input>

        <button className="register-form__btn">Guardar perfil</button>
      </form>
    </div>
  );
};
export default Register;
