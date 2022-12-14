import React, { useEffect, useState } from "react";
import { algorithmFactory } from "../algorithms/algorithmFactory";
import { generateRandomArray } from "../utils/utils";
import Controls from "./Controls";
import Header from "./Header";
import Panel from "./Panel";

const SortingVisualizer = () => {
  const [arrayLength, setArrayLength] = useState(50);
  const [sortDelay, setSortDelay] = useState(25);
  const [upperData, setUpperData] = useState([]);
  const [upperBarState, setUpperBarState] = useState([]);
  const [lowerData, setLowerData] = useState([]);
  const [lowerBarState, setLowerBarState] = useState([]);
  const [isUpperSorting, setIsUpperSorting] = useState(false);
  const [isLowerSorting, setIsLowerSorting] = useState(false);
  const [upperAlgorithmName, setUpperAlgorithmName] =
    useState("bubblesort");
  const [lowerAlgorithmName, setLowerAlgorithmName] =
    useState("bubblesort");

  useEffect(() => {
    handleGenerateNewArray();
  }, []);

  const handleGenerateNewArray = () => {
    const newArray = generateRandomArray(arrayLength);
    setUpperData([...newArray]);
    setUpperBarState([...Array(newArray.length).fill(0)]);
    setLowerData([...newArray]);
    setLowerBarState([...Array(newArray.length).fill(0)]);
  };

  const handleSortDelayChange = (e) => {
    setSortDelay(e.target.value);
  };

  const handleStartSorting = () => {
    const upperAlgorithm = algorithmFactory(
      upperAlgorithmName,
      sortDelay,
      setUpperData,
      setUpperBarState,
      setIsUpperSorting
    );
    const lowerAlgorithm = algorithmFactory(
      lowerAlgorithmName,
      sortDelay,
      setLowerData,
      setLowerBarState,
      setIsLowerSorting
    );

    const startSorting = async () => {
      Promise.all([
        upperAlgorithm(upperData, 0, upperData.length - 1),
        lowerAlgorithm(lowerData, 0, lowerData.length - 1),
      ]);
    };
    setIsLowerSorting(true);
    setIsUpperSorting(true);
    startSorting();
  };

  const handleArrayLengthChange = (e) => {
    setArrayLength(e.target.value);
    const newArray = generateRandomArray(e.target.value);
    setUpperData([...newArray]);
    setUpperBarState([...Array(parseInt(e.target.value)).fill(0)]);
    setLowerData([...newArray]);
    setLowerBarState([...Array(parseInt(e.target.value)).fill(0)]);
  };

  const handleUpperSortAlgorithmChange = (e) => {
    setUpperAlgorithmName(e.target.value);
  };

  const handleLowerSortAlgorithmChange = (e) => {
    setLowerAlgorithmName(e.target.value);
  };

  return (
    <div>
      <Header></Header>
      <Controls
        handleGenerateNewArray={handleGenerateNewArray}
        handleStartSorting={handleStartSorting}
        handleArrayLengthChange={handleArrayLengthChange}
        handleSortDelayChange={handleSortDelayChange}
        arrayLength={arrayLength}
        isSorting={isUpperSorting || isLowerSorting}
      ></Controls>
      <Panel
        data={upperData}
        arrayLength={arrayLength}
        barState={upperBarState}
        handleSortAlgorithmChange={handleUpperSortAlgorithmChange}
        isSorting={isUpperSorting || isLowerSorting}
      ></Panel>
      <Panel
        data={lowerData}
        arrayLength={arrayLength}
        barState={lowerBarState}
        handleSortAlgorithmChange={handleLowerSortAlgorithmChange}
        isSorting={isUpperSorting || isLowerSorting}
      ></Panel>
    </div>
  );
};

export default SortingVisualizer;
