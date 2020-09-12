//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (number) => {
  let word = ""
  while (number / 1000 >= 1) {
    word += "M";
    number -= 1000;
  }
  while (number / 500 >= 1) {
    number % 900 < 100 ? (word += "CM", number -= 900) : (word += "D", number -= 500)
  }
  while (number / 100 >= 1) {
    number % 400 < 100 ? (word += "CD", number -= 400) : (word += "C", number -= 100)
  }
  while (number / 50 >= 1) {
    number % 90 < 10 ? (word += "XC", number -= 90) : (word += "L", number -= 50)
  }
  while (number / 10 >= 1) {
    number % 40 < 10 ? (word += "XL", number -= 40) : (word += "X", number -= 10)
  }
  while (number / 5 >= 1) {
    number % 9 == 0 ? (word += "IX", number -= 9) : (word += "V", number -= 5)
  }
  while (number / 1 >= 1) {
    number % 4 == 0 ? (word += "IV", number -= 4) : (word += "I", number -= 1)
  }
  return word;
};