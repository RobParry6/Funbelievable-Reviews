const timeConv = (timeStr) => {
  const time = new Date(timeStr);
  const splitTime = time.toLocaleString().split(",");
  return [splitTime[1].trim(), splitTime[0]];
};

export default timeConv;
