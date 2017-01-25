// ===============
// Initialization 
// ===============

var people = [
    {
        // this "john" object
        firstname: "John",
        lastname: "Doe",
        addresses: [
            "111 Employed St.",
            "222 HasJob St."
        ]
    },
    {
        // the "jane" object 
        firstname: "Jane",
        lastname: "Doe",
        addresses: [
            "333 Employed St.",
            "444 HasJob St."
        ],
        greet: function() {
            return "Hello!";
        }
    }
];

console.log(people);

// ===================
// typeof, instanceof 
// ===================

var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person("Jane");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense 
console.log(typeof null); // a bug since, like, forever...

var z = function() {};
console.log(typeof z);

// ============
// Strict Mode 
// ============

function logNewPerson() {
    "use strict";
    
    var person2;
    persom2 = {};
    console.log(persom2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();
