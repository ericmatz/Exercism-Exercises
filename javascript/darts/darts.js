//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const max_radius = {
  outer_circle: 10,
  middle_circle: 5,
  inner_circle: 1
}

export const score = (x, y) => {

  var radius = Math.sqrt(Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2))

  if (radius > max_radius.outer_circle) {
    return (0);
  } else if (max_radius.outer_circle >= radius && radius > max_radius.middle_circle) {
    return (1);
  } else if (max_radius.middle_circle >= radius && radius > max_radius.inner_circle) {
    return (5);
  } else {
    return (10);
  }
  
};