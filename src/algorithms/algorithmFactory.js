import { bubbleSortFactory } from "./bubbleSort";
import { mergeSortFactory } from "./mergeSort";

export const algorithmFactory = (
  algorithmName,
  sortDelay,
  setData,
  setState,
  setIsSorting
) => {
  switch (algorithmName) {
    case "mergesort":
      return mergeSortFactory(sortDelay, setData, setState, setIsSorting);
  }
  switch (algorithmName) {
    case "bubblesort":
      return bubbleSortFactory(sortDelay, setData, setState, setIsSorting);
  }
};
