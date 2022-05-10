'use strict';

console.log('Bienvendidos Mis Amigos!');

let userName = prompt('Hello! What is your name?');
alert(`Nice to meet you ${userName}!`);

let answerOne = prompt('Am I a certified yoga instructor?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  //console.log('Pass');
  alert('Es verdad! I did a 500 hour certification in Rishikesh, as well as an internship in Medellin. I also keep a yoga mat by my desk to stretch during breaks.');
} else if(answerOne === 'no' || answerOne === 'n'){
  //console.log('Fail');
  alert('I know I am not currently teaching, but I am still certified!');
}

let answerTwo = prompt('Have I ever thru hiked the CDT?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  //console.log('Fail');
  alert('No, I thru hiked the Appalachian Trail in 2013. I would love to complete the CDT in the future though.');
} else if(answerTwo === 'no' || answerTwo === 'n'){
  //console.log('Pass');
  alert('You are right! I was a NoBo AT thru hiker, and my trail name is Books!');
}

let answerThree = prompt('Do I have any wine or beer certifications?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  //console.log('Pass');
  alert('Indeed! I am a Cicerone certified beer server and I have my second level Wine & Spirit Education Trust certification.');
} else if(answerThree === 'no' || answerThree === 'n'){
  //console.log('Fail');
  alert('I am surprised by it as well, but I am certified by Cicerone & WSET. I was pursuing a career in wine before I fell in love with coding.');
}

let answerFour = prompt('Have I biked the Camino de Santiago?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  //console.log('Pass');
  alert('Unfortunately yes, and it is really not meant to be biked. If you are looking for a better route I recommend the Camino del Cid!');
} else if(answerFour === 'no' || answerFour === 'n'){
  //console.log('Fail');
  alert('I wish it were false, but I in fact did attempt this route on bike, which resulted in a lot of bike pushing!');
}

let answerFive = prompt('Am I a Master Diver?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  //console.log('Fail');
  alert('I am not! I would love to be someday, but currently I am only advanced open water with a few additional certifications.');
} else if(answerFive === 'no' || answerFive === 'n'){
  //console.log('Pass');
  alert('You are correct, though I hope to someday be certified and work on a live aboard, I am currently only PADI Advanced Open Water.');
}
