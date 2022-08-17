import { bubbleSortFactory } from "./bubbleSort";
import { mergeSortFactory } from "./mergeSort";

export const algorithmFactory = (
  algorithmName,
  sortDelay,
  setData,
  setState
) => {
  switch (algorithmName) {
    case "mergesort":
      return mergeSortFactory(sortDelay, setData, setState);
  }
  switch (algorithmName) {
    case "bubblesort":
      return bubbleSortFactory(sortDelay, setData, setState);
  }
};
