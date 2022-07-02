import React from "react";
import "../../styles/eventcard.css";

export const EventCard = (props) => {
  return (
    <div className="border border-danger">
      <div className="card">
        <p>{props.title}</p>
        <p>{props.type}</p>
        <p>{props.eventtime}</p>
        <p>Location: {props.venuename}</p>
        <p>{props.perName}</p>

        <img src={props.image} />
      </div>
    </div>
    // <div className="border border-danger col-3 m-3"></div>
  );
};
