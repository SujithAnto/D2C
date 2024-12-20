

//concat(): Combines two or more arrays and returns a new array.
const num1 = [1,2,3,4,5]
const num2 = [6,7,8]
const num3 = num1.concat(num2)
console.log(num3)

//join(): Joins all the elements of an array into a single string.

const num4 = num3.join('')
console.log(num4)

//slice(): Returns a shallow copy of a portion of an array.

const num5 = num3.slice(0,8)
// num3.push(10)
console.log(num5)

//indexOf(): Returns the first index of a given element, or -1 if not found.
//lastIndexOf(): Returns the last index of a given element, or -1 if not found.
console.log(num5.indexOf(8))

//includes(): Checks if an array contains a specific element, returns true or false.
console.log(num5.includes(8))

//find(): Returns the first element in the array that satisfies the provided testing function.
console.log(num5.find(x => x > 6));

//findIndex(): Returns the index of the first element that satisfies the provided testing function.
console.log(num5,num5.findIndex(x=>x>2))

//filter(): Creates a new array with all elements that pass the test implemented by the provided function.
console.log(num5.filter(x=> x%2==0))

//reduce(): Executes a reducer function (that you provide) on each element of the array (from left to right) to reduce it to a single value.
console.log(num5,num5.reduce((x,curr)=> curr+x))

//reduceRight(): Works like reduce(), but processes the array from right to left.
const num=[2,-1,-1]
console.log(num.reduceRight((x,curr)=>x+curr))

//every(): Tests whether all elements in the array pass the test implemented by the provided function.
console.log(num.every(x=>x<=2))

//some(): Tests whether at least one element in the array passes the test implemented by the provided function.
console.log(num.some(x=>x<2))

//flat(): Flattens an array to a specified depth.
const arr = [1, [2, 3], [4, 5]];
const flatArr = arr.flat();  
console.log(flatArr)

//flatMap(): First maps each element using a mapping function, then flattens the result into a new array.
const arr1 = [1, 2, 3];
const result = arr1.flatMap(x => [x, x * 2]);  // result becomes [1, 2, 2, 4, 3, 6]


//at(): Returns the element at the given index, allowing negative indices to count from the end of the array.
console.log(arr1.at(-1))

//forEach(): Executes a provided function once for each element in the array.
// console.log("hi")
arr1.forEach(x => console.log(x));

//map(): Creates a new array by applying a function to each element.

const newArr = arr1.map(x => x * 2);

console.log(newArr)