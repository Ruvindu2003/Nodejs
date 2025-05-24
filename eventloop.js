console.log("a");
console.log("b");
setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log("d");
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
    
}, 3000);


    console.log("e");
console.log("f");


let calculate=new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve("Hello");
   }, 2000);
});
calculate.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error('Error:', error);
});
console.log("g");
console.log("h");


let rootFunction = function(callback) {
   return callback();
};


let callApi=new Promise((resolve, reject) => {

    let i=2;
    let j=3;
    let sum=i+j;

    console.log("sum", sum);
    console.log("sum", sum);
    
    if(sum==5){

        resolve("Hello");
   } else {
       reject("Error");


   }
});