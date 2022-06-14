import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import moodyImageUrl from "../../img/moody.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
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
            <button
              onClick={() => actions.logout()}
              className="btn btn-primary"
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
