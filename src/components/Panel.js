import React from "react";
import "../styles/panel.css";

const Panel = (props) => {
  return (
    <div className="panel">
      <div className="panel__sorter">
        {props.data.map((element, i) => {
          const dark = "rgba(10, 10, 10, 1)";
          let styles = {
            height: `${element}px`,
            width: `calc(100% / ${props.arrayLength}`,
          };
          if (props.barState[i] === 0) {
            const color = "hsl(307, 100%, 50%)";
            styles = {
              ...styles,
              backgroundImage: `linear-gradient(0deg,${dark} 5%,${color} 100%)`,
            };
          } else if (props.barState[i] === 1) {
            const color = `rgb(${element / -6 + 250},0,0)`;
            styles = {
              ...styles,
              backgroundImage: `linear-gradient(0deg,${dark} 5%,${color} 100%)`,
            };
          } else if (props.barState[i] === 2) {
            const color = `rgb(0,${element / -6 + 250},0)`;
            styles = {
              ...styles,
              backgroundImage: `linear-gradient(0deg,${dark} 5%,${color} 100%)`,
            };
          }

          if (props.barState[i] === 0) {
            return <div key={i} className="bar" style={styles}></div>;
          } else {
            return <div key={i} className="bar" style={styles}></div>;
          }
        })}
      </div>
      <div className="panel__controls">
        <label htmlFor="algorithms">Choose algorithm:</label>
        <select
          id="algorithms"
          name="algorithms"
          onChange={props.handleSortAlgorithmChange}
          disabled={props.isSorting}
        >
          <option value="bubblesort">Bubble Sort</option>
          <option value="mergesort">Merge Sort</option>
          <option value="insertionsort">Insertion Sort</option>
        </select>
      </div>
    </div>
  );
};

export default Panel;
