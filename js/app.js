"use strict";
let userName = prompt('What is your Name ?');
console.log(userName)
alert('Hello ' + userName + ' Welcome to my website! :)')

let counter = 0;

function nameAns() {
let q1 = prompt('Does my Name start with E ?').toLocaleLowerCase();
//console.log (q1)
switch (q1) {
    case 'yes':
        alert('Your answer is correct!'); counter++; console.log(counter);//console.log ('Your answer is correct!');
        break;
    case 'y':
        alert('Your answer is correct!'); counter++; console.log(counter);//console.log ('Your answer is correct!');
        break;
    default:
        alert('Your answer is wrong :(');
        break;
}
}
nameAns();


function animAns () {
let q2 = prompt('Do I love cats ?').toLocaleLowerCase();
//console.log (q2)
switch (q2) {
    case 'yes':
        alert('Your answer is correct!'); counter++; console.log(counter);//console.log ('Your answer is correct!');
        break;
    case 'y':
        alert('Your answer is correct!'); counter++; console.log(counter);//console.log ('Your answer is correct!');
        break;
    default:
        alert('Your answer is wrong :(');
        break;
}
}
animAns();

function gradAns(){
let q3 = prompt('Did I graduate from JUST?').toLocaleLowerCase();
//console.log (q3)
switch (q3) {
    case 'no':
        alert('Your answer is correct!'); counter++; console.log(counter);//console.log ('Your answer is correct!');
        break;
    case 'n':
        alert('Your answer is correct!'); counter++; console.log(counter);//console.log ('Your answer is correct!');
        break;
    default:
        alert('Your answer is wrong :(');
        break;
}
}
gradAns();

function mathAnsw (){
let q4 = prompt('Did I Study Math?').toLocaleLowerCase();
//console.log (q4)
switch (q4) {
    case 'yes':
        alert('Your answer is correct!'); counter++; console.log(counter); //console.log ('Your answer is correct!');
        break;
    case 'y':
        alert('Your answer is correct!'); counter++; console.log(counter); //console.log ('Your answer is correct!');
        break;
    default:
        alert('Your answer is wrong :(');
        break;
}
}
mathAnsw();

function langAnsw (){
let q5 = prompt('Can I Speak German ?').toLocaleLowerCase();
//console.log (q5)
switch (q5) {
    case 'no':
        alert('Your answer is correct!'); counter++; console.log(counter);//console.log ('Your answer is correct!');
        break;
    case 'n':
        alert('Your answer is correct!'); counter++; console.log(counter);//console.log ('Your answer is correct!');
        break;
    default:
        alert('Your answer is wrong :(');
        break;
}
}
langAnsw ();

function numAnsw () {
let q6 = Number(prompt('Can you guess What my favorite number between 1-15 is ?'));

//while ( q6 !== 12){Number(prompt ('Your answer is not correct please enter a number between 1-15 :'))}

for (let i = 0; i < 4; i++) {
    if (q6 === 12) {
        alert('You guessed the right number!'); counter++; console.log(counter);
        break;
    }

    else if (q6 > 12) {
        q6 = Number(prompt('Your answer is too high :'))
    }

    else {
        q6 = Number(prompt('Your answer is too low:'))
    }

};

alert('The correct answer is 12 ');
}
numAnsw();


function favAnsw (){
let favshape = ['c', 'o', 's', 'w', 'z']

let q7 = prompt('My Fav letter is? (c, o, s, w, z)').toLocaleLowerCase();
let test = false



for (let x = 0; x < 6; x++) {

    for (let z = 0; z < favshape.length; z++) {
        console.log(favshape[z]);
        if (q7 === 'w') {
            alert('Your Answer is Correct :)');
            counter++;
            console.log(counter);
            test = true;
            break;
        }
    }
    if (test == true) {
        break;
    }
    q7=prompt('Incorrect Answer')
}
}
favAnsw();


alert ('Your final score out of 7 is : '+ counter);

alert('Thank you '+ userName+' ')

