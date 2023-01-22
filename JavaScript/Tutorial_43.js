var str = "This is a string";
console.log(str);
// indexOf will give us position of first occurance of a substring
var position = str.indexOf('is');
console.log(position);

position = str.lastIndexOf('is');
console.log(position);

// Substring from a string
// Slice can take negative value but substring cannot take negative value

// var substg = str.slice(1,11);
// var substrg = str.substring(1,11);
var substrg = str.substr(1,11);
console.log(substrg);

