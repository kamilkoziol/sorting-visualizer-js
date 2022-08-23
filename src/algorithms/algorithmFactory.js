import { bubbleSortFactory } from "./bubbleSort";
import { mergeSortFactory } from "./mergeSort";
import { insertionSortFactory } from "./insertionSort";

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
    case "bubblesort":
      return bubbleSortFactory(sortDelay, setData, setState, setIsSorting);
    case "insertionsort":
      return insertionSortFactory(
        sortDelay,
        setData,
        setState,
        setIsSorting
      );
  }
};
