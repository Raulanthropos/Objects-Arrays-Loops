//How to add a number to all array values?




// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let testArray = [1, 3, 5];
let reverseArray = testArray.reverse();
console.log("\n1. The reverted array is: ", reverseArray);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let max = 0;
for (let i = 0; i <testArray.length; i++) {
    max = testArray[i] > max ? testArray[i] : max;
}
console.log("\n2. The biggest number of the testArray is: ", max);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let min = 99;
for (let i = 0; i <testArray.length; i++) {
    min = testArray[i] < min ? testArray[i] : min;
}
console.log("\n3. The smallest number of the testArray is: ", min);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

const array1 = [2, 3, 4, 6, 8, 9, 10]
let array2 = [];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        array2.push(array1[i])
    }
}

console.log("\n4. Even values of array1 are displayed in the array2 that follows: ", array2);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        array1.splice(i, 1);
    }
}

console.log("\n5. The array1 now only has odd entries: ", array1);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let string1 = "bark";
const stringArray = string1.split("");
for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "a" || stringArray[i] === "e" || stringArray[i] === "i" || stringArray[i] === "o" || stringArray[i] === "u" || stringArray[i] === "w") {
        stringArray.splice(i, 1)
    }
}

console.log("\n6. The consonants of the word 'bark' are: ", stringArray);


/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

array7 = [1, 2, 3];
thisArrayPlusOne = [];

for (let i = 0; i < array7.length; i++) {
    thisArrayPlusOne.push(array7[i] + 1);
}

console.log("\n7. The new array shall be: ", thisArrayPlusOne)

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

const arr = ["strive", "is", "great"]
const arrNum = [];
for (let i = 0; i < arr.length; i++) {
    arrNum.push(arr[i].length);
}

   console.log("\n8. The length of the strings provided, is as follows: ", arrNum);