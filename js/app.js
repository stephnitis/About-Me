'use strict';

console.log('Bienvendidos Mis Amigos!');

let userName = prompt('Hello! What is your name?');
alert(`Nice to meet you ${userName}!`);

let score = 0;
let answerOne = prompt('Is Steph a certified yoga instructor?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  //console.log('Pass');
  score++;
  alert('Es verdad! She did a 500 hour certification in Rishikesh, as well as an internship in Medellin. She also keeps a yoga mat by her desk to stretch during breaks.');
} else if (answerOne === 'no' || answerOne === 'n') {
  //console.log('Fail');
  alert('Though she is not currently teaching she is still certified!');
}

let answerTwo = prompt('Has Steph ever thru hiked the CDT?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  //console.log('Fail');
  alert('No, she thru hiked the Appalachian Trail in 2013. She would love to complete the CDT in the future though.');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  //console.log('Pass');
  score++;
  alert('You are right! She was a NoBo AT thru hiker, and her trail name is Books!');
}

let answerThree = prompt('Does she have any wine or beer certifications?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  //console.log('Pass');
  score++;
  alert('Indeed! She is a Cicerone certified beer server and has her second level Wine & Spirit Education Trust certification.');
} else if (answerThree === 'no' || answerThree === 'n') {
  //console.log('Fail');
  alert('It is surprising, but she is certified by Cicerone & WSET. Steph was pursuing a career in wine before she fell in love with coding.');
}

let answerFour = prompt('Has she biked the Camino de Santiago?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  //console.log('Pass');
  score++;
  alert('Unfortunately yes, and she will be the first to tell you that it is not meant to be biked. If you are looking for a better route she recommends the Camino del Cid!');
} else if (answerFour === 'no' || answerFour === 'n') {
  //console.log('Fail');
  alert('She admits it is a much better walking path, but she did in fact attempt this route on bike, which resulted in a lot of bike pushing!');
}

let answerFive = prompt('Is Steph a Master Diver?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  //console.log('Fail');
  score++;
  alert('She is not! Though she would love to be someday, she is currently only advanced open water with a few additional certifications.');
} else if (answerFive === 'no' || answerFive === 'n') {
  //console.log('Pass');
  score++;
  alert('You are correct, though she hopes to someday be certified and work on a live aboard, she is currently only PADI Advanced Open Water.');
  //console.log(score);
}

function guessingGame() {
  let userAnswer = prompt('How old am I?');
  let correctAnswer = 33;
  let attempts = 4;

  for (let i = 1; i < attempts; i++) {
    while (userAnswer === null) {
      userAnswer = prompt('Please answer with a number.');
    }

    if (userAnswer === correctAnswer) {
      userAnswer = prompt('Yessir!');
      break;
    }

    else if (userAnswer > correctAnswer) {
      userAnswer = prompt('Wow! That is rude! I am not that old!');

    } else if (userAnswer < correctAnswer) {
      userAnswer = prompt('Awww, you are so sweet, but I am older than that.');
    }

    if (i === 4) {
      alert('You tried, but failed. I am actually 33.');
    }
  }
}
guessingGame();
