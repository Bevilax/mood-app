import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import backgroundyImageUrl from "../../img/backgroundy.png";
import "../../styles/registration.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipcode, setZipcode] = useState("");
  const { store, actions } = useContext(Context);
  const history = useHistory();

  const handleClick = () => {
    actions.register(email, password).then(() => {
      if (email == "" && password == "" && zipcode == "") {
        alert("Cannot be empty");
      } else {
        history.push("/");
      }
    });
  };
  return (
    <div className="whole">
      <div className="RegistrationForm">
        <div
          className="backgroundImage2"
          style={{
            backgroundImage: `url(${backgroundyImageUrl})`,
          }}
        >
          <h1 className="RegistrationSentence">Registration</h1>
          <div className="ActualRegistrationForm">
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
            <input
              type="zipcode"
              placeholder="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            ></input>
            <br />
            <br />
            <button className="buttonCreateAccount" onClick={handleClick}>
              Create an Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
