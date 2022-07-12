import React, { Component } from "react";
import "../../styles/moodydescription.css";

export const MoodyDescription = () => {
  return (
    <div className="row mb-5">
      <div className="col-4"></div>
      <div className="desc col-4 p-3">
        <h5>
          Select a mood to start <br></br>You can choose as many as you like
        </h5>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
