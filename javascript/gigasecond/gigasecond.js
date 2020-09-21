import { Console } from "console";

export const gigasecond = (date) => {
  // const gs = gigasecond(new Date(Date.UTC(2011, 3, 25)));
  // const expectedDate = new Date(Date.parse('2043-01-01T01:46:40Z'));
  // console.log
  // 2011-04-25T00:00:00.000Z
  date.setUTCSeconds(date.getUTCSeconds() + 10e9)
  console.log(date)
  return 
};
