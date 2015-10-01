/* Step 1:  Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.*/

//var movies = ["Ghostbusters", "Serendipity", "Ghostbusters 2", "Star Trek", "Star Wars"];
//window.console.log(movies[1]);


/*  Step 2:	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.*/

/*var movies = [];
movies[0] = "Ghostbusters";
movies[1] = "Serendipity";
movies[2] = "Ghostbusters 2";
movies[3] = "Star Trek";
movies[4] = "Star Wars";
window.console.log(movies[0]);
*/

/* Step 3: Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array. */

//var movies = ["Ghostbusters", "Serendipity", "Ghostbusters 2", "Star Trek", "Star Wars"];

//movies[2] = "Dances With Wolves";
//movies[5] = "Ghostbusters 2";
//window.console.log(movies.length);


/* Step 4:  Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array. */
/*
var movies = [];
movies[0] = "Ghostbusters";
movies[1] = "Serendipity";
movies[2] = "Ghostbusters 2";
movies[3] = "Star Trek";
movies[4] = "Star Wars";
delete movies[0];
window.console.log(movies);
*/


// Step 5:  Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
/*
var movies = [];
movies = ["Ghostbusters", "Serendipity", "Ghostbusters 2", "Star Trek", "Star Wars", "Beauty and the Beast", "Cinderella"];
var i;
for (i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
*/


// Step 6: Now, use a for-in loop to iterate through the array and display each movie within the console window.
/*
var movies = ["Ghostbusters", "Serendipity", "Ghostbusters 2", "Star Trek", "Star Wars", "Beauty and the Beast", "Cinderella"];
for (var index in movies) {
    window.console.log(movies[index]);
}
*/


// Step 7:  Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
/*
var movies = new Array("Ghostbusters", "Serendipity", "Ghostbusters 2", "Star Trek", "Star Wars", "Beauty and the Beast", "Cinderella");
movies.sort();
window.console.log(movies);
*/

/* Step 8: 8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3  */
/*
var leastFavMovies = new Array("Fight Club", "Closer to God", "Let Us Pray");
var movies = new Array("Ghostbusters", "Serendipity", "Cindrella");
window.console.log("Movies I like:");
window.console.log(" ");
for (var index in movies) {
    window.console.log(movies[index]);
}
    window.console.log("...");
    window.console.log(" ");
    window.console.log("Movies I regret watching:");
    window.console.log(" ");
for (var index in leastFavMovies) {
    window.console.log(leastFavMovies[index]);
}
*/


// Step 9:  Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
/*
var movies = new Array("Ghostbusters", "Serendipity", "Cindrella");
movies = movies.concat("Fight Club", "Closer to God", "Let Us Pray");
movies.sort();
movies.reverse();
window.console.log(movies);
*/


// Step 10:	Return just the last item in the array and display it within the console window.
/*
var movies = new Array("Serendipity", "Let Us Pray", "Ghostbusters", "Fight Club", "Closer to God", "Cinderella");
var lastMovie = movies.pop();
window.console.log(lastMovie);
*/

// Step 11:  Remove the previous method and this time return just the first item in the array and display it within the console window.
/*
var movies = new Array("Serendipity", "Let Us Pray", "Ghostbusters", "Fight Club", "Closer to God", "Cinderella");
var firstMovie = movies.shift();
window.console.log(firstMovie);
*/


// Step 12:  Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
/*
var movies = new Array("Serendipity", "Let Us Pray", "Fight Club", "Closer to God", "Ghostbusters","Cinderella");
movies.splice(1, 3, "Beauty and the Beast", "Star Trek", "Star Wars");
window.console.log(movies);
*/


// Step 13:	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
/*
var employee1 = [];
employee1["id"] = 1234;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 5678;
employee2["name"] = "Sandy Baldini";
employee2["title"] = "Designer";
employee2["department"] = "Entertainment";
employee2["isCurrent"] = true;

var emps = [employee1, employee2];
window.console.log(emps[1]["name"]);
*/


// Step 14: Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
/*
var employee1 = [];
employee1["id"] = 1234;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 5678;
employee2["name"] = "Sandy Baldini";
employee2["title"] = "Designer";
employee2["department"] = "Entertainment";
employee2["isCurrent"] = true;

var emps = [employee1, employee2];
for (var x in emps) {
    window.console.log(emps[x]["name"]);
}
*/


// Step 15:	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
/*
var employee1 = [];
employee1["id"] = 1234;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 5678;
employee2["name"] = "Sandy Baldini";
employee2["title"] = "Designer";
employee2["department"] = "Entertainment";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 9012;
employee3["name"] = "Joe Slacker";
employee3["title"] = "Assistant";
employee3["department"] = "Legal";
employee3["isCurrent"] = false;

var emps = [employee1, employee2, employee3];
for (var x in emps) {    
    if (emps[x]["isCurrent"]==true) {
        window.console.log(emps[x]["name"]);
    }
}
*/


/* Step 16:Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.  */

/*
var movies = ["Serendipity", 1, "Ghostbusters", 2, "Beauty and the Beast", 3, "On Golden Pond", 4, "The Blues Brothers", 5];
var movieNames = movies.filter(function (item) {
    return typeof item == "string";
});
window.console.log(movieNames);
*/


// Practice with Functions 


// Step 1: Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.

/*
function displayMessage(words) {
    window.console.log(words);
}
displayMessage("Here is the sentence.");
*/

// Step 2: Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.

/*
function calculate(x, y) {
    var mod;
    mod = x % y;
    window.console.log(mod);
}
calculate(12, 5);
*/


/* Step 3: Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees: 

ZAK 
JESSICA 
MARK 
FRED 
SALLY
*/

/*
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
function showEmployees() {
    window.console.log("Employees:");
    window.console.log(" ");
    for (var index in employees) {
    window.console.log(employees[index]) ;
    }
}
showEmployees(employees);
*/


// PART 2

// ROCK, PAPER, SCISSORS GAME
/*
var player = window.prompt("Please choose rock, paper or scissors.").toLowerCase();
var compChoice = (Math.random());

if (compChoice < 0.34) {
    compChoice = "rock";
} else if (compChoice >= 0.34 && compChoice < 0.66) {
    compChoice = "paper";
} else {
    compChoice = "scissors";
}
window.console.log(compChoice);


if (player === "rock" && compChoice === "rock") {
    window.alert("The computer chose rock and you chose rock...you tie; try again!");
} else if (player === "rock" && compChoice === "paper") {
    window.alert("The computer chose paper but you chose rock...you lose!");
} else if (player === "rock" && compChoice === "scissors") {
    window.alert("The computer chose scissors but you chose rock...you win!");
} else if (player === "paper" && compChoice === "rock") {
    window.alert("The computer chose rock and you chose paper...you win!");
} else if (player === "paper" && compChoice === "paper") {
    window.alert("The computer chose paper but you chose paper...you tie; try again!");
} else if (player === "paper" && compChoice === "scissors") {
    window.alert("The computer chose scissors but you chose paper...you lose!");
} else if (player === "scissors" && compChoice === "rock") {
    window.alert("The computer chose rock and you chose scissors...you lose!");
} else if (player === "scissors" && compChoice === "paper") {
    window.alert("The computer chose paper but you chose scissors..you win!");
} else if (player === "scissors" && compChoice === "scissors") {
    window.alert("The computer chose scissors but you chose scissors...you tie; try again!");
} else {
    window.alert("You didn't pick rock, paper or scissors; try again!");
}
*/


// CALCULATOR (ADD, SUBTRACT, MULTIPLY, DIVIDE)

/*
var val1 = window.prompt("Please enter your first number.");
var val2 = window.prompt("Please enter your second number.");
var operation = window.prompt("Please enter the operation (add, subtract, multiply or divide) you would like to perform.");

var x = parseInt(val1, 10);
var y = parseInt(val2, 10);

window.alert(calculate(x, y));

function calculate(x, y) {
    if (isNaN(x) || isNaN(y)) {
        window.alert("You must enter numbers for this calculator to work.");
        return ("Please refresh your browser to continue");
    } else {
        switch (operation) {
        case "add":
            window.alert("The answer is " + (x + y));
            break;
        case "subtract":
            window.alert("The answer is " + (x - y));
            break;
        case "multiply":
            window.alert("The answer is " + (x * y));
            break;
        case "divide":
            window.alert("The answer is " + (x / y));
            break;
        default:
            window.alert("You didn't enter the correct operation; to continue, please refresh the page and then re-enter your values.");
        }
        return ("Please refresh to continue");
    }
}
*/


//DEATH BY JAVASCRIPT

//STEP 1: Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
/*
var string = window.prompt("Enter a word to alphabetize the letters.");

function alphabetize() {
    var lowString = string.toLowerCase();
    var newString = lowString.match(/\D/g).sort();
    return newString;
}
window.alert(alphabetize(string));
*/


//STEP 2: Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
/*
var string = window.prompt("Enter a sentence. We will capitalize the first letter of each word.").toLowerCase();
function capitalize() {
    
    var stringArr = string.split(" ");
    var newstrArr = [];
   
for (var i = 0 ; i < stringArr.length; i++) {

    var firstLetter = stringArr[i].charAt(0).toUpperCase();
    var restOfWord = stringArr[i].slice(1);

    newstrArr[i] = firstLetter + restOfWord;
}
  return newstrArr.join(" ");
}
window.alert(capitalize(string));
*/


//STEP 3: Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.

/*
var string = window.prompt("Enter a sentence. We will count the vowels.");
                           
function vowelCount() {
    var lowString = string.toLowerCase();
    var vowelArray = lowString.match(/[aeiou]/g);
    return vowelArray.length;
}
window.alert(vowelCount(string));
*/


//STEP 4:	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.

/*
function randEight() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var i;
    for (i = 0; i < 8; i++) {
        var randCalc1 = Math.floor(Math.random() * chars.length);
        var randChar1 = chars.substring(randCalc1, randCalc1 + 1);
        
        var randCalc2 = Math.floor(Math.random() * chars.length);
        var randChar2 = chars.substring(randCalc2, randCalc2 + 1);
        
        var randCalc3 = Math.floor(Math.random() * chars.length);
        var randChar3 = chars.substring(randCalc3, randCalc3 + 1);
        
        var randCalc4 = Math.floor(Math.random() * chars.length);
        var randChar4 = chars.substring(randCalc4, randCalc4 + 1);
        
        var randCalc5 = Math.floor(Math.random() * chars.length);
        var randChar5 = chars.substring(randCalc5, randCalc5 + 1);
        
        var randCalc6 = Math.floor(Math.random() * chars.length);
        var randChar6 = chars.substring(randCalc6, randCalc6 + 1);
        
        var randCalc7 = Math.floor(Math.random() * chars.length);
        var randChar7 = chars.substring(randCalc7, randCalc7 + 1);
        
        var randCalc8 = Math.floor(Math.random() * chars.length);
        var randChar8 = chars.substring(randCalc8, randCalc8 + 1);
        
        var randomchars = [randChar1, randChar2, randChar3, randChar4, randChar5, randChar6, randChar7, randChar8];
        
        var randomStr = randomchars.toString().replace(/\,/g,"");
    }
    return randomStr;
}
window.alert(randEight());
*/


//Step 5:  Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.

/*
var countryArray = [];
var repeat;
while (repeat !== "n") {
    var country = window.prompt("Enter a country name.");
    countryArray.push(country);
    repeat = window.prompt("Do you want to enter another country?; y or n");
}
window.alert(countryArray);

function longestCountry() {
    var size = 0;
    var longest;
    
    for (var i = 0; i < countryArray.length; i++) {
        if (countryArray[i].length > size) {
            size = countryArray[i].length;
            longest = countryArray[i];
        }
    }
    window.alert(longest);
}
longestCountry(countryArray);   

*/