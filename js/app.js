"use strict";
let userName = prompt ('What is your name ?');
console.log (userName)
alert('Hello '+userName+' Welcome to my website! :)')

let q1 = prompt ('Does my Name start with E ?').toLocaleLowerCase();
console.log (q1)
switch (q1) {
    case 'yes':
    alert ('Your answer is correct!');
    break;
    case 'y':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q2 = prompt ('Do I love cats ?').toLocaleLowerCase();
console.log (q2)
switch (q2) {
    case 'yes':
    alert ('Your answer is correct!');
    break;
    case 'y':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q3 = prompt ('Did I graduate from JUST?').toLocaleLowerCase();
console.log (q3)
switch (q3) {
    case 'no':
    alert ('Your answer is correct!');
    break;
    case 'n':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q4 = prompt ('Is Math my major ?').toLocaleLowerCase();
console.log (q4)
switch (q4) {
    case 'yes':
    alert ('Your answer is correct!');
    break;
    case 'y':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q5 = prompt ('Can I Speak German ').toLocaleLowerCase();
console.log (q5)
switch (q5) {
    case 'no':
    alert ('Your answer is correct!');
    break;
    case 'n':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

alert('Thank you '+ userName+' ')