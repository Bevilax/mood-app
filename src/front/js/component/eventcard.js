import React from "react";

export const EventCard = (props) => {
  return (
    <div className="border border-danger col-3 m-3">
      <div className="card card-block m-8">
        <h5 className="card-title">{props.title}</h5>
      </div>
    </div>
  );
};
