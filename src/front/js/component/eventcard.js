import React from "react";
import "../../styles/eventcard.css";

export const EventCard = (props) => {
  return (
    <div className="col-3 m-3">
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top Photo" src={props.image} />
          <div className="card-body">
            <h5 className="card-title">
              <p>{props.title}</p>
            </h5>
            <div className="card-text">
              <p>{props.eventtime}</p>
              <p>Location: {props.venuename}</p>
            </div>
            <a
              href={props.url}
              target="_blank"
              className="btn btn-primary FindMore"
            >
              Find out more!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
