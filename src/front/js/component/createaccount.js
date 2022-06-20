import React, { Component } from "react";
import "../../styles/registerbutton.css";

export const CreateAccount = () => (
  <div>
    <div className="register-button">
      <a href={"/register/"} className="btn">
        <span className="segundaPele">Create an Account</span>
      </a>
    </div>
  </div>
);
