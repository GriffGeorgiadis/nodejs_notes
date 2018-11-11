//arrow fucntion do not bind to 'this' keyword

var square = x =>  x * x;
console.log(square(9));

//use this syntax when defining object literals
var user = {
    name: 'Griffin', //object literal
    //not going to get arguments key word or this binding
    //problem arise when trying to creat mehtods on an object and use arrow functions
    //use this when not using this keywork or calling arguments
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. Im ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. Im ${this.name}`);
    }
};

user.sayHi(1, 2, 3);
