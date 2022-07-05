import React, { useContext, useState } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";
import { EventsPage } from "./eventspage";

export const Emotions = () => {
  const { store, actions } = useContext(Context);
  const [zip, setZip] = useState("");
  const [taxonomy, setTaxonomy] = useState("");
  const history = useHistory();

  return (
    <div className="btn emotions-body" role="group">
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck1"
        autocomplete="off"
        onClick={(e) => {
          actions.getEventByZipAndTaxonomy(1060000);
          actions.getEventByZipAndTaxonomy(1110000);
          actions.getEventByZipAndTaxonomy(1120000);
          actions.getEventByZipAndTaxonomy(1150000);
          actions.getEventByZipAndTaxonomy(2010000);
        }}
      />

      <label className="btn btn-outline fadingout" for="btncheck1">
        <i class="fa-solid fa-broom-ball"></i>
        <br />
        Adventurous
      </label>

      <input
        type="checkbox"
        className="btn-check"
        id="btncheck2"
        autocomplete="off"
        onClick={(e) => {
          actions.getEventByZipAndTaxonomy(1020000);
          actions.getEventByZipAndTaxonomy(1030000);
          actions.getEventByZipAndTaxonomy(1040000);
          actions.getEventByZipAndTaxonomy(1080000);
          actions.getEventByZipAndTaxonomy(1140000);
          actions.getEventByZipAndTaxonomy(2010000);
          actions.getEventByZipAndTaxonomy(3050000);
          actions.getEventByZipAndTaxonomy(3090000);
        }}
      />

      <label className="btn btn-outline fadingout" for="btncheck2">
        <i class="fa-solid fa-bolt"></i>
        <br />
        Energetic
      </label>

      <input
        type="checkbox"
        className="btn-check"
        id="btncheck3"
        autocomplete="off"
        onClick={(e) => {
          actions.getEventByZipAndTaxonomy(1100000);
          actions.getEventByZipAndTaxonomy(1100000);
          actions.getEventByZipAndTaxonomy(1130000);
          actions.getEventByZipAndTaxonomy(1150000);
          actions.getEventByZipAndTaxonomy(3020000);
        }}
      />
      <label className="btn btn-outline fadingout" for="btncheck3">
        <i class="fa-solid fa-masks-theater"></i>
        <br />
        Artistic
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck4"
        autocomplete="off"
        onClick={(e) => {
          actions.getEventByZipAndTaxonomy(1090000);
          actions.getEventByZipAndTaxonomy(3010000);
          actions.getEventByZipAndTaxonomy(3060000);
        }}
      />
      <label className="btn btn-outline fadingout" for="btncheck4">
        <i class="fa-solid fa-head-side-virus"></i>
        <br />
        Introspective
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck5"
        autocomplete="off"
        onClick={(e) => {
          actions.getEventByZipAndTaxonomy(1010000);
          actions.getEventByZipAndTaxonomy(1120000);
          actions.getEventByZipAndTaxonomy(3030000);
          actions.getEventByZipAndTaxonomy(3090000);
        }}
      />
      <label className="btn btn-outline fadingout" for="btncheck5">
        <i class="fa-solid fa-users"></i>
        <br />
        Social
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck6"
        autocomplete="off"
        onClick={(e) => {
          actions.getEventByZipAndTaxonomy(1010000);
          actions.getEventByZipAndTaxonomy(1050000);
          actions.getEventByZipAndTaxonomy(1100000);
          actions.getEventByZipAndTaxonomy(1140000);
          actions.getEventByZipAndTaxonomy(3070000);
        }}
      />
      <label className="btn btn-outline fadingout" for="btncheck6">
        <i class="fa-solid fa-user"></i>
        <br />
        Lonely
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck7"
        autocomplete="off"
        onClick={(e) => {
          actions.getEventByZipAndTaxonomy(1060000);
          actions.getEventByZipAndTaxonomy(1130000);
          actions.getEventByZipAndTaxonomy(3070000);
        }}
      />
      <label className="btn btn-outline fadingout" for="btncheck7">
        <i class="fa-solid fa-face-sad-tear"></i>
        <br />
        Sad
      </label>
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck8"
        autocomplete="off"
        onClick={(e) => {
          actions.getEventByZipAndTaxonomy(1140000);
          actions.getEventByZipAndTaxonomy(3010000);
          actions.getEventByZipAndTaxonomy(3080000);
        }}
      />
      <label className="btn btn-outline fadingout" for="btncheck8">
        <i class="fa-solid fa-face-tired"></i>
        <br />
        Stressed
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
      <div>
        <Link to="/events">
          {" "}
          <button className="btn GetEvents" for="btncheck9">
            Find Events
          </button>
        </Link>
      </div>
    </div>
  );
};
