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

// var replaced = str.replace('string', 'Abhinav');
// console.log(str);
// console.log(replaced);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// var newStr = str.concat(' New String')
// console.log(newStr);
// var strWithWhiteSpaces = "    This contains       whitespaces      ";
// console.log(strWithWhiteSpaces);
// console.log(strWithWhiteSpaces.trim());

// var char2 = str.charAt(2);
// var charCode2 = str.charCodeAt(2); // Not very important
// console.log(char2);
// console.log(charCode2);

// Slicing of string
console.log(str[3]);
