import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import moodyImageUrl from "../../img/moody.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="NavNav">
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">
              <img src={moodyImageUrl} width="170" height="120" />
            </span>
          </Link>
          <div className="ml-auto">
            {!store.token ? (
              <Link to="/login">
                <button type="button" className="invisible" disabled></button>
              </Link>
            ) : (
              <button onClick={() => actions.logout()} className="logout">
                <span className="layer"> Log out</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
