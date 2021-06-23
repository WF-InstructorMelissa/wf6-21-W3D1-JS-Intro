// This variable is being declaired and is a string

var declaring = "I am declaring a variable";
console.log(declaring);

// This var is an integer
var b = 100.99;
console.log(b);

var array01 = ["I am", "an", "array"];
console.log(array01); // This will print the whole array
console.log(array01[2]) // This will print the 3rd index of the array
console.log(array01.length) // This will print the # of indexes of the array
console.log(array01.length-1) // This will print the 2nd to last number of indexes of the array
// array[array01.length-1]
// console.log(array)

function stringAlert() {
    alert("I am a string printed to and alert box")
    console.log("I am a string printing to the console")
}

function numberAlert() {
    alert(100)
    console.log(200)
}
function numberAlertString() {
    alert(500)
    console.log("This is my numberAlertString message", 800)
}

var c = ["this is", "also", "an array"]
var d = [1,2,3]

function array01Alert() {
    alert(c)
    console.log(c)
}

var num1 = 2
var num2 = 4

function add(num1, num2) {
    alert(num1 + num2)
    console.log("The answer is: ", num1 + num2)
}

function add() {
    alert(num1 + num2)
    console.log("The answer is: ", num1 + num2)
}
// add(num1, num2)

console.log(declaring)

function ifLoop() {
    for(var i = 0; i < 5; i++) {
        if (i % 2 == 0) {
            alert("True")
            console.log("Even")
        } else {
            alert("False")
            console.log("Odd")
        }
        console.log("The current value of i is: ", i)
    }  
}
function ifLoop2() {
    for(var i = 0; i <= 5; i++) {
        if (i % 2 == 0) {
            alert("True")
            console.log("Even")
        } else {
            alert("False")
            console.log("Odd")
        }
        console.log("The current value of i is: ", i)
    }  
}
function ifLoop3() {
    for(var i = 0; i <= 15; i++) {
        if (i % 2 == 0) {
            alert("True")
            console.log("Even")
            i=i+2
        } else {
            alert("False")
            console.log("Odd")
        }
        console.log("The current value of i is: ", i)
    }  
}