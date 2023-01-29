console.log("This is a JavaScript Tutorial.")

// setTimeout - Allows us to run the dunction once after the interval of time
// clearTimeout - Allows us to run the function repeatedly after the interval of time

function greet(name, byeText){
    console.log("Hello, Good Morning "+name+" "+byeText);
}

// setTimeout(greet,5000, "Abhinav", "Take Care.");

// timeOut = setTimeout(greet,5000, "Abhinav", "Take Care.");

// console.log(timeOut); // This will give some ID

// clearTimeout(timeOut); // Passing that ID into clearTimeout function and this will cancel the schedule

// setInterval(greet, 1000, "Abhinav", "Take care");

// intervalId=setInterval(greet, 1000, "Abhinav", "Take care");
// clearInterval(intervalId);

function displayTime(){
    time=new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
]
