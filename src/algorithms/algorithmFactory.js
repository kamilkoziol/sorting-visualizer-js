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
};
