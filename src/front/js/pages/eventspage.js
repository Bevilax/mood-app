import React, { useState, useEffect, useContext } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";
import { EventCard } from "../component/eventcard";

export const EventsPage = () => {
  const { store, actions } = useContext(Context);
  const [results, setResults] = React.useState([]);
  // const event = store.events;

  React.useEffect(() => {
    const fn = async () => {
      const apiEvents = await store.events;
      setResults(apiEvents);
    };
    fn();
    console.log("this is working");
  }, []);

  return (
    <div className="d-flex flex-row flex-nowrap overflow-auto">
      {React.Children.toArray(
        results.map((results, index) => (
          <EventCard title={results["title"]} key={index} />
        ))
      )}
    </div>

    // {JSON.stringify(store.events)}
  );
};
