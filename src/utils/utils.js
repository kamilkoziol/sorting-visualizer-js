export const generateRandomArray = (len) => {
  const newArray = [];
  for (let i = 0; i < len; i++) {
    newArray.push(randomNumber(10, 400));
  }
  return newArray;
};

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
