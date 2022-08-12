import React, { useEffect, useState } from "react";
import { algorithmFactory } from "../algorithms/algorithmFactory";
import { generateRandomArray } from "../utils/utils";
import Controls from "./Controls";
import Panel from "./Panel";

const SortingVisualizer = () => {
  const [arrayLength, setArrayLength] = useState(50);
  const [sortDelay, setSortDelay] = useState(25);
  const [data, setData] = useState([]);
  const [barState, setBarState] = useState([]);

  useEffect(() => {
    handleGenerateNewArray();
  }, []);

  const handleGenerateNewArray = () => {
    const newArray = generateRandomArray(arrayLength);
    setData(newArray);
    setBarState([...Array(newArray.length).fill(0)]);
  };

  const handleSortDelayChange = (e) => {
    setSortDelay(e.target.value);
  };

  const handleStartSorting = () => {
    const mergeSort = algorithmFactory(
      "mergesort",
      sortDelay,
      setData,
      setBarState
    );

    const startSorting = async () => {
      await mergeSort(data, 0, data.length - 1);
    };
    startSorting();
  };

  const handleArrayLengthChange = (e) => {
    setArrayLength(e.target.value);
    setData(generateRandomArray(e.target.value));
    setBarState([...Array(parseInt(e.target.value)).fill(0)]);
  };

  return (
    <div>
      <Controls
        handleGenerateNewArray={handleGenerateNewArray}
        handleStartSorting={handleStartSorting}
        handleArrayLengthChange={handleArrayLengthChange}
        handleSortDelayChange={handleSortDelayChange}
        arrayLength={arrayLength}
      ></Controls>
      <Panel
        data={data}
        arrayLength={arrayLength}
        barState={barState}
      ></Panel>
    </div>
  );
};

export default SortingVisualizer;
