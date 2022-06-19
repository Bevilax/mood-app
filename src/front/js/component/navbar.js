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
              <img src="moody.png" width="100" height="70" />
            </span>
          </Link>
          <div className="ml-auto">
            {!store.token ? (
              <Link to="/login">
                <button type="button" className="invisible" disabled></button>
              </Link>
            ) : (
              <div className="logout">
                <button onClick={() => actions.logout()} className="btn btn">
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
