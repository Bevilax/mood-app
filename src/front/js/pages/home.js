import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login";
import { CreateAccount } from "../component/createaccount";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const token = sessionStorage.getItem("token");

  return (
    <div>
      <p className="FeelingModdy">Feeling Moody? Find what to do!</p>
      <Login />
      {/* {token ? "" : <CreateAccount />} */}
    </div>
  );
};
