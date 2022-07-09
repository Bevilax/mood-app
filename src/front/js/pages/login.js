import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import backgroundyImageUrl from "../../img/backgroundy.png";
import "../../styles/login.css";
import { Emotions } from "./emotions";
import { CreateAccount } from "../component/createaccount";

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
    <div className="whole ">
      <div className="text-center mt-5 Form">
        {!!token ? (
          <Emotions />
        ) : (
          <div>
            <p className="FeelingModdy mx-auto text-center">
              Feeling Moody? Find what to do!
            </p>
            <div
              className="backgroundImage mx-auto justify-content-center"
              style={{
                backgroundImage: `url(${backgroundyImageUrl})`,
              }}
            >
              <div className="logForm mx-auto text-center ">
                <h1 className="Loglog mx-auto text-center">Login</h1>
                <div>
                  <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <br />
                  <br />
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <br />
                  <br />
                  <button
                    className="LoginButton mx-auto justify-content-center"
                    onClick={handleClick}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="CreateAccount ">
                <CreateAccount />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>,
  ];
};
