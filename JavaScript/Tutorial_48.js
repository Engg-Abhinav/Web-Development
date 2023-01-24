console.log("This is a JavaScript tutorial");

let i = 0;
for(i=0;i<5; i++){
    console.log(i);
}

let friends = ["Rahul", "Virat", "Rohit", "Surya", "Ishaan"];
// for (let index = 0; index < friends.length; index++) {
//     console.log("Hello friend, " + friends[index]);   
// }

// friends.forEach(function f(element){
//     console.log("Hello friends, " + element)
// });

for (element of friends){
    console.log("Hello friends, " + element);
};

let employee = {
    name: "Abhinav",
    salary: 1000000,
    channel:"CodingPunisher"
}
// Use this loop to iterate over objects in JavaScript
for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}.`);
}

// While loop in JavaScript
let j = 0;
while(j<5){
    console.log(`${j} is less than 5`);
    j++;
}


// Do-While loop in JavaScript - This run atleast for one time
let k = 0;
do{
    console.log(`${k} is less than 4 and we are inside do while loop`);
    k++;
}while(k<5);
