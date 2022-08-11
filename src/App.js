import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const ARRAY_LENGTH = 50;
  const SORT_DELAY = 10;
  const [data, setData] = useState([]);
  const aux = [...Array(ARRAY_LENGTH)];

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const generateRandomArray = (len) => {
    const newArray = [];
    for (let i = 0; i < len; i++) {
      newArray.push(randomNumber(10, 500));
    }
    return newArray;
  };

  const handleGenerateNewArray = () => {
    const newArray = generateRandomArray(ARRAY_LENGTH);
    setData(newArray);
  };

  const handleStartSorting = () => {
    const startSorting = async () => {
      await mergeSort(data, aux, 0, data.length - 1);
    };
    startSorting();
  };

  const mergeSort = async (data, aux, low, high) => {
    if (low < high) {
      const middleIdx = Math.floor((low + high) / 2);
      await Promise.all([
        mergeSort(data, aux, low, middleIdx),
        mergeSort(data, aux, middleIdx + 1, high),
      ]);
      await merge(data, aux, low, middleIdx, high);
    }
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const merge = async (data, aux, low, middleInx, high) => {
    aux = [...data];
    let finger1 = low;
    let finger2 = middleInx + 1;
    let current = low;

    while (finger1 <= middleInx && finger2 <= high) {
      await sleep(SORT_DELAY);
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
      data[current] = aux[finger1];
      current++;
      finger1++;
      setData([...data]);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((element) => {
          const styles = {
            height: `${element}px`,
            width: `calc(100vw / ${ARRAY_LENGTH}`,
            margin: "1px",
            background: "black",
          };
          return <div style={styles}></div>;
        })}
      </div>
      <button onClick={handleStartSorting}>Start sorting</button>
      <button onClick={handleGenerateNewArray}>Generate new array</button>
    </div>
  );
}
export default App;
