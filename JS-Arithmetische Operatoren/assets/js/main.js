"use strict";

//CodeFlow Übung lev1_12: Arithmetische Operatoren
let score = 5 + 5 * 10;
console.log("Ergebnis: " + score);

score = (5 + 5) * 10;
console.log("Ergebnis: " + score);

score = 0;
score = score + 10;
console.log("Ergebnis: " + score);

score += 10;
console.log("Ergebnis: " + score);

console.log("--------------------------------------");

let zahl = 1;
zahl = zahl + 1;
zahl += 1;
console.log(zahl);

zahl++;
console.log("increment: " + zahl);

zahl--;
console.log("decrement: " + zahl);
console.log("--------------------------------------");

//CodeFlow Übung lev1_13:  arithmetische Wiederholung

//Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

//Subtraktion
let subtraction_operator = 2 - 1;
console.log("subtraction: " + subtraction_operator);

//Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

//Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);

//Modulo
let modulus_operator = 15 % 5;
console.log("modulus: " + modulus_operator);
