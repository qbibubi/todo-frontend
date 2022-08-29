import React from "react";

import { Link } from "react-router-dom";


const Signup: React.FC<any> = () => {
  return (
  <div className="form__container">
    <div className="form__card">
        <h1>Register</h1>
        <form action="/register" method="post" id="auth-form--register">
        <label htmlFor="username">
            Username
            <strong className="error" />
        </label>
        <input className="form__input" type="text" id="username" name="username" required minLength={6} maxLength={30} aria-invalid="true" aria-describedby="error" />
        <label htmlFor="email">
            Email
            <strong className="error" />
        </label>
        <input className="form__input" type="email" id="email" name="email" required minLength={6} maxLength={254} aria-invalid="true" aria-describedby="error" />
        <label htmlFor="password">
            Password
            <strong className="error" />
        </label>
        <input className="form__input" type="password" id="password" name="password" required minLength={8} maxLength={100} aria-invalid="true" aria-describedby="error" />
        <label htmlFor="password-confirm">
            Confirm Password
            <strong className="error" />
        </label>
        <input className="form__input" type="password" id="password-confirm" required minLength={8} maxLength={100} aria-invalid="true" aria-describedby="error" />
        <Link to="/signin">Already got an account?</Link>
        </form>
        <input className="form__input" type="submit" value="Register" form="auth-form--register" />
    </div>
  </div>
  );
}

export default Signup;
