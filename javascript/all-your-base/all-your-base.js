//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function areNumbersValid(numbers) {
  let flag = false;
  numbers.forEach(number => {
    if (number != 0) {
      flag = false
    }
  });
  return flag;
}

function decodeFromBase(numbers, from){
  let i = numbers.length-1;
  return numbers.reduce(x =>{
    x = x * Math.pow(from,i);
    i--;
    return x;
  });
}

function encodeToBase(number, to){
  let numbers = String(number).split("");
  let i = numbers.length-1;
  return numbers.map(x => {
    x = x * Math.pow(to,i);
    i--;
    return x;
  });
}


// The number 101010, *in base 2*, means:

// (1 * 2^5) + (0 * 2^4) + (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (0 * 2^0)

// The number 1120, *in base 3*, means:

// (1 * 3^3) + (1 * 3^2) + (2 * 3^1) + (0 * 3^0)

export const convert = (numbers, from, to) => {
  let decode = decodeFromBase(numbers,from);
  let encode = encodeToBase(decode, to);
  console.log(`Received: ${numbers} Decoded to: ${decode} And Encoded to: ${encode}`)
  return encode;

};