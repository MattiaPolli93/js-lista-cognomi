// Ask the user their surname, then place it in an array with other surnames; print the list alphabetically and state its place in the list.
// Array and Variables
var surnames = ["Bianchi", "Rossi", "Duzioni", "Franchi", "Martini", "Balsano", "Verdi"];

do {
    // Asking user's surname
    var userSurname = (prompt("Hello! Please insert your surname")).toUpperCase();
} while (!isNaN(userSurname));

// Adding user's inserted surname inside the array
surnames.push(userSurname);

// Sorting it alphabetically
surnames.sort();
var newSurname;

// Calculating and displaying
for (var i = 0; i < surnames.length; i++) {
    newSurname = document.getElementById("surname-list").innerHTML;
    // Displaying in the HTML file
    document.getElementById("surname-list").innerHTML = newSurname + "<li>" + surnames[i] + "</li>";
}

// Position inside the list
var alphabeticalOrder = surnames.indexOf(userSurname);
var position = alphabeticalOrder + 1;

// Displaying in the HTML file
document.getElementById("position").innerHTML = position;