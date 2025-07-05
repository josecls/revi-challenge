// sleep defines a function that waits for the amount of time provided
const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { sleep };
