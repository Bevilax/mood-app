import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import moodyImageUrl from "../../img/moody.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="NavNav">
      <nav className="navbar ">
        <div className="container mx-auto justify-content-center">
          <Link to="/">
            <span className="image">
              <img src={moodyImageUrl} width="600" height="500" />
            </span>
          </Link>
          <div className="ml-auto">
            {!store.token ? (
              <Link to="/login">
                <button type="button" className="invisible" disabled></button>
              </Link>
            ) : (
              <>
                {" "}
                <Link to="/">
                  <button
                    onClick={() => actions.logout()}
                    className="logout position-absolute top-50 translate-middle "
                  >
                    Log out
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
