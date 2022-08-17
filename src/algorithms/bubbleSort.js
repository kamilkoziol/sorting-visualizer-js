import { sleep } from "../utils/utils";

export const bubbleSortFactory = (sortDelay, setData, setBarState) => {
  const bubbleSort = async (data) => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        setBarState((prev) => {
          const newArray = [...prev];
          newArray[j] = 1;
          newArray[j + 1] = 1;
          return newArray;
        });
        if (data[j] > data[j + 1]) {
          await swap(data, j, j + 1);
        }
        setData([...data]);
        setBarState((prev) => {
          const newArray = [...prev];
          newArray[j] = 0;
          newArray[j + 1] = 0;
          return newArray;
        });
      }
      setBarState((prev) => {
        const newArray = [...prev];
        newArray[data.length - i - 1] = 2;
        return newArray;
      });
    }
    setBarState([...new Array(data.length).fill(0)]);
  };

  const swap = async (data, i, j) => {
    await sleep(sortDelay);
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  };
  return bubbleSort;
};
