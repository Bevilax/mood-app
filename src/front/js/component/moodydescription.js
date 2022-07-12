import React, { Component } from "react";
import "../../styles/moodydescription.css";

export const MoodyDescription = () => {
  return (
    <div className="row mb-5">
      <div className="col-4"></div>
      <div className="desc col-4 p-3">
        <h5>
          Select a mood to start <br></br>You can choose as many as you like
          <br></br>
          If you want to see more events, just click on the Moody logo on top of
          the page to come back and select another mood
        </h5>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
