import React from "react";

export const EventCard = (props) => {
  return (
    <div className="border border-danger col-3 m-3">
      <div className="card card-block">
        <h5 className="card-title">{props.events.performer.name}</h5>
      </div>
    </div>
    // <div className="border border-danger col-3 m-3">
    //   <div className="card card-block">
    //     <h5 className="card-title">{props.event.name}</h5>
    //     {/* props.event.performers.name */}
    //     {/* <img src={Starwars} /> */}
    //     <div className="card-footer d-flex">
    //       {/* <div className="left-button">
    //     <a href={"/people/" + props.uid} className="btn btn-primary">
    //       {props.character.name}
    //     </a>
    //     </div> */}
    //     </div>
    //   </div>
    // </div>
  );
};
