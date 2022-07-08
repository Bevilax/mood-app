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
    <div className="eventview container">
      <div className="row overflow-scroll">
        <div className="vh-100 container">
          <div>
            {results.map((eventOption, index) => (
              <EventCard
                title={eventOption["title"]}
                type={eventOption["type"]}
                eventtime={eventOption?.["datetime_local"]}
                venuename={eventOption?.venue?.["name"]}
                image={eventOption?.performers[0]?.["image"]}
                perName={eventOption?.performers[0]?.["type"]}
                url={eventOption?.["url"]}
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
