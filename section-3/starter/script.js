///////////////////////////////////////
// Lecture: Hoisting

function calculateAge(year){
    console.log(2016 - year);
}
calculateAge(1994);

let retirement = function(year){
    console.log(65 - (2016 - year));
}

// variables
console.log(age);
var age = 23;

function foo(){
var age = 65;
console.log(age);
}
foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

 

///////////////////////////////////////
// Lecture: The this keyword

let john = {
    name: 'john',
    yearofBirth:1990,
    calculateAge: function () {
        console.log(this);
        console.log(2016- this.yearofBirth);

        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }
}

let name = john.calculateAge();

let mike = {
    name: 'mike',
    yearofBirth: 1984
};

//borrow

mike.calculateAge = john.calculateAge();
mike.calculateAge();





