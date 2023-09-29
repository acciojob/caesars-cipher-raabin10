// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
 for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];

    // Check if the character is in the lookup object, and if so, get the decoded character
    if (lookup[char] !== undefined) {
      decodedArr.push(lookup[char]);
    } else {
      // If the character is not in the lookup object, leave it unchanged
      decodedArr.push(char);
    }
  }

  // Join the decoded characters into a string
  const decodedStr = decodedArr.join(" ");
  
  return decodedStr; 
}

window.rot13 = rot13;
