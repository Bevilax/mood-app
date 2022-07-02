import React from "react";

export const EventCard = (props) => {
  return (
    <div className="border border-danger col-3 m-3">
      <div className="card">
        <h5 className="card-title">{props.title}</h5>
        <h2 className="card-title">{props.type}</h2>
      </div>
    </div>
  );
};
