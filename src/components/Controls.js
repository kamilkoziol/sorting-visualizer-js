import React from "react";

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.handleStartSorting}>Start sorting</button>
      <button onClick={props.handleGenerateNewArray}>
        Generate new array
      </button>
      <label>
        Array length
        <input
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
      </label>
      <label>
        Sorting speed
        <input
          type="range"
          min="0"
          max="100"
          onChange={props.handleSortDelayChange}
        ></input>
      </label>
    </div>
  );
};

export default Controls;
