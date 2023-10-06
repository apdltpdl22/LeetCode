// var lengthOfLongestSubstring = function (s) {
//   let numsObj = {};
//   let newStr = '';
//   let maxLenString = '';

//   for (let i = 0; i < s.length; i++) {
//     if (!Object.keys(numsObj).includes(s[i])) {
//       let newObj = {
//         [s[i]]: 0
//       };
//       numsObj = { ...numsObj, ...newObj };
//     };
//   }

//   for (let i = 0; i < s.length; i++) {
//     for (key in numsObj) {
//       numsObj[key] = 0;
//     }
//     numsObj[s[i]] += 1
//     for (let n = i; n < s.length; n++) {
//       if (i !== n) {
//         numsObj[s[n]] += 1
//       }

//       if (numsObj[s[i]] > 1) {
//         break;
//       }

//       if (numsObj[[s[n]]] > 1) {
//         break;
//       }

//       newStr = s.slice(i, n + 1);
//       if (maxLenString.length < newStr.length) {
//         maxLenString = newStr;
//       }
//     }
//   }
//   return maxLenString.length;
// };

function lengthOfLongestSubstring(inputString) {
  if (inputString.length == 0) return 0;

  let n = inputString.length;

  // starting index of current window substring
  let stCurr = 0,
    // length of the longest substring
    longest = 0,
    // length of the current substring (size of window)
    currLen = 0,
    // starting index of longest substring
    start = 0;

  // hashmap to store the element as key and index last seen as value
  let lastSeenAt = {};

  // Traverse inputString to find the longest substring
  // without repeating characters.
  for (index = 0; index < n; index++) {
    let val = inputString[index];

    // If the current element is not present in the hash map,
    // then store it in the hash map with the value as the current index.
    if (!(val in lastSeenAt)) lastSeenAt[val] = index;
    else {
      // If the current element is present in the hash map,
      // it means that this element may have appeared before.
      // Check if the current element occurs before or after `stCurr`.
      if (lastSeenAt[val] >= stCurr) {
        currLen = index - stCurr;
        if (longest < currLen) {
          longest = currLen;
          start = stCurr;
        }
        // The next substring will start after the last
        // occurence of the current element.
        stCurr = lastSeenAt[val] + 1;
      }

      // Update the last occurence of
      // the element in the hash map
      lastSeenAt[val] = index;
    }
  }

  // Update the longest substring's
  // length and starting index.
  if (longest < index - stCurr) {
    start = stCurr;
    longest = index - stCurr;
  }

  return longest;
};


console.log(lengthOfLongestSubstring('pwwkew'));