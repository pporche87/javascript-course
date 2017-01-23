// =========================
// OBJECTS AND THE DOT
// =========================

var person = new Object();

person["firstname"] = "Patrick";

person["lastname"] = "Porche";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "Oakland";
person.address.state = "CA";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);

// ==============================
// OBJECTS AND OBEJECT LITERALS
// ==============================

var Patrick = { 
    firstname: "Patrick",
    lastname: "Porche",
    address: {
        street: "111 Main St.",
        city: "Oakland",
        state: "CA"
    }
};
    
function greet(person) {
    console.log("Hi " + person.firstname);
}

greet(Patrick);

greet({ 
    firstname: "Mary",
    lastname: "Doe"
});

Patrick.address2 = {
    street: "333 Second St."
};

// ===================================
// Framework Aside: Faking Namespaces
// ===================================

var greet = "Hello!";
var greet = "Hola!";

console.log(greet);

var english = { 
    greetings: {
        basic: "Hello!"
    }
};

var spanish = {};


spanish.greet = "Hola!";

console.log(english);

// ==========================
// JSON and Object Literals 
// ==========================

var objectLiteral = {
    firstname: "Patrick",
    employedAsProgrammer: true
};

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Patrick", "employedAsProgrammer": true }');

console.log(jsonValue);

// ======================
// Functions are Objects 
// ======================

function greet() {
    console.log("hi");
}

greet.language = "english";
console.log(greet.language);

// =============================================
// Function Statements and Function Expressions
// =============================================

greet();

function greet() {
    console.log("hi");
}

var anonymousGreet = function() {
    console.log("hi");
};

anonymousGreet();

function log(a) {
    a();
}

log(function() {
  console.log("hi"); 
});

// =========================
// By Value vs By Reference
// =========================

// by value (primitives)

var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))

var c = { greeting: "hi" };
var d;

d = c;
c.greeting = "hello"; // mutate 

console.log(c);
console.log(d);

// by reference (even as parameters)

function changeGreeting(obj) {
    obj.greeting = "Hola"; // mutate
}

changeGreeting(d);

console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)

c = { greeting: "howdy" };

console.log(c);
console.log(d);

// ===============================
// Objects, Functions, AND "this"
// ===============================

function a() {
    console.log(this);
    this.newvariable = "hello";
}

var b = function() {
    console.log(this);
};

a();
console.log(newvariable);
b();

var c = {
    name: "The c object",
    log: function() {
        var self = this; 
        
        self.name = "Updated c object";
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;
        };
        setname("Updated again! The c object");
        console.log(self);
    }
};

c.log();

// =========================
// Conceptual Aside: Arrays 
// =========================

var arr = [1,
    2,
    false,
    {
        name: "Patrick",
        address: "111 Employed St."
    },
    function(name) {
        var greeting = "Hello ";
        console.log(greeting + name);
    },
    "hello"
];

console.log(arr);
arr[4](arr[3].name);

// =========================
// 'arguments' AND SPREAD 
// =========================

function greet(firstname, lastname, language = "en", ...other) {
    
    // language = language || "en";
    
    if (arguments.length === 0) {
        console.log("Missing prameters!");
        console.log("==============");
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log("arg 0: " + arguments[0]);
    console.log("==============");
}

greet();
greet("John");
greet("John", "Doe");
greet("John", "Doe", "es", "111 Employed St.", "San Fracisco", "CA");

// =======================================
// Framework Aside - Function Overloading 
// =======================================

function greet(firstname, lastname, language) {
    
    language = language || "en";
    
    if (language === "en") {
        console.log("Hello " + firstname + " " + lastname);
    }
    
    if (language === "es") {
        console.log("Hola " + firstname + " " + lastname);
    }
    
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, "en");
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, "es");
}

greetEnglish("John", "Doe");
greetSpanish("John", "Doe");

// ================================================
// Dangerous Aside - Automatic Semicolon Insertion  
// ================================================

function getPerson() {
    return {
        firstname: "Patrick"
    };
}

console.log(getPerson());

// =============================
// Framework Aside - Whitespace  
// =============================

var 
    // first name of the person
    firstname,
    
    // last name of the person 
    lastname,
    
    // the language 
    // can be "en" or "es"
    language;

var person = {
    // the first name
    firstname: "John",
    
    // the last name
    // (always required)
    lastname: "Doe"
};

console.log(person);

// ==================================================
// Immediately Invoked Function Expressions (IIFE's)  
// ==================================================

// function statement
function greet(name) {
    console.log("Hello " + name);
}
greet("John");

// using a function expression 
var greetFunc = function(name) {
    console.log("Hello " + name);
};
greetFunc("John");

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    return "Hello " + name;
}("John");
console.log(greeting);

var firstname = "Patrick";

(function(name) {
    var greeting = "Hello";
    console.log(greeting + " " + name);
}(firstname)); // IIFE 

// =====================================
// Framework Aside: IIFEs and Safe Code  
// =====================================

(function(global, name) {
    var greeting = "Hello";
    global.greeting = "Hello";
    console.log(greeting + " " + name);
}(window, "John")); // IIFE 

console.log(greeting);

// =======================
// Understanding Closures   
// =======================

function greet(whattosay) {
    return function(name) {
        console.log(whattosay + " " + name);
    };
}

var sayHi = greet("Hi");
sayHi("Patrick")

function buildFunctions() {
    var arr = []
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        );
    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
    var arr = []
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
              return function(){
                  console.log(j);
              };
            }(i))
        );
    }
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

// =====================================
// Framework Aside - Function Factories    
// =====================================

function makeGreeting(language) {
    return function(firstname, lastname) {
        if (language === "en") {
            console.log("Hello " + firstname + " " + lastname);
        }
    
        if (language === "es") {
            console.log("Hola " + firstname + " " + lastname);
        }
    };
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("Patrick", "Porche");
greetSpanish("Patrick", "Porche");

// =======================
// Closures and Callbacks    
// =======================

function sayHiLater() {
    var greeting = "Hi";
    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
// $("button").click(function(){

// });

function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;
    
    callback();
}

tellMeWhenDone(function(){
    console.log("I am done!");
});

tellMeWhenDone(function(){
    alert("I am done!");
});

// ========================
// call(), apply(), bind()    
// ========================

var person = {
    firstname: "John",
    lastname: "Doe",
    getFullName: function() {
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2) {
    console.log("Logged: " + this.getFullName());
    console.log("Argument: " + lang1 + " " + lang2);
    console.log("============================");
};

var logPersonName = logName.bind(person);

logPersonName("en");

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);

(function(lang1, lang2) {
    console.log("Logged: " + this.getFullName());
    console.log("Argument: " + lang1 + " " + lang2);
    console.log("============================");
}).apply(person, ["es", "en"]);

// function borrowing 
var person2 = {
    firstname: "Jane",
    lastname: "Doe"
};

console.log(person.getFullName.apply(person2));

// function currying 
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

// =======================
// Functional Programming     
// =======================

function mapForEach(arr, fn) {
    var newArr = [];
    for (var i=0; i < arr1.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr; 
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    return item > 2;
});

console.log(arr3);

var checkPastLimit = function(limiter, item) {
    return item > limiter; 
};
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log(arr4);

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);   
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);

// underscore 
var arr6 = _.map(arr1, function(item){
    return item * 3;
});
console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item){
    return item %2 === 0;
});
console.log(arr7);