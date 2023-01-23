console.log("This is JS File.");

function greet(name, greetText="Greetings from JavaScripts"){
    // "Greetings from JavaScripts" is default value
    let name1 = "Name1"; // Local Scope
    console.log(greetText + " " + name + "!");
    console.log(name+" is a smart boy.");
}

function sum(a, b, c){
    let d = a+b+c;
    return d;
    console.log("Function is returned"); // This won't be executed (Unreachable code)
}

let name1="Abhinav"; // Global Scope
let name2="Aryan";
let name3="Ajay";
let name4="Akash";
greetText1="Good morning";
greet(name1, greetText1);
greet(name2, greetText1);
greet(name3, greetText1);
greet(name4);

// let returnVal = greet(name4);
// console.log(returnVal);

let returnVal = sum(1, 2, 3);
console.log(returnVal);

// console.log(name1+" is a smart boy.");
// console.log(name2+" is a smart boy.");
// console.log(name3+" is a smart boy.");
// console.log(name4+" is a smart boy.");
