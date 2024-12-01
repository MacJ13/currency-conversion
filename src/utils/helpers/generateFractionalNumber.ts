export const generateFractionalNumber = (rate: number) => {
  const arr = rate.toString().split(".");

  const [_, fractional] = arr;

  let testNumber = "";

  if (fractional.length < 4) testNumber = rate.toFixed(4);
  else testNumber = rate.toString();

  console.log(testNumber);

  return testNumber;
};
