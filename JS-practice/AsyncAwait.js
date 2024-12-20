// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

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
async function doChores(){

    try{
        const walkDogResult = await WalkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await CleanTheKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await TakeOutTheTrash();
        console.log(takeOutTrashResult);
        
        console.log("You finsihed all the chores!");
    }
    catch(error){
        console.error(error);
    }
}

doChores();