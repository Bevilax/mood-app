import React, { useState, useEffect, useContext } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";
import { EventCard } from "../component/eventcard";

export const EventsPage = () => {
  const { store, actions } = useContext(Context);
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const fn = async () => {
      const apiEvents = await store.events;
      setResults(apiEvents);
    };
    fn();
    console.log(store.events);
    console.log("this is working");
  }, []);

  return (
    <div className="container">
      <div className="container vertical-scrollable">
        <div className="row">
          <div className="col">
            {results.map((eventOption, index) => (
              <EventCard
                title={eventOption["title"]}
                type={eventOption["type"]}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    // {JSON.stringify(store.events)}
    // <div className="d-flex flex-row flex-nowrap overflow-auto"></div>
  );
};
