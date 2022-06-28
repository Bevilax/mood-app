import React, { useContext, useState } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { EventsPage } from "./eventspage";

export const Emotions = () => {
  const { store, actions } = useContext(Context);
  const [zip, setZip] = useState("");
  const [taxonomy, setTaxonomy] = useState("");
  const history = useHistory();
  const getResults = () => {
    actions.getResults().then(() => {
      history.push("/eventspage");
    });
  };
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
        value="test"
        onClick={(e) => {
          setTaxonomy(e.target.value);
        }}
      />

      <label className="btn btn-outline fadingout" for="btncheck2">
        Energetic
      </label>

      <input
        type="checkbox"
        className="btn-check"
        id="btncheck3"
        autocomplete="off"
      />
      <label className="btn btn-outline fadingout" for="btncheck3">
        Artistic
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck4"
        autocomplete="off"
      />
      <label className="btn btn-outline fadingout" for="btncheck4">
        Introspective
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck5"
        autocomplete="off"
      />
      <label className="btn btn-outline fadingout" for="btncheck5">
        Social
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck6"
        autocomplete="off"
      />
      <label className="btn btn-outline fadingout" for="btncheck6">
        Lonely
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck7"
        autocomplete="off"
      />
      <label className="btn btn-outline fadingout" for="btncheck7">
        Sad
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck8"
        autocomplete="off"
      />
      <label className="btn btn-outline fadingout" for="btncheck8">
        Something
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck9"
        autocomplete="off"
        onClick={() => {
          history.push("/events");
        }}
      />
      <input
        type="text"
        placeholder="zip code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      ></input>
      <button
        onClick={() => {
          actions.eventData(taxonomy, zip);
        }}
        className="btn btn-outline fadingout"
        for="btncheck9"
      >
        GET EVENTS
      </button>
      <div></div>
    </div>
  );
};
