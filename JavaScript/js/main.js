/*
var name = "Antonio Ribeiro";
var phrase = "Japan is the best football team of the world!";
var n1 = 5;
var n2 = 3;
//alert("My first js");
alert("Welcome, " + name);
console.log(name);
console.log(phrase.replace("Japan","Brazil"));
//alert(phrase.replace("Japan","Brazil"));
//console.log(phrase.toUpperCase());
//console.log(phrase.toLowerCase());
console.log(n1 * n2);
*/

/*
var fruitList = ["Apple", "Pear", "Orange"];
var fruits = [{fruitName: "Tangerine", color:"Orange"}, {fruitName: "Grape", color:"Purple"}];
console.log(fruitList);
console.log(fruitList.length);
fruitList.push("Grape");
console.log(fruitList);
console.log(fruitList.length);
console.log(fruitList.reverse());
console.log(fruitList.length);
console.log(fruitList.reverse());
console.log(fruitList.length);
fruitList.pop();
console.log(fruitList);
console.log(fruitList.length);
console.log(fruitList);
console.log(fruitList.length);
console.log(fruitList[1]);
alert(fruitList[1]);
console.log(fruitList.toString());
console.log(fruitList.toString()[0]);
console.log(fruitList.join(" - "));
console.log(fruitList.join(" | "));
console.log(fruitList.join(" "));
console.log(fruitList.join(""));
console.log(fruits);
console.log(fruits[1].fruitName);
console.log(fruits[1].color);
*/

/*
var age = prompt("How old are you?");
if (age >= 18) {
    alert("You are an adult!");
} else {
    alert("You are a minor!");
};
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    //alert(count);
    count = count + 1;
};
*/

//console.log("");

/*
var count = 0;
while (count <= 3) {
    console.log(count);
    //alert(count);
    count++;
};
*/

/*
var count;
for (count=1; count <= 5; count++) {
    alert(count);
};
*/

/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
*/

/*
function sum(n1, n2) {
    return n1 + n2;
};
*/
/*
function setReplace(phrase, name, newName) {
    return phrase.replace(name, newName);
};

alert(sum(5, 10));
alert(setReplace("Vai Joao!", "Joao", "Antonio"));
*/

/*
//Function using LOCAL variable...
function validateAge(age) {
    var valid;
    if (age >= 18) {
        valid = true;
        //return true;
    } else {
        valid = false;
        //return false;
    }
    return valid;
}

var age = prompt("How old are you?");
console.log(validateAge(age));
*/

/*
//Another variation using GLOBAL variable...
var valid = 0; // even if I use var valid = 0 here, if I don't declare another var valid inside the function (locally),
// or even if I completely omit the valid declaration inside the function, the program will utilise the GLOBAL variable and will work properly.
// However, if I declare var valid inside the function, the program will respond "0" since it will still be using the GLOBAL variable.
function validateAge(age) {
    //var valid;
    //valid;
    if (age >= 18) {
        valid = true;
        //return true;
    } else {
        valid = false;
        //return false;
    }
    return valid;
} // using local variable

var age = prompt("How old are you?");
validateAge(age);
console.log(valid);
*/

function clickHere() {
    document.getElementById("thanksMsg").innerHTML = "<b>Thank you for clicking!</b>";
    //console.log(document.getElementById("thanksMsg"));
    //alert("Thank you for clicking!");
};

function redirect() {
    window.open("http://g1.com.br/"); // open at another tab
    //window.location.href = "http://g1.com.br/"; // open at the same tab
};

function replaceText(element) {
    //document.getElementById("mouseHover").innerHTML = "<b>Thank you for hovering the mouse!</b>";
    element.innerHTML = "<b>Thank you for hovering the mouse!</b>";
    //alert("Replacing the text...");
};

function undo(element) {
    //document.getElementById("mouseHover").innerHTML = "Hover the mouse here!";
    element.innerHTML = "Hover the mouse here!";
};

function load() {
    alert("The webpage has loaded!");
};

function functionChange(element) {
    console.log(element.value);
};
