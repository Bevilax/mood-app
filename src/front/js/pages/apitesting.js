import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getEventByZipCode } from "../api";

export const ApiTesting = () => {
  const [events, setEvents] = React.useState({});

  const params = useParams();

  React.useEffect(() => {
    getEventByZipCode();
  });

  return (
    <div>
      {/* events.venue.name */}
      <h1>hello api</h1>
      {events !== null ? events.venue.name : ""}
    </div>
  );
};
