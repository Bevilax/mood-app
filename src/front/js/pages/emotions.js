import React, { useContext, useState } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";
import { EventsPage } from "./eventspage";
import { MoodyDescription } from "../component/moodydescription";

export const Emotions = () => {
  const { store, actions } = useContext(Context);
  const [zip, setZip] = useState("");
  const [taxonomy, setTaxonomy] = useState("");
  const history = useHistory();

  return (
    <div className="whole">
      <div>
        <MoodyDescription />
      </div>
      <div>
        <p className="HowDoYou mx-auto text-center">What Is Your Mood?</p>
        <div
          className="btn emotions-body mx-auto justify-content-center"
          role="group"
        >
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck1"
            autoComplete="off"
            onClick={(e) => {
              actions.getEventByZipAndTaxonomy(1060000);
              actions.getEventByZipAndTaxonomy(1110000);
              actions.getEventByZipAndTaxonomy(1120000);
              actions.getEventByZipAndTaxonomy(1150000);
              actions.getEventByZipAndTaxonomy(2010000);
            }}
          />

          <label className="btn btn-outline fadingout" htmlFor="btncheck1">
            <i className="fa-solid fa-broom-ball"></i>
            <br />
            Adventurous
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck2"
            autoComplete="off"
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

          <label className="btn btn-outline fadingout" htmlFor="btncheck2">
            <i className="fa-solid fa-bolt"></i>
            <br />
            Energetic
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck3"
            autoComplete="off"
            onClick={(e) => {
              actions.getEventByZipAndTaxonomy(1100000);
              actions.getEventByZipAndTaxonomy(1100000);
              actions.getEventByZipAndTaxonomy(1130000);
              actions.getEventByZipAndTaxonomy(1150000);
              actions.getEventByZipAndTaxonomy(3020000);
            }}
          />
          <label className="btn btn-outline fadingout" htmlFor="btncheck3">
            <i className="fa-solid fa-masks-theater"></i>
            <br />
            Artistic
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck4"
            autoComplete="off"
            onClick={(e) => {
              actions.getEventByZipAndTaxonomy(1090000);
              actions.getEventByZipAndTaxonomy(3010000);
              actions.getEventByZipAndTaxonomy(3060000);
            }}
          />
          <label className="btn btn-outline fadingout" htmlFor="btncheck4">
            <i className="fa-solid fa-head-side-virus"></i>
            <br />
            Introspective
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck5"
            autoComplete="off"
            onClick={(e) => {
              actions.getEventByZipAndTaxonomy(1010000);
              actions.getEventByZipAndTaxonomy(1120000);
              actions.getEventByZipAndTaxonomy(3030000);
              actions.getEventByZipAndTaxonomy(3090000);
            }}
          />
          <label className="btn btn-outline fadingout" htmlFor="btncheck5">
            <i className="fa-solid fa-users"></i>
            <br />
            Social
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck6"
            autoComplete="off"
            onClick={(e) => {
              actions.getEventByZipAndTaxonomy(1010000);
              actions.getEventByZipAndTaxonomy(1050000);
              actions.getEventByZipAndTaxonomy(1100000);
              actions.getEventByZipAndTaxonomy(1140000);
              actions.getEventByZipAndTaxonomy(3070000);
            }}
          />
          <label className="btn btn-outline fadingout" htmlFor="btncheck6">
            <i className="fa-solid fa-user"></i>
            <br />
            Lonely
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck7"
            autoComplete="off"
            onClick={(e) => {
              actions.getEventByZipAndTaxonomy(1060000);
              actions.getEventByZipAndTaxonomy(1130000);
              actions.getEventByZipAndTaxonomy(3070000);
            }}
          />
          <label className="btn btn-outline fadingout" htmlFor="btncheck7">
            <i className="fa-solid fa-face-sad-tear"></i>
            <br />
            Sad
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck8"
            autoComplete="off"
            onClick={(e) => {
              actions.getEventByZipAndTaxonomy(1140000);
              actions.getEventByZipAndTaxonomy(3010000);
              actions.getEventByZipAndTaxonomy(3080000);
            }}
          />
          <label className="btn btn-outline fadingout" htmlFor="btncheck8">
            <i className="fa-solid fa-face-tired"></i>
            <br />
            Stressed
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck9"
            autoComplete="off"
            onClick={() => {
              history.push("/events");
            }}
          />

          <div className="mt-5">
            <Link to="/events">
              {" "}
              <button className="btn GetEvents" htmlFor="btncheck9">
                Find Events
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
