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
        <div className="container">
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
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {" "}
                    <Link className="dropdown-item" to="/">
                      <button
                        onClick={() => actions.logout()}
                        className="logout"
                      >
                        Log out
                      </button>
                    </Link>
                    <Link className="dropdown-item">
                      <button className="myaccount">My Account</button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
