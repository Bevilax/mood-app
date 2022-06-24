import React, { useContext } from "react";
import "../../styles/emotions.css";
import { Context } from "../store/appContext";

export const Emotions = () => {
  const { store, actions } = useContext(Context);
  return (
    // <div
    //   classNameName="emotions-body"
    //   role="group"
    //   aria-label="Basic checkbox toggle button group"
    // >
    //   <input
    //     type="checkbox"
    //     classNameName="btn-check"
    //     autocomplete="off"
    //     id="btncheck1"
    //   ></input>
    //   <label classNameName="btn" for="btncheck1">
    //     Single toggle
    //   </label>
    //   <input type="checkbox" classNameName="btn-check" autocomplete="off"></input>
    //   <label classNameName="btn fadingout" for="btn-check-outlined">
    //     Single toggle2
    //   </label>
    //   <input type="checkbox" classNameName="btn-check" autocomplete="off"></input>
    //   <label classNameName="btn fadingout" for="btn-check-outlined">
    //     Single toggle3
    //   </label>
    // </div>
    <div className="btn emotions-body" role="group">
      <input
        type="checkbox"
        className="btn-check"
        id="btncheck1"
        autocomplete="off"
      />
      <label className="btn btn-outline fadingout" for="btncheck1">
        Adventurous
      </label>

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
    </div>
  );
};
