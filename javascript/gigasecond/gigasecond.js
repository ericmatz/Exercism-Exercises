
export const gigasecond = (date) => {
  var newDate = new Date(Date.parse(date.toUTCString()))
  newDate.setUTCSeconds(newDate.getUTCSeconds() + 1000000000)
  return newDate
};
