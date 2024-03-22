// var a = 2;
// var b = 2;
// var v = 2;

// if (a === v & b === v) {
//   console.log('a & b === v');
// } else {
//     console.log('a & b !== v');
// }


// console.log("\n\n####################\n\n");

// var l = [];
// l.push([1, 2]);
// l.push([3, 4]);
// l.push([5, 6]);
// console.log(l);

// let a = ["A","B","C"]

// for (let i = 0; i < a.length; i++) {

//   console.log(a[i], a[j]);
// }

// let x = [1,2];
// let y = [2,1];
// console.log(x === y.sort());
// console.log(x.sort());
// console.log(y.sort());

// function permuteUnique(nums) {
//   const result = [];
//   nums.sort((a, b) => a - b); // Sort the input to handle duplicates

//   function backtrack(currentPerm, remainingNums) {
//       if (remainingNums.length === 0) {
//           result.push([...currentPerm]);
//           return;
//       }

//       for (let i = 0; i < remainingNums.length; i++) {
//           // Avoid duplicates
//           if (i > 0 && remainingNums[i] === remainingNums[i - 1]) continue;

//           const nextPerm = currentPerm.concat(remainingNums[i]);
//           const nextRemaining = [...remainingNums.slice(0, i), ...remainingNums.slice(i + 1)];
//           backtrack(nextPerm, nextRemaining);
//       }
//   }

//   backtrack([], nums);
//   return result;
// }

// // Example usage:
// const input = ['a', 'b', 'c'];
// const permutations = permuteUnique(input);
// console.log(permutations);

// function findTwinPossibilities(list) {
//   const twinPossibilities = [];

//   for (let i = 0; i < list.length; i++) {
//       for (let j = i; j < list.length; j++) {
//           const twin = [list[i], list[j]].sort().join(''); // Sort elements to handle duplicates
//           if (!twinPossibilities.includes(twin)) {
//               twinPossibilities.push(twin);
//               console.log(list[i], list[j]);
//           }
//       }
//   }

//   return twinPossibilities;
// }

// // Example usage:
// const input = ['a', 'b', 'c'];
// const twinPossibilities = findTwinPossibilities(input);
// console.log(twinPossibilities); // Output: ['ab', 'ac', 'bc']

let a = [
    [1, 2],
    [3, 4],
    [5, 6]
    ];

console.log(a[a.length -1][1]);