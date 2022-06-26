import React, { useContext } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { EventsPage } from "./eventspage";

export const Emotions = () => {
  const { store, actions } = useContext(Context);
  // const history = useHistory();
  // const getResults = () => {
  //   actions.getResults().then(() => {
  //     history.push("/eventspage");
  //   });
  // };
  return (
    <div className="btn emotions-body" role="group">
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck1"
        autocomplete="off"
      />
      <div a href={"/eventspage/"}>
        <label className="btn btn-outline fadingout" for="btncheck1">
          Adventurous
        </label>
      </div>

      <input
        type="checkbox"
        className="btn-check"
        id="btncheck2"
        autocomplete="off"
        onClick={() => {
          actions.getEventByZipAndTaxonomy(95125, 1000000);
        }}
      />

      <label className="btn btn-outline fadingout" for="btncheck2">
        Happy
      </label>

      <input
        type="checkbox"
        className="btn-check"
        id="btncheck3"
        autocomplete="off"
      />
      <label className="btn btn-outline fadingout" for="btncheck3">
        Angry
      </label>
      <div>{/* <EventsPage /> */}</div>
    </div>
  );
};
