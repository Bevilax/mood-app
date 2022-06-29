import React, { useState, useEffect, useContext } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";
import { EventCard } from "../component/eventcard";

export const EventsPage = () => {
  const { store, actions } = useContext(Context);
  const [results, setResults] = React.useState([]);
  const ourFunction = actions.getEventByZipAndTaxonomy();

  // React.useEffect(() => {
  //   actions.getEventByZipAndTaxonomy(95125, 1000000);
  // }, []);

  // React.useEffect(() => {
  //   const fn = async () => {
  //     const apiResults = await ourFunction;
  //     setResults(apiResults);
  //   };
  //   fn();
  // }, []);
  return (
    <div>
      {/* <h3>Event results below:</h3>
      <br></br>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {results.map((item, index) => (
          <EventCard event={item} uid={index + 1} key={index} />
        ))}
      </div> */}
      {JSON.stringify(store.events)}
    </div>
  );
};
