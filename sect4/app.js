// =========================
// OBJECTS AND THE DOT
// =========================

// var person = new Object();

// person["firstname"] = "Patrick";

// person["lastname"] = "Porche";

// var firstNameProperty = "firstname";

// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "111 Main St.";
// person.address.city = "Oakland";
// person.address.state = "CA";

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]["state"]);

// ==============================
// OBJECTS AND OBEJECT LITERALS
// ==============================

// var Patrick = { 
//     firstname: "Patrick",
//     lastname: "Porche",
//     address: {
//         street: "111 Main St.",
//         city: "Oakland",
//         state: "CA"
//     }
// };
    
// function greet(person) {
//     console.log("Hi " + person.firstname);
// }

// greet(Patrick);

// greet({ 
//     firstname: "Mary",
//     lastname: "Doe"
// });

// Patrick.address2 = {
//     street: "333 Second St."
// };

// ===================================
// Framework Aside: Faking Namespaces
// ===================================

// var greet = "Hello!";
// var greet = "Hola!";

// console.log(greet);

// var english = { 
//     greetings: {
//         basic: "Hello!"
//     }
// };

// var spanish = {};


// spanish.greet = "Hola!";

// console.log(english);

// ==========================
// JSON and Object Literals 
// ==========================

// var objectLiteral = {
//     firstname: "Patrick",
//     employedAsProgrammer: true
// };

// console.log(JSON.stringify(objectLiteral));

// var jsonValue = JSON.parse('{ "firstname": "Patrick", "employedAsProgrammer": true }');

// console.log(jsonValue);

// ======================
// Functions are Objects 
// ======================

