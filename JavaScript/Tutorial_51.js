console.log("This is date and time tutorial");

let now = new Date();
console.log(now);

let dt = new Date(0);
console.log(dt);

// let newDate = new Date("2024-08-15");
// console.log(newDate);

// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let newDate = new Date(2030, 4, 6, 9, 3, 2, 36);
console.log(newDate);

let yr = newDate.getFullYear();
console.log("The year is ", yr);

let month = newDate.getMonth();
console.log("The month is ", month);

let dat = newDate.getDate();
console.log("The date is ", dat);

let hours = newDate.getHours();
console.log("The hours are ", hours);

let minutes = newDate.getMinutes();
console.log("The minutes are ", minutes);

let seconds = newDate.getSeconds();
console.log("The seconds are ", seconds);

let milliseconds = newDate.getMilliseconds();
console.log("The milliseconds are ", milliseconds);

newDate.setDate(5);
newDate.setMinutes(36);
console.log(newDate);
setInterval(updateTime, 1000);

function updateTime(){
    time.innerHTML = new Date();
}
