import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const token = sessionStorage.getItem("token");

  const handleClick = () => {
    actions.login(email, password).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {!!token ? (
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <button
              onClick={() => actions.logout()}
              className="btn btn-primary"
            >
              Log out
            </button>
          </div>
        </nav>
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button onClick={handleClick}>Login</button>
        </div>
      )}
      <div>
        <div className="register-button">
          <a href={"/register/"} className="btn btn-primary">
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
};
