import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login";
import { CreateAccount } from "../component/createaccount";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <Login />
      <CreateAccount />
    </div>
  );
};
