const multiply = (num1, num2) => {
  let result = num1 * num2;
  if (result < 10) {
    return true;
  } else {
    return false;
  }
};

export default multiply;
