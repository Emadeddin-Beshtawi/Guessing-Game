"use strict";
let userName = prompt ('What is your name ?');
console.log (userName)
alert('Hello '+userName +' Welcome to my website! :)')

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

let q6 = Number(prompt ('Can you guess What my favorite number between 1-15 is ?'));

//while ( q6 !== 12){prompt ('Your answer is not correct please enter a number between 1-15 :')}
let counter =0 
for(let i=0; i<3 ;i++){ 
    if (q6===12)
    {
        alert('You guessed the right number!');counter++; console.log (counter);
        break;
    }

   else if (q6>12) {
       q6=Number(prompt ('Your answer is too high :'))
    }

   else {
       q6=Number(prompt ('Your answer is too low:'))
    }
    
};

alert ('The correct answer is 12 :) !');

let favMath = ['Linear Algebra', 'Number Theory', 'ODEs', 'PDEs', 'Topology', 'Prob. &Stat.', 'Math. Methods']

let q7 = prompt ('My Favorite Math course is ( linear algebra, Number Theory, ODEs, PDEs, Topology, Prob. &Stat., Math. Methods ) ?').toLocaleLowerCase();

for( let x=0; x<5;x++){

if (q7==='linear algebra'){
    alert('Your answer is correct :)');counter++; console.log (counter);
    break;
}
else if (q7!=='linear algebra') {
    prompt ('Your answer is incorrect try again:')
}



};

alert ('The correct answer is linear algebra :) !');

alert ('Your final score out of 7 is : '+ counter);

alert('Thank you '+ userName+' ')