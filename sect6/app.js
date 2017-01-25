// ============================
// Function Constructors "new"
// ============================

// function Person(firstname, lastname) {
//     console.log(this),
//     this.firstname  = firstname,
//     this.lastname   = lastname,
//     console.log("Invoked");
// }

// var john = new Person("John", "Doe");
// console.log(john);

// var jane = new Person("Jane", "Doe");
// console.log(jane);

// =======================================
// Function Constructors and ".prototype"
// =======================================


// function Person(firstname, lastname) {
//     console.log(this),
//     this.firstname  = firstname,
//     this.lastname   = lastname,
//     console.log("Invoked");
// }

// Person.prototype.getFullName = function() {
//     return this.firstname + " " + this.lastname;
// };

// var john = new Person("John", "Doe");
// console.log(john);

// var jane = new Person("Jane", "Doe");
// console.log(jane);

// Person.prototype.getFormalFullName = function() {
//     return this.lastname + ", " + this.firstname;
// };

// console.log(john.getFormalFullName());

// ==================================================
// Conceptual Aside - Built-in Function Constructors 
// ==================================================

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
};

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
};

// =================================================
// Dangerous Aside - Built-in Function Constructors 
// =================================================

// ======================================
// Dangerous Aside - Arrays and for...in 
// ======================================

// Array.prototype.myCustomFeature = "cool";

// var arr = ["John", "Jane", "Jim"];

// for (var prop in arr) {
//     console.log(prop + " " + arr[prop]);
//     // arrays are objects and items are added properties 
// }

// for (var i = 0; i < arr.length; i++){
//     // safe 
// }

// ==============================================
// Object.create and Pure Prototypal Inheritance
// ==============================================

// polyfill 
// if (!Object.create) {
//     Object.create = function (o) {
//         if (arguments.length > 1) {
//             throw new Error("Object.create implementation" + "only accepts first parameter.");
//         }
//         function F() {}
//         F.prototype = o;
//         return new F();
//     };
// }

// var person = {
//     firstname: "Default",
//     lastname: "Default",
//     greet: function() {
//         return "Hi " + this.firstname;
//     }
// };

// var john = Object.create(person);
// john.firstname = "John";
// john.lastname = "Doe";
// console.log(john);

// ================
// ES6 and Classes
// ================

