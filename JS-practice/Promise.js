// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// WalkDog(()=>{CleanTheKitchen( 
//     ()=>TakeOutTheTrash(
//         ()=>console.log("You finished all your chores!")
//     )
// )});

// function WalkDog(callback){
//     console.log("You Walk the Dog!");
//     callback();
// }

// function CleanTheKitchen(callback){
//     console.log("You Clean the Kitchen!");
//     callback()
// }

// function TakeOutTheTrash(callback){
//     console.log("You Take Out The Trash!");
//     callback()
// }


function WalkDog() {
    return new Promise((resolve, reject) => {
        resolve("You Walk the Dog!");
        
    })
}

function CleanTheKitchen() {
    return new Promise((resolve, reject) => {
        resolve("You Clean the Kitchen!");
       
    })

}

function TakeOutTheTrash() {

    return new Promise((resolve, reject) => {
        resolve("You Take Out The Trash!");
       
    })
}

WalkDog().then(value=> {console.log(value); return CleanTheKitchen()})
.then(value => {console.log(value);return TakeOutTheTrash})
.then(value => {console.log(value); console.log("You finished all your chores!")})
