// CallBack = a function that is passed as 
// an argument to another function

// used to handle asynchronous operations

// bro when you are done, call mine

hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}
