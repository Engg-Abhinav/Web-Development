// Alert in JavaScript - Does not return anything
// alert("This is a message");

// let name = prompt("What is your name?","Guest");
// console.log(name);

let deletPost = confirm("Do you really want to delete this post?");
// console.log(deletPost);
if(deletPost){
    // Code to delete the post
    console.log("Your post has been deleted successfully.")
}
else{
    // Code to cancel the deletion of post
    console.log("Your post has not been deleted.");
}
