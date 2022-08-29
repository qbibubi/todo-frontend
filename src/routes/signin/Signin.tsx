import React from "react";

import { Link } from "react-router-dom";


const Signin: React.FC<any> = () => {
  return (
      <div className="form__container">
        <div className="form__card">
          <h1>Login</h1>
          <form action="/login" method="post" id="auth-form--login">
            <label htmlFor="username">
              Username
              <strong className="error" />
            </label>
            <input className="form__input" type="text" id="username" name="username" required minLength={6} maxLength={30} aria-invalid="true" aria-describedby="error" />
            <label htmlFor="password">
              Password
              <strong className="error" />
            </label>
            <input className="form__input" type="password" id="password" name="password" required minLength={8} maxLength={100} aria-invalid="true" aria-describedby="error" />
            <Link to="/signup">Don't have an account?</Link>
          </form>
          <input className="form__input" type="submit" value="Log in" form="auth-form--login" />
        </div>
      </div>
    );
}

export default Signin;