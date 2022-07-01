import React, { useState, useEffect, useContext } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";
import { EventCard } from "../component/eventcard";

export const EventsPage = () => {
  const { store, actions } = useContext(Context);
  const [results, setResults] = React.useState([]);
  const event = store.events;

  React.useEffect(() => {
    const fn = async () => {
      const apiEvents = await actions.getEventByZipAndTaxonomy();
      setResults(apiEvents);
    };
    fn();
  }, []);

  return (
    <div className="d-flex flex-row flex-nowrap overflow-auto">
      {results.map((item, index) => (
        <EventCard event={item} key={index} />
      ))}
    </div>

    //   {JSON.stringify(store.events)}
  );
};
