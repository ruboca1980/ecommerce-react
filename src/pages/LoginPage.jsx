import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import defaultValues from "../utils/defaultValues";
import './styles/loginRegisterPage.css'

const LoginPage = () => {

  const [token, setToken] = useState()

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", `${res.data.user.firstName} ${res.data.user.lastName}`
        );
      })
      .catch((err) => {
        console.log(err);
        localStorage.clear();
      });
    reset(defaultValues);
  };

  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.clear()
    setToken()
    navigate(`/user/login`)
  }

  if (localStorage.getItem('name')) {
    return (
      <div className="perfil">
        <img className="perfil__img" src="/images/16-my-account-login.png" alt="cr" />
        <h2 className="perfil__name"> {localStorage.getItem('name')}</h2>
        <button className="btn" onClick={handleClick}>logout</button>
      </div>
    )
  } else {
    return (
      <div className="login__form">
        <form className="form" onSubmit={handleSubmit(submit)}>
          <h2 className="form__title">Login</h2>
          <div className="form__item">
            <label className="form__label" htmlFor="email">E-mail:</label>
            <input className="form__input" {...register("email")} type="email" id="3email" placeholder="Enter your e-mail..." />
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="password">Password:</label>
            <input className="form__input" {...register("password")} type="password" id="password" placeholder="Enter your password..." />
          </div>
            <div className="form__btn">
              <button className="btn">Login</button>
            </div>
        </form>
        <Link className="link__register" to='/user/register' >Go to register</Link>
      </div>
    );
  }
};

export default LoginPage;
