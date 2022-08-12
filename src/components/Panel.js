import React from "react";

const Panel = (props) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <div
        style={{
          display: "flex",
          flex: "3",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.data.map((element, i) => {
          let styles = {};
          if (props.barState[i] === 0) {
            styles = {
              height: `${element}px`,
              width: `calc(100% / ${props.arrayLength}`,
              margin: "1px",
              background: "black",
            };
          } else {
            styles = {
              height: `${element}px`,
              width: `calc(100% / ${props.arrayLength}`,
              margin: "1px",
              background: "red",
            };
          }
          return <div style={styles}></div>;
        })}
      </div>
      <div style={{ flex: "1" }}>
        <label htmlFor="algorithms">Choose algorithm:</label>
        <select id="algorithms" name="algorithms">
          <option value="bubblesort">Bubble Sort</option>
        </select>
      </div>
    </div>
  );
};

export default Panel;
