
// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol 
// Object



// numbers
let value1 = 1
console.log(typeof(value1))

// bigint
const bigInt1 = 1234567890123456789012345678901234567890n;
console.log(typeof(bigInt1)); // Works with arbitrary large integers without losing precision

//string
var value2 = "sujith"
console.log(typeof(value2))



//boolean
let value3 = true
console.log(typeof(value3))

//string
let value4 = "sujith"
console.log(typeof(value4))

//object

let sujith = {
    firstname:"Sujith",
    lastname:"Anto",
    age:"21"
}
console.log(typeof(sujith))

let value5 = null
console.log(typeof(value5))


// symbol

const id = Symbol('id')

const obj = {
    [id]:123,
    name:'sujith'
}
console.log(obj)