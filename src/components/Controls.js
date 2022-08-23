import React from "react";
import "../styles/controls.css";

const Controls = (props) => {
  return (
    <div className="controls">
      <div
        className="btn start-btn"
        onClick={props.handleGenerateNewArray}
        disabled={props.isSorting}
      >
        Generate new array
      </div>

      <div className="array-length-slider-group">
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
          disabled={props.isSorting}
        />

        <input
          type="number"
          onChange={props.handleArrayLengthChange}
          value={props.arrayLength}
          disabled={props.isSorting}
        ></input>
      </div>

      <div className="sorting-speed-slider-group">
        <label htmlFor="delay-slider">Sorting speed</label>
        <input
          className="slider"
          id="delay-slider"
          type="range"
          min="0"
          max="100"
          onChange={props.handleSortDelayChange}
          disabled={props.isSorting}
        ></input>
      </div>
      <div
        className="btn start-btn"
        onClick={props.handleStartSorting}
        disabled={props.isSorting}
      >
        Start sorting
      </div>
    </div>
  );
};

export default Controls;
