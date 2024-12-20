

// methods that modify the original array
// push() - pop() - shift() - unshift() - splice() - reverse() - sort() -



const cars = ["Saab", "Volvo", "BMW"];

// create a array using new keyword
const carsAssign = new Array("Saab", "Volvo", "BMW");

//accessing the array elements with index
console.log(cars[0]);

//arrayname.length
console.log("length of cars array:", cars.length)

// array sort
const numbers=[8,7,10,4,0];
numbers.sort((a, b) =>  b-a ) 
console.log("sorted numbers array:",numbers)

// Adds one or more elements to the end of an array.

let sujith = {
    firstname:"Sujith",
    lastname:"Anto",
    age:"21"
}
numbers.push(sujith)
numbers.push(11)
console.log("after inserting 11 and obj from array:",numbers)

// pop(): Removes the last element from an array.

numbers.pop()
console.log("after last element from array:",numbers)

//shift(): Removes the first element from an array.
numbers.shift(10,8)
console.log("Removes the first element from an array:",numbers)

//unshift(): Adds one or more elements to the beginning of an array.

numbers.unshift(10,8)
console.log("Adds one or more elements to the beginning of an array:",numbers)

console.log(numbers[6].firstname)


//splice(): Adds/removes elements from any position in the array.
//splice(index, count, item1, ....., itemX)
// console.log(numbers.pop())
console.log(numbers.splice(1,1,9,))
console.log("after adding 9 through splice",numbers)
console.log(numbers.splice(1,1))
console.log("after removing 9 through splice",numbers)

console.log(numbers.reverse())

//copyWithin(target, start, end)

console.log(numbers.copyWithin(1,2,4))