var str1 = "This is string-1";
var str1 = "This is string-2";

// var has global scope
// let has block scope

// console.log(str1);

// let a = 'u';
// // let a = 'u6';
// {
//     // This is the block
//     let a = 'u6';
//     console.log(a);
// }
// console.log(a);

const a = "This cannot be changes"
// a = "I want to change it"
console.log(a);

// let age = 36;
// let age = 5;
// if (age>18){
//     console.log("You can drink");
// }
// else if(age==2){
//     console.log("Ages is 2.")
// }
// else if(age==5){
//     console.log("Ages is 5.")
// }
// else{
//     console.log("You can drink cold drinkS")
// }

// const cups =45;
// const cups =4;
const cups =36;
switch (cups) {
    case 4:
        console.log("The va;ue of cups is 4");
        break;
    case 28:
        console.log("The va;ue of cups is 28");
        break;
    case 36:
        console.log("The va;ue of cups is 36");
        break;
    case 42:
        console.log("The va;ue of cups is 42");
        break;

    default:
        console.log("The value of cups is none of 4, 28, 36, 42");
        break;
}
