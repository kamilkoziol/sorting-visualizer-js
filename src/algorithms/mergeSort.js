import { sleep } from "../utils/utils";

export const mergeSortFactory = (
  sortDelay,
  setData,
  setBarState,
  setIsSorting
) => {
  let aux = [];
  const mergeSort = async (data, low, high) => {
    if (low < high) {
      const middleIdx = Math.floor((low + high) / 2);
      // await Promise.all([
      //   mergeSort(data, low, middleIdx),
      //   mergeSort(data, middleIdx + 1, high),
      // ]);
      await mergeSort(data, low, middleIdx);
      await mergeSort(data, middleIdx + 1, high);
      await merge(data, aux, low, middleIdx, high);
      setBarState((prev) => {
        const newArray = [
          ...prev.slice(0, low),
          ...Array(high - low + 1).fill(0),
          ...prev.slice(high + 1, prev.length),
        ];
        return newArray;
      });
    }
    if (low === 0 && high === data.length - 1) {
      setIsSorting(false);
    }
  };

  const merge = async (data, aux, low, middleInx, high) => {
    aux = [...data];
    setBarState((prev) => {
      const newArray = [
        ...prev.slice(0, low),
        ...Array(high - low + 1).fill(1),
        ...prev.slice(high + 1, prev.length),
      ];
      return newArray;
    });
    let finger1 = low;
    let finger2 = middleInx + 1;
    let current = low;

    while (finger1 <= middleInx && finger2 <= high) {
      await sleep(sortDelay);

      if (aux[finger1] <= aux[finger2]) {
        data[current] = aux[finger1];
        finger1++;
      } else {
        data[current] = aux[finger2];
        finger2++;
      }
      current++;
      setData([...data]);
    }

    while (finger1 <= middleInx) {
      await sleep(sortDelay);
      data[current] = aux[finger1];
      current++;
      finger1++;
      setData([...data]);
    }
  };
  return mergeSort;
};
