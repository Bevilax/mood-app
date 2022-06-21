import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import backgroundyImageUrl from "../../img/backgroundy.png";
import "../../styles/login.css";

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

  return [
    <div className="whole">
      <div className="text-center mt-5">
        {!!token ? (
          <h1>I will be replaced with a beautiful page</h1>
        ) : (
          <div
            style={{
              backgroundImage: `url(${backgroundyImageUrl})`,
            }}
          >
            <h1 className="Loglog">Login</h1>
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
          </div>
        )}
      </div>
    </div>,
  ];
};
