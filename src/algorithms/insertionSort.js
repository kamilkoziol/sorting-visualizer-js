import { sleep } from "../utils/utils";

export const insertionSortFactory = (
  sortDelay,
  setData,
  setBarState,
  setIsSorting
) => {
  const insertionSort = async (data) => {
    let i = 1;
    while (i < data.length) {
      let k = i;
      let element = data[i];
      while (k > 0 && element < data[k - 1]) {
        data[k] = data[k - 1];
        await sleep(sortDelay);
        setBarState((prev) => [
          ...Array(k).fill(2),
          1,
          ...Array(i - k - 1).fill(2),
          1,
          ...prev.slice(i + 1, prev.length),
        ]);
        setData([...data]);
        k--;
      }

      data[k] = element;
      setBarState((prev) => [
        ...Array(i).fill(2),
        ...prev.slice(i, prev.length),
      ]);
      i++;
    }
    setBarState([...Array(data.length).fill(0)]);
    setIsSorting(false);
  };
  return insertionSort;
};
