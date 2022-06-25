import React, { useState, useEffect, useContext } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";

export const EventsPage = () => {
  const { store, actions } = useContext(Context);

  React.useEffect(() => {
    actions.getEventByZipAndTaxonomy();
  }, []);
  return (
    <div>
      <h3>Event results below:</h3>
      <br></br>
      {JSON.stringify(store.events)}
    </div>
  );
};
