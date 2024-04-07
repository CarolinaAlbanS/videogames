import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios
        .post("http://localhost:3001/users/authenticate", data)
        .then((res) => {
          localStorage.setItem("id", res.data.data.user._id);
          localStorage.setItem("token", res.data.data.token);
        });
      navigate("/games");
    } catch (error) {
      console.error("Error en la peticion", error);
    }
  };
  return (
    <div className="login">
      <div className="register-top">
        <Link to="/" className="register-top__link">
          Volver
        </Link>
      </div>
      <div className="login-cuadrado">
        <div className="login-txt">
          <h2 className="login-txt__h2">¡Inicia sesion y vota!</h2>
          <p>Por favor, introduce tus datos para continuar</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="login-form__input"
            type="email"
            id="email"
            {...register("email", { required: true })}
            placeholder="Dirección de email"
          ></input>

          <input
            className="login-form__input"
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder="Password"
          ></input>
          <button className="login-form__btn">Entrar</button>
        </form>

        <div className="login-opt">
          <p className="login-opt__new"> ¿No tienes cuenta?</p>
          <Link to="/register">
            <h4 className="login-opt__crea">Crea tu cuenta aquí</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
