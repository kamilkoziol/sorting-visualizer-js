import React from "react";
import "../styles/controls.css";

const Controls = (props) => {
  return (
    <div className="controls">
      <div
        className="btn start-btn"
        onClick={props.handleGenerateNewArray}
      >
        Generate new array
      </div>
      <label htmlFor="length-slider" className="array-length">
        Array length
      </label>
      <input
        id="length-slider"
        className="slider"
        type="range"
        min="10"
        max="250"
        onChange={props.handleArrayLengthChange}
        value={props.arrayLength}
      />
      <input
        type="number"
        onChange={props.handleArrayLengthChange}
        value={props.arrayLength}
      ></input>
      <label htmlFor="delay-slider">Sorting speed</label>
      <input
        className="slider"
        id="delay-slider"
        type="range"
        min="0"
        max="100"
        onChange={props.handleSortDelayChange}
        className="slider"
      ></input>
      <div className="btn start-btn" onClick={props.handleStartSorting}>
        Start sorting
      </div>
    </div>
  );
};

export default Controls;
