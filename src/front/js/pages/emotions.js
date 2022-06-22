import React from "react";

export const Emotions = () => {
  return (
    <div>
      <input
        type="checkbox"
        class="btn-check"
        id="btn-check-outlined"
        autocomplete="off"
      ></input>
      <label class="btn btn-outline-primary" for="btn-check-outlined">
        Single toggle
      </label>
    </div>
  );
};
