import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/useraccount.css";

export const UserAccount = () => {
  const [zipcode, setZipcode] = useState("");

  const handleClick = () => {};
  return [
    <div className="whole">
      <div className="text-center mt-5 Form">
        <div className="accountinfo">
          <h1 className="accountheader">My Account</h1>
          <div>
            {/* <h5>Email: {User.email}</h5> */}

            <br />
            <br />
            <input
              type="text"
              placeholder="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            ></input>
            <br />
            <br />
            <button className="changezipcode" onClick={handleClick}>
              Change my Zip Code
            </button>
          </div>
        </div>
      </div>
    </div>,
  ];
};
