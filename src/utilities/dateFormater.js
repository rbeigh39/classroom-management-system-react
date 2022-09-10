const dateFormater = (dateStr) => {
  const date = new Date(dateStr).toString();

  const dateArr = date.split(" ");
  const timeArr = dateArr[4].split(":");

  const hour12 =
    parseInt(timeArr[0]) <= 12
      ? parseInt(timeArr[0])
      : parseInt(timeArr[0]) - 12;

  const amPm = parseInt(timeArr[0]) < 12 ? "am" : "pm";

  const dateObj = {
    month: dateArr[1],
    dayOfMonth: dateArr[2],
    year: dateArr[3],
    hour24: timeArr[0],
    minute: timeArr[1],
    second: timeArr[2],
    hour12,
    amPm,
  };

  //   "Aug 23, 11:30pm"
  return `${dateObj.month} ${dateObj.dayOfMonth}, ${dateObj.hour12}:${dateObj.minute} ${dateObj.amPm}`;
};

export default dateFormater;
