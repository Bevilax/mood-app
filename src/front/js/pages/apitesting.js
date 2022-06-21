import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { EventCard } from "../component/eventcard";

export const ApiTesting = () => {
  const { store, actions } = useContext(Context);
  // const [events, setEvents] = React.useState({});

  // const params = useParams();

  React.useEffect(() => {
    actions.getEventByZip(95125);
  }, []);

  return (
    <div>
      <h1>hello api</h1>
      <EventCard />
      {JSON.stringify(store.events)}
    </div>
  );
};
