// Ask the user their surname, then place it in an array with other surnames; print the list alphabetically and state its place in the list.
// Array and Variables
var surnames = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var userSurname = prompt("Hello! Please insert your surname");

// Adding user's inserted surname inside the array
surnames.push(userSurname);

// Sorting it alphabetically
surnames.sort();
var newUsername;

// Calculating and displaying
for (var i = 0; i < surnames.length; i++) {
    newSurname = document.getElementById("surname-list").innerHTML;
    document.getElementById("surname-list").innerHTML = newSurname + "<li>" + surnames[i] + "</li>";
}

// console.log(surnames);
