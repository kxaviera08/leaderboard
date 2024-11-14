//Arrays for class amount and name
const className = [
  'P1A', 
  'P1B', 
  'P1C',
  'P2A',
  'P2B',
  'P2C',
  'P3A',
  'P3B',
  'P3C',
  'P4A',
  'P4B',
  'P5A',
  'P5B',
  'P6A',
  'P6B',
  'S1A',
  'S1B',
  'S2A',
  'S2B',
  'S2C',
  'S3A',
  'S3B',
  'S4A',
  'S4B',
  'JC1A',
  'JC1B',
  'JC2A',
  'JC2B',
];
const classAmt = [
  0.01,
  0.02,
  0.03,
  0.04,
  0.05,
  0.06,
  2.759,
  4.111,
  1.357,
  0.07,
  1.465,
  0.283,
  3.295,
  0.725,
  0.08,
  0.09,
  0.011,
  0.012,
  0.013,
  0.585,
  0.014,
  0.015,
  0.016,
  0.017,
  3.025,
  1.717,
  0.018,
  0.019
];

for (let i = 0; i < className.length; i++) {
  className[i] = classAmt[i];
}


//Displaying amounts
document.querySelector('.P1A-amt').innerHTML = className[0]+' kg';
document.querySelector('.P1B-amt').innerHTML = className[1]+' kg';
document.querySelector('.P1C-amt').innerHTML = className[2]+' kg';
document.querySelector('.P2A-amt').innerHTML = className[3]+' kg';
document.querySelector('.P2B-amt').innerHTML = className[4]+' kg';
document.querySelector('.P2C-amt').innerHTML = className[5]+' kg';
document.querySelector('.P3A-amt').innerHTML = className[6]+' kg';
document.querySelector('.P3B-amt').innerHTML = className[7]+' kg';
document.querySelector('.P3C-amt').innerHTML = className[8]+' kg';
document.querySelector('.P4A-amt').innerHTML = className[9]+' kg';
document.querySelector('.P4B-amt').innerHTML = className[10]+' kg';
document.querySelector('.P5A-amt').innerHTML = className[11]+' kg';
document.querySelector('.P5B-amt').innerHTML = className[12]+' kg';
document.querySelector('.P6A-amt').innerHTML = className[13]+' kg';
document.querySelector('.P6B-amt').innerHTML = className[14]+' kg';
document.querySelector('.S1A-amt').innerHTML = className[15]+' kg';
document.querySelector('.S1B-amt').innerHTML = className[16]+' kg';
document.querySelector('.S2A-amt').innerHTML = className[17]+' kg';
document.querySelector('.S2B-amt').innerHTML = className[18]+' kg';
document.querySelector('.S2C-amt').innerHTML = className[19]+' kg';
document.querySelector('.S3A-amt').innerHTML = className[20]+' kg';
document.querySelector('.S3B-amt').innerHTML = className[21]+' kg';
document.querySelector('.S4A-amt').innerHTML = className[22]+' kg';
document.querySelector('.S4B-amt').innerHTML = className[23]+' kg';
document.querySelector('.JC1A-amt').innerHTML = className[24]+' kg';
document.querySelector('.JC1B-amt').innerHTML = className[25]+' kg';
document.querySelector('.JC2A-amt').innerHTML = className[26]+' kg';
document.querySelector('.JC2B-amt').innerHTML = className[27]+' kg';


//Positioning by amount and storing in an arranged array
let first = 0;
let second = 0;
let third = 0;
let fourth = 0;
let fifth = 0;
let sixth = 0;
let seventh = 0;
let eighth = 0;
let ninth = 0;
let tenth = 0;
let eleventh = 0;
let twelveth = 0;
let thirteenth = 0;
let fourteenth = 0;
let fifteenth = 0;
let sixteenth = 0;
let seventeenth = 0;
let eighteenth = 0;
let nineteenth = 0;
let twentyth = 0;
let twentyFirst = 0;
let twentySecond = 0;
let twentyThird = 0;
let twentyFourth = 0;
let twentyFifth = 0;
let twentySixth = 0;
let twentySeventh = 0;
let twentyEighth = 0;

for (let i = 0; i < className.length; i++) {
  if (className[i] > first) {
    first = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < first && className[i] > second) {
    second = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < second && className[i] > third) {
    third = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < third && className[i] > fourth) {
    fourth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < fourth && className[i] > fifth) {
    fifth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < fifth && className[i] > sixth) {
    sixth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < sixth && className[i] > seventh) {
    seventh = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < seventh && className[i] > eighth) {
    eighth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < eighth && className[i] > ninth) {
    ninth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < ninth && className[i] > tenth) {
    tenth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < tenth && className[i] > eleventh) {
    eleventh = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < eleventh && className[i] > twelveth) {
    twelveth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < twelveth && className[i] > thirteenth) {
    thirteenth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < thirteenth && className[i] > fourteenth) {
    fourteenth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < fourteenth && className[i] > fifteenth) {
    fifteenth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < fifteenth && className[i] > sixteenth) {
    sixteenth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < sixteenth && className[i] > seventeenth) {
    seventeenth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < seventeenth && className[i] > eighteenth) {
    eighteenth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < eighteenth && className[i] > nineteenth) {
    nineteenth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < nineteenth && className[i] > twentyth) {
    twentyth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < twentyth && className[i] > twentyFirst) {
    twentyFirst = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < twentyFirst && className[i] > twentySecond) {
    twentySecond = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < twentySecond && className[i] > twentyThird) {
    twentyThird = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < twentyThird && className[i] > twentyFourth) {
    twentyFourth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < twentyFourth && className[i] > twentyFifth) {
    twentyFifth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < twentyFifth && className[i] > twentySixth) {
    twentySixth = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < twentySixth && className[i] > twentySeventh) {
    twentySeventh = className[i]
  }
}

for (let i = 0; i < className.length; i++) {
  if (className[i] < twentySeventh && className[i] > twentyEighth) {
    twentyEighth = className[i]
  }
}

const positionedValues = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelveth, thirteenth, fourteenth, fifteenth, sixteenth, seventeenth, eighteenth, nineteenth, twentyth, twentyFirst, twentySecond, twentyThird, twentyFourth, twentyFifth, twentySixth, twentySeventh, twentyEighth]


//Positioning the classes in the HTML
let P1A = document.querySelector('.P1A').innerHTML
let P1B = document.querySelector('.P1B').innerHTML
let P1C = document.querySelector('.P1C').innerHTML
let P2A = document.querySelector('.P2A').innerHTML
let P2B = document.querySelector('.P2B').innerHTML
let P2C = document.querySelector('.P2C').innerHTML
let P3A = document.querySelector('.P3A').innerHTML
let P3B = document.querySelector('.P3B').innerHTML
let P3C = document.querySelector('.P3C').innerHTML
let P4A = document.querySelector('.P4A').innerHTML
let P4B = document.querySelector('.P4B').innerHTML
let P5A = document.querySelector('.P5A').innerHTML
let P5B = document.querySelector('.P5B').innerHTML
let P6A = document.querySelector('.P6A').innerHTML
let P6B = document.querySelector('.P6B').innerHTML
let S1A = document.querySelector('.S1A').innerHTML
let S1B = document.querySelector('.S1B').innerHTML
let S2A = document.querySelector('.S2A').innerHTML
let S2B = document.querySelector('.S2B').innerHTML
let S2C = document.querySelector('.S2C').innerHTML
let S3A = document.querySelector('.S3A').innerHTML
let S3B = document.querySelector('.S3B').innerHTML
let S4A = document.querySelector('.S4A').innerHTML
let S4B = document.querySelector('.S4B').innerHTML
let JC1A = document.querySelector('.JC1A').innerHTML
let JC1B = document.querySelector('.JC1B').innerHTML
let JC2A = document.querySelector('.JC2A').innerHTML
let JC2B = document.querySelector('.JC2B').innerHTML


console.log(className)
console.log(positionedValues)
/*
//Arranging values
let firstP = document.querySelector('.first');
let secondP = document.querySelector('.second');
let thirdP = document.querySelector('.third');
let fourthP = document.querySelector('.fourth');
let fifthP = document.querySelector('.fifth');
let sixthP = document.querySelector('.sixth');
let seventhP = document.querySelector('.seventh');
let eighthP = document.querySelector('.eighth');
let ninthP = document.querySelector('.ninth');
let tenthP = document.querySelector('.tenth');
let eleventhP = document.querySelector('.eleventh');
let twelfthP = document.querySelector('.twelfth');
let thirteenthP = document.querySelector('.thirteenth');
let fourteenthP = document.querySelector('.fourteenth');
let fifteenthP = document.querySelector('.fifteenth');
let sixteenthP = document.querySelector('.sixteenth');
let seventeenthP = document.querySelector('.seventeenth');
let eighteenthP = document.querySelector('.eighteenth');
let nineteenthP = document.querySelector('.nineteenth');
let twentythP = document.querySelector('.twentyth');
let twentyFirstP = document.querySelector('.twentyFirst');
let twentySecondP = document.querySelector('.twentySecond');
let twentyThirdP = document.querySelector('.twentyThird');
let twentyFourthP = document.querySelector('.twentyFourth');
let twentyFifthP = document.querySelector('.twentyFifth');
let twentySixthP = document.querySelector('.twentySixth');
let twentySeventhP = document.querySelector('.twentySeventh');
let twentyEighthP = document.querySelector('.twentyEighth');

const placeReplacement = [firstP, secondP, thirdP, fourthP, fifthP, sixthP, seventhP, eighthP, ninthP, tenthP, eleventhP, twelfthP, thirteenthP, fourteenthP, fifteenthP, sixteenthP, seventeenthP, eighteenthP, nineteenthP, twentythP, twentyFirstP, twentySecondP, twentyThirdP, twentyFourthP, twentyFifthP, twentySixthP, twentySeventhP, twentyEighthP]

for (let i = 0; i < placeReplacement.length; i++) {
  if (className[0] == positionedValues[i]) {
    document.querySelector('.P1A-rank').innerHTML = i + 1;
    document.querySelector('.P1A').innerHTML = "";
    placeReplacement[i].innerHTML = P1A;
  }
}
*/

//For P1A
if (className[0] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '1'
} else if (className[0] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '2'
} else if (className[0] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '3'
} else if (className[0] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '4'
} else if (className[0] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '5'
} else if (className[0] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '6'
} else if (className[0] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '7'
} else if (className[0] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '8'
} else if (className[0] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '9'
} else if (className[0] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '10'
} else if (className[0] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '11'
} else if (className[0] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '12'
} else if (className[0] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '13'
} else if (className[0] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '14'
} else if (className[0] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '15'
} else if (className[0] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '16'
} else if (className[0] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '17'
} else if (className[0] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '18'
} else if (className[0] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '19'
} else if (className[0] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '20'
} else if (className[0] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '21'
} else if (className[0] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '22'
} else if (className[0] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '23'
} else if (className[0] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '24'
} else if (className[0] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '25'
} else if (className[0] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '26'
} else if (className[0] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '27'
} else if (className[0] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P1A
  document.querySelector('.P1A').innerHTML = ""
  document.querySelector('.P1A-rank').innerHTML = '28'
}



//For P1B
if (className[1] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '1'
} else if (className[1] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '2'
} else if (className[1] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '3'
} else if (className[1] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '4'
} else if (className[1] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '5'
} else if (className[1] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '6'
} else if (className[1] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '7'
} else if (className[1] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '8'
} else if (className[1] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '9'
} else if (className[1] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '11'
} else if (className[1] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '11'
} else if (className[1] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '12'
} else if (className[1] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '13'
} else if (className[1] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '14'
} else if (className[1] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '15'
} else if (className[1] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '16'
} else if (className[1] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '17'
} else if (className[1] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '18'
} else if (className[1] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '19'
} else if (className[1] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '20'
} else if (className[1] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '21'
} else if (className[1] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '22'
} else if (className[1] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '23'
} else if (className[1] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '24'
} else if (className[1] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '25'
} else if (className[1] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '26'
} else if (className[1] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '27'
} else if (className[1] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P1B
  document.querySelector('.P1B').innerHTML = ""
  document.querySelector('.P1B-rank').innerHTML = '28'
}



//For P1C
if (className[2] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '1'
} else if (className[2] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '2'
} else if (className[2] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '3'
} else if (className[2] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '4'
} else if (className[2] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '5'
} else if (className[2] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '6'
} else if (className[2] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '7'
} else if (className[2] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '8'
} else if (className[2] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '9'
} else if (className[2] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '11'
} else if (className[2] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '11'
} else if (className[2] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '12'
} else if (className[2] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '13'
} else if (className[2] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '14'
} else if (className[2] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '15'
} else if (className[2] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '16'
} else if (className[2] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '17'
} else if (className[2] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '18'
} else if (className[2] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '19'
} else if (className[2] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '20'
} else if (className[2] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '21'
} else if (className[2] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '22'
} else if (className[2] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '23'
} else if (className[2] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '24'
} else if (className[2] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '25'
} else if (className[2] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '26'
} else if (className[2] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '27'
} else if (className[2] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P1C
  document.querySelector('.P1C').innerHTML = ""
  document.querySelector('.P1C-rank').innerHTML = '28'
}



//For P1C
if (className[3] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '1'
} else if (className[3] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '2'
} else if (className[3] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '3'
} else if (className[3] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '4'
} else if (className[3] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '5'
} else if (className[3] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '6'
} else if (className[3] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '7'
} else if (className[3] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '8'
} else if (className[3] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '9'
} else if (className[3] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '11'
} else if (className[3] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '11'
} else if (className[3] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '12'
} else if (className[3] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '13'
} else if (className[3] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '14'
} else if (className[3] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '15'
} else if (className[3] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '16'
} else if (className[3] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '17'
} else if (className[3] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '18'
} else if (className[3] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '19'
} else if (className[3] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '20'
} else if (className[3] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '21'
} else if (className[3] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '22'
} else if (className[3] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '23'
} else if (className[3] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '24'
} else if (className[3] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '25'
} else if (className[3] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '26'
} else if (className[3] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '27'
} else if (className[3] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P2A
  document.querySelector('.P2A').innerHTML = ""
  document.querySelector('.P2A-rank').innerHTML = '28'
}



//For P1C
if (className[4] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '1'
} else if (className[4] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '2'
} else if (className[4] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '3'
} else if (className[4] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '4'
} else if (className[4] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '5'
} else if (className[4] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '6'
} else if (className[4] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '7'
} else if (className[4] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '8'
} else if (className[4] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '9'
} else if (className[4] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '11'
} else if (className[4] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '11'
} else if (className[4] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '12'
} else if (className[4] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '13'
} else if (className[4] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '14'
} else if (className[4] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '15'
} else if (className[4] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '16'
} else if (className[4] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '17'
} else if (className[4] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '18'
} else if (className[4] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '19'
} else if (className[4] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '20'
} else if (className[4] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '21'
} else if (className[4] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '22'
} else if (className[4] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '23'
} else if (className[4] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '24'
} else if (className[4] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '25'
} else if (className[4] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '26'
} else if (className[4] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '27'
} else if (className[4] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P2B
  document.querySelector('.P2B').innerHTML = ""
  document.querySelector('.P2B-rank').innerHTML = '28'
}



//For P1C
if (className[5] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '1'
} else if (className[5] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '2'
} else if (className[5] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '3'
} else if (className[5] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '4'
} else if (className[5] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '5'
} else if (className[5] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '6'
} else if (className[5] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '7'
} else if (className[5] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '8'
} else if (className[5] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '9'
} else if (className[5] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '11'
} else if (className[5] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '11'
} else if (className[5] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '12'
} else if (className[5] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '13'
} else if (className[5] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '14'
} else if (className[5] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '15'
} else if (className[5] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '16'
} else if (className[5] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '17'
} else if (className[5] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '18'
} else if (className[5] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '19'
} else if (className[5] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '20'
} else if (className[5] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '21'
} else if (className[5] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '22'
} else if (className[5] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '23'
} else if (className[5] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '24'
} else if (className[5] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '25'
} else if (className[5] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '26'
} else if (className[5] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '27'
} else if (className[5] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P2C
  document.querySelector('.P2C').innerHTML = ""
  document.querySelector('.P2C-rank').innerHTML = '28'
}



//For P1C
if (className[6] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '1'
} else if (className[6] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '2'
} else if (className[6] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '3'
} else if (className[6] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '4'
} else if (className[6] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '5'
} else if (className[6] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '6'
} else if (className[6] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '7'
} else if (className[6] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '8'
} else if (className[6] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '9'
} else if (className[6] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '11'
} else if (className[6] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '11'
} else if (className[6] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '12'
} else if (className[6] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '13'
} else if (className[6] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '14'
} else if (className[6] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '15'
} else if (className[6] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '16'
} else if (className[6] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '17'
} else if (className[6] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '18'
} else if (className[6] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '19'
} else if (className[6] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '20'
} else if (className[6] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '21'
} else if (className[6] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '22'
} else if (className[6] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '23'
} else if (className[6] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '24'
} else if (className[6] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '25'
} else if (className[6] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '26'
} else if (className[6] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '27'
} else if (className[6] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P3A
  document.querySelector('.P3A').innerHTML = ""
  document.querySelector('.P3A-rank').innerHTML = '28'
}



//For P1C
if (className[7] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '1'
} else if (className[7] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '2'
} else if (className[7] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '3'
} else if (className[7] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '4'
} else if (className[7] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '5'
} else if (className[7] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '6'
} else if (className[7] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '7'
} else if (className[7] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '8'
} else if (className[7] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '9'
} else if (className[7] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '11'
} else if (className[7] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '11'
} else if (className[7] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '12'
} else if (className[7] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '13'
} else if (className[7] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '14'
} else if (className[7] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '15'
} else if (className[7] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '16'
} else if (className[7] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '17'
} else if (className[7] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '18'
} else if (className[7] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '19'
} else if (className[7] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '20'
} else if (className[7] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '21'
} else if (className[7] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '22'
} else if (className[7] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '23'
} else if (className[7] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '24'
} else if (className[7] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '25'
} else if (className[7] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '26'
} else if (className[7] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '27'
} else if (className[7] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P3B
  document.querySelector('.P3B').innerHTML = ""
  document.querySelector('.P3B-rank').innerHTML = '28'
}



//For P1C
if (className[8] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '1'
} else if (className[8] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '2'
} else if (className[8] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '3'
} else if (className[8] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '4'
} else if (className[8] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '5'
} else if (className[8] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '6'
} else if (className[8] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '7'
} else if (className[8] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '8'
} else if (className[8] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '9'
} else if (className[8] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '11'
} else if (className[8] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '11'
} else if (className[8] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '12'
} else if (className[8] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '13'
} else if (className[8] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '14'
} else if (className[8] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '15'
} else if (className[8] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '16'
} else if (className[8] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '17'
} else if (className[8] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '18'
} else if (className[8] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '19'
} else if (className[8] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '20'
} else if (className[8] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '21'
} else if (className[8] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '22'
} else if (className[8] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '23'
} else if (className[8] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '24'
} else if (className[8] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '25'
} else if (className[8] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '26'
} else if (className[8] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '27'
} else if (className[8] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P3C
  document.querySelector('.P3C').innerHTML = ""
  document.querySelector('.P3C-rank').innerHTML = '28'
}



//For P1C
if (className[9] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '1'
} else if (className[9] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '2'
} else if (className[9] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '3'
} else if (className[9] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '4'
} else if (className[9] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '5'
} else if (className[9] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '6'
} else if (className[9] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '7'
} else if (className[9] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '8'
} else if (className[9] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '9'
} else if (className[9] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '11'
} else if (className[9] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '11'
} else if (className[9] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '12'
} else if (className[9] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '13'
} else if (className[9] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '14'
} else if (className[9] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '15'
} else if (className[9] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '16'
} else if (className[9] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '17'
} else if (className[9] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '18'
} else if (className[9] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '19'
} else if (className[9] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '20'
} else if (className[9] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '21'
} else if (className[9] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '22'
} else if (className[9] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '23'
} else if (className[9] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '24'
} else if (className[9] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '25'
} else if (className[9] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '26'
} else if (className[9] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '27'
} else if (className[9] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P4A
  document.querySelector('.P4A').innerHTML = ""
  document.querySelector('.P4A-rank').innerHTML = '28'
}



//For P1C
if (className[10] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '1'
} else if (className[10] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '2'
} else if (className[10] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '3'
} else if (className[10] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '4'
} else if (className[10] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '5'
} else if (className[10] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '6'
} else if (className[10] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '7'
} else if (className[10] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '8'
} else if (className[10] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '9'
} else if (className[10] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '11'
} else if (className[10] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '11'
} else if (className[10] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '12'
} else if (className[10] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '13'
} else if (className[10] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '14'
} else if (className[10] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '15'
} else if (className[10] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '16'
} else if (className[10] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '17'
} else if (className[10] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '18'
} else if (className[10] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '19'
} else if (className[10] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '20'
} else if (className[10] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '21'
} else if (className[10] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '22'
} else if (className[10] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '23'
} else if (className[10] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '24'
} else if (className[10] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '25'
} else if (className[10] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '26'
} else if (className[10] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '27'
} else if (className[10] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P4B
  document.querySelector('.P4B').innerHTML = ""
  document.querySelector('.P4B-rank').innerHTML = '28'
}



//For P1C
if (className[10] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '1'
} else if (className[10] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '2'
} else if (className[10] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '3'
} else if (className[10] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '4'
} else if (className[10] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '5'
} else if (className[10] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '6'
} else if (className[10] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '7'
} else if (className[10] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '8'
} else if (className[10] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '9'
} else if (className[10] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '11'
} else if (className[10] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '11'
} else if (className[10] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '12'
} else if (className[10] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '13'
} else if (className[10] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '14'
} else if (className[10] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '15'
} else if (className[10] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '16'
} else if (className[10] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '17'
} else if (className[10] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '18'
} else if (className[10] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '19'
} else if (className[10] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '20'
} else if (className[10] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '21'
} else if (className[10] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '22'
} else if (className[10] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '23'
} else if (className[10] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '24'
} else if (className[10] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '25'
} else if (className[10] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '26'
} else if (className[10] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '27'
} else if (className[10] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P5A
  document.querySelector('.P5A').innerHTML = ""
  document.querySelector('.P5A-rank').innerHTML = '28'
}



//For P1C
if (className[11] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '1'
} else if (className[11] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '2'
} else if (className[11] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '3'
} else if (className[11] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '4'
} else if (className[11] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '5'
} else if (className[11] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '6'
} else if (className[11] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '7'
} else if (className[11] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '8'
} else if (className[11] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '9'
} else if (className[11] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '11'
} else if (className[11] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '11'
} else if (className[11] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '12'
} else if (className[11] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '13'
} else if (className[11] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '14'
} else if (className[11] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '15'
} else if (className[11] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '16'
} else if (className[11] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '17'
} else if (className[11] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '18'
} else if (className[11] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '19'
} else if (className[11] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '20'
} else if (className[11] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '21'
} else if (className[11] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '22'
} else if (className[11] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '23'
} else if (className[11] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '24'
} else if (className[11] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '25'
} else if (className[11] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '26'
} else if (className[11] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '27'
} else if (className[11] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P5B
  document.querySelector('.P5B').innerHTML = ""
  document.querySelector('.P5B-rank').innerHTML = '28'
}



//For P1C
if (className[12] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '1'
} else if (className[12] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '2'
} else if (className[12] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '3'
} else if (className[12] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '4'
} else if (className[12] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '5'
} else if (className[12] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '6'
} else if (className[12] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '7'
} else if (className[12] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '8'
} else if (className[12] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '9'
} else if (className[12] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '11'
} else if (className[12] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '11'
} else if (className[12] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '12'
} else if (className[12] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '13'
} else if (className[12] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '14'
} else if (className[12] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '15'
} else if (className[12] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '16'
} else if (className[12] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '17'
} else if (className[12] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '18'
} else if (className[12] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '19'
} else if (className[12] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '20'
} else if (className[12] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '21'
} else if (className[12] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '22'
} else if (className[12] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '23'
} else if (className[12] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '24'
} else if (className[12] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '25'
} else if (className[12] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '26'
} else if (className[12] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '27'
} else if (className[12] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P6A
  document.querySelector('.P6A').innerHTML = ""
  document.querySelector('.P6A-rank').innerHTML = '28'
}



//For P1C
if (className[13] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '1'
} else if (className[13] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '2'
} else if (className[13] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '3'
} else if (className[13] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '4'
} else if (className[13] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '5'
} else if (className[13] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '6'
} else if (className[13] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '7'
} else if (className[13] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '8'
} else if (className[13] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '9'
} else if (className[13] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '11'
} else if (className[13] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '11'
} else if (className[13] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '12'
} else if (className[13] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '13'
} else if (className[13] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '14'
} else if (className[13] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '15'
} else if (className[13] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '16'
} else if (className[13] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '17'
} else if (className[13] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '18'
} else if (className[13] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '19'
} else if (className[13] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '20'
} else if (className[13] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '21'
} else if (className[13] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '22'
} else if (className[13] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '23'
} else if (className[13] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '24'
} else if (className[13] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '25'
} else if (className[13] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '26'
} else if (className[13] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '27'
} else if (className[13] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = P6B
  document.querySelector('.P6B').innerHTML = ""
  document.querySelector('.P6B-rank').innerHTML = '28'
}



//For P1C
if (className[14] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '1'
} else if (className[14] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '2'
} else if (className[14] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '3'
} else if (className[14] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '4'
} else if (className[14] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '5'
} else if (className[14] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '6'
} else if (className[14] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '7'
} else if (className[14] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '8'
} else if (className[14] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '9'
} else if (className[14] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '11'
} else if (className[14] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '11'
} else if (className[14] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '12'
} else if (className[14] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '13'
} else if (className[14] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '14'
} else if (className[14] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '15'
} else if (className[14] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '16'
} else if (className[14] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '17'
} else if (className[14] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '18'
} else if (className[14] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '19'
} else if (className[14] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '20'
} else if (className[14] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '21'
} else if (className[14] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '22'
} else if (className[14] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '23'
} else if (className[14] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '24'
} else if (className[14] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '25'
} else if (className[14] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '26'
} else if (className[14] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '27'
} else if (className[14] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = S1A
  document.querySelector('.S1A').innerHTML = ""
  document.querySelector('.S1A-rank').innerHTML = '28'
}



//For P1C
if (className[15] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '1'
} else if (className[15] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '2'
} else if (className[15] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '3'
} else if (className[15] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '4'
} else if (className[15] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '5'
} else if (className[15] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '6'
} else if (className[15] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '7'
} else if (className[15] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '8'
} else if (className[15] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '9'
} else if (className[15] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '11'
} else if (className[15] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '11'
} else if (className[15] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '12'
} else if (className[15] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '13'
} else if (className[15] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '14'
} else if (className[15] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '15'
} else if (className[15] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '16'
} else if (className[15] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '17'
} else if (className[15] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '18'
} else if (className[15] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '19'
} else if (className[15] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '20'
} else if (className[15] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '21'
} else if (className[15] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '22'
} else if (className[15] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '23'
} else if (className[15] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '24'
} else if (className[15] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '25'
} else if (className[15] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '26'
} else if (className[15] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '27'
} else if (className[15] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = S1B
  document.querySelector('.S1B').innerHTML = ""
  document.querySelector('.S1B-rank').innerHTML = '28'
}



//For P1C
if (className[16] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '1'
} else if (className[16] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '2'
} else if (className[16] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '3'
} else if (className[16] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '4'
} else if (className[16] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '5'
} else if (className[16] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '6'
} else if (className[16] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '7'
} else if (className[16] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '8'
} else if (className[16] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '9'
} else if (className[16] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '11'
} else if (className[16] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '11'
} else if (className[16] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '12'
} else if (className[16] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '13'
} else if (className[16] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '14'
} else if (className[16] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '15'
} else if (className[16] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '16'
} else if (className[16] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '17'
} else if (className[16] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '18'
} else if (className[16] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '19'
} else if (className[16] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '20'
} else if (className[16] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '21'
} else if (className[16] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '22'
} else if (className[16] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '23'
} else if (className[16] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '24'
} else if (className[16] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '25'
} else if (className[16] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '26'
} else if (className[16] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '27'
} else if (className[16] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = S2A
  document.querySelector('.S2A').innerHTML = ""
  document.querySelector('.S2A-rank').innerHTML = '28'
}



//For P1C
if (className[17] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '1'
} else if (className[17] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '2'
} else if (className[17] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '3'
} else if (className[17] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '4'
} else if (className[17] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '5'
} else if (className[17] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '6'
} else if (className[17] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '7'
} else if (className[17] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '8'
} else if (className[17] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '9'
} else if (className[17] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '11'
} else if (className[17] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '11'
} else if (className[17] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '12'
} else if (className[17] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '13'
} else if (className[17] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '14'
} else if (className[17] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '15'
} else if (className[17] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '16'
} else if (className[17] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '17'
} else if (className[17] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '18'
} else if (className[17] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '19'
} else if (className[17] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '20'
} else if (className[17] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '21'
} else if (className[17] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '22'
} else if (className[17] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '23'
} else if (className[17] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '24'
} else if (className[17] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '25'
} else if (className[17] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '26'
} else if (className[17] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '27'
} else if (className[17] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = S2B
  document.querySelector('.S2B').innerHTML = ""
  document.querySelector('.S2B-rank').innerHTML = '28'
}



//For P1C
if (className[18] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '1'
} else if (className[18] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '2'
} else if (className[18] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '3'
} else if (className[18] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '4'
} else if (className[18] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '5'
} else if (className[18] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '6'
} else if (className[18] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '7'
} else if (className[18] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '8'
} else if (className[18] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '9'
} else if (className[18] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '11'
} else if (className[18] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '11'
} else if (className[18] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '12'
} else if (className[18] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '13'
} else if (className[18] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '14'
} else if (className[18] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '15'
} else if (className[18] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '16'
} else if (className[18] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '17'
} else if (className[18] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '18'
} else if (className[18] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '19'
} else if (className[18] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '20'
} else if (className[18] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '21'
} else if (className[18] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '22'
} else if (className[18] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '23'
} else if (className[18] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '24'
} else if (className[18] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '25'
} else if (className[18] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '26'
} else if (className[18] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '27'
} else if (className[18] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = S2C
  document.querySelector('.S2C').innerHTML = ""
  document.querySelector('.S2C-rank').innerHTML = '28'
}



//For P1C
if (className[19] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '1'
} else if (className[19] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '2'
} else if (className[19] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '3'
} else if (className[19] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '4'
} else if (className[19] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '5'
} else if (className[19] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '6'
} else if (className[19] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '7'
} else if (className[19] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '8'
} else if (className[19] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '9'
} else if (className[19] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '11'
} else if (className[19] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '11'
} else if (className[19] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '12'
} else if (className[19] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '13'
} else if (className[19] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '14'
} else if (className[19] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '15'
} else if (className[19] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '16'
} else if (className[19] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '17'
} else if (className[19] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '18'
} else if (className[19] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '19'
} else if (className[19] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '20'
} else if (className[19] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '21'
} else if (className[19] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '22'
} else if (className[19] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '23'
} else if (className[19] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '24'
} else if (className[19] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '25'
} else if (className[19] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '26'
} else if (className[19] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '27'
} else if (className[19] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = S3A
  document.querySelector('.S3A').innerHTML = ""
  document.querySelector('.S3A-rank').innerHTML = '28'
}



//For P1C
if (className[20] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '1'
} else if (className[20] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '2'
} else if (className[20] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '3'
} else if (className[20] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '4'
} else if (className[20] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '5'
} else if (className[20] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '6'
} else if (className[20] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '7'
} else if (className[20] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '8'
} else if (className[20] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '9'
} else if (className[20] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '11'
} else if (className[20] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '11'
} else if (className[20] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '12'
} else if (className[20] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '13'
} else if (className[20] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '14'
} else if (className[20] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '15'
} else if (className[20] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '16'
} else if (className[20] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '17'
} else if (className[20] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '18'
} else if (className[20] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '19'
} else if (className[20] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '20'
} else if (className[20] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '21'
} else if (className[20] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '22'
} else if (className[20] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '23'
} else if (className[20] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '24'
} else if (className[20] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '25'
} else if (className[20] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '26'
} else if (className[20] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '27'
} else if (className[20] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = S3B
  document.querySelector('.S3B').innerHTML = ""
  document.querySelector('.S3B-rank').innerHTML = '28'
}



//For P1C
if (className[21] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '1'
} else if (className[21] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '2'
} else if (className[21] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '3'
} else if (className[21] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '4'
} else if (className[21] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '5'
} else if (className[21] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '6'
} else if (className[21] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '7'
} else if (className[21] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '8'
} else if (className[21] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '9'
} else if (className[21] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '11'
} else if (className[21] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '11'
} else if (className[21] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '12'
} else if (className[21] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '13'
} else if (className[21] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '14'
} else if (className[21] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '15'
} else if (className[21] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '16'
} else if (className[21] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '17'
} else if (className[21] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '18'
} else if (className[21] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '19'
} else if (className[21] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '20'
} else if (className[21] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '21'
} else if (className[21] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '22'
} else if (className[21] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '23'
} else if (className[21] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '24'
} else if (className[21] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '25'
} else if (className[21] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '26'
} else if (className[21] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '27'
} else if (className[21] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = S4A
  document.querySelector('.S4A').innerHTML = ""
  document.querySelector('.S4A-rank').innerHTML = '28'
}



//For P1C
if (className[22] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '1'
} else if (className[22] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '2'
} else if (className[22] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '3'
} else if (className[22] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '4'
} else if (className[22] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '5'
} else if (className[22] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '6'
} else if (className[22] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '7'
} else if (className[22] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '8'
} else if (className[22] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '9'
} else if (className[22] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '11'
} else if (className[22] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '11'
} else if (className[22] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '12'
} else if (className[22] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '13'
} else if (className[22] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '14'
} else if (className[22] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '15'
} else if (className[22] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '16'
} else if (className[22] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '17'
} else if (className[22] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '18'
} else if (className[22] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '19'
} else if (className[22] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '20'
} else if (className[22] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '21'
} else if (className[22] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '22'
} else if (className[22] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '23'
} else if (className[22] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '24'
} else if (className[22] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '25'
} else if (className[22] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '26'
} else if (className[22] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '27'
} else if (className[22] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = S4B
  document.querySelector('.S4B').innerHTML = ""
  document.querySelector('.S4B-rank').innerHTML = '28'
}



//For P1C
if (className[23] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '1'
} else if (className[23] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '2'
} else if (className[23] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '3'
} else if (className[23] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '4'
} else if (className[23] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '5'
} else if (className[23] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '6'
} else if (className[23] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '7'
} else if (className[23] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '8'
} else if (className[23] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '9'
} else if (className[23] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '11'
} else if (className[23] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '11'
} else if (className[23] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '12'
} else if (className[23] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '13'
} else if (className[23] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '14'
} else if (className[23] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '15'
} else if (className[23] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '16'
} else if (className[23] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '17'
} else if (className[23] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '18'
} else if (className[23] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '19'
} else if (className[23] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '20'
} else if (className[23] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '21'
} else if (className[23] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '22'
} else if (className[23] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '23'
} else if (className[23] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '24'
} else if (className[23] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '25'
} else if (className[23] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '26'
} else if (className[23] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '27'
} else if (className[23] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = JC1A
  document.querySelector('.JC1A').innerHTML = ""
  document.querySelector('.JC1A-rank').innerHTML = '28'
}



//For P1C
if (className[24] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '1'
} else if (className[24] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '2'
} else if (className[24] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '3'
} else if (className[24] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '4'
} else if (className[24] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '5'
} else if (className[24] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '6'
} else if (className[24] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '7'
} else if (className[24] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '8'
} else if (className[24] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '9'
} else if (className[24] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '11'
} else if (className[24] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '11'
} else if (className[24] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '12'
} else if (className[24] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '13'
} else if (className[24] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '14'
} else if (className[24] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '15'
} else if (className[24] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '16'
} else if (className[24] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '17'
} else if (className[24] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '18'
} else if (className[24] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '19'
} else if (className[24] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '20'
} else if (className[24] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '21'
} else if (className[24] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '22'
} else if (className[24] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '23'
} else if (className[24] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '24'
} else if (className[24] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '25'
} else if (className[24] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '26'
} else if (className[24] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '27'
} else if (className[24] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = JC1B
  document.querySelector('.JC1B').innerHTML = ""
  document.querySelector('.JC1B-rank').innerHTML = '28'
}



//For P1C
if (className[25] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '1'
} else if (className[25] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '2'
} else if (className[25] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '3'
} else if (className[25] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '4'
} else if (className[25] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '5'
} else if (className[25] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '6'
} else if (className[25] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '7'
} else if (className[25] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '8'
} else if (className[25] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '9'
} else if (className[25] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '11'
} else if (className[25] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '11'
} else if (className[25] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '12'
} else if (className[25] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '13'
} else if (className[25] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '14'
} else if (className[25] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '15'
} else if (className[25] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '16'
} else if (className[25] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '17'
} else if (className[25] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '18'
} else if (className[25] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '19'
} else if (className[25] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '20'
} else if (className[25] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '21'
} else if (className[25] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '22'
} else if (className[25] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '23'
} else if (className[25] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '24'
} else if (className[25] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '25'
} else if (className[25] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '26'
} else if (className[25] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '27'
} else if (className[25] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = JC2A
  document.querySelector('.JC2A').innerHTML = ""
  document.querySelector('.JC2A-rank').innerHTML = '28'
}



//For P1C
if (className[26] == positionedValues[0]) {
  document.querySelector('.first').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '1'
} else if (className[26] == positionedValues[1]) {
  document.querySelector('.second').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '2'
} else if (className[26] == positionedValues[2]) {
  document.querySelector('.third').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '3'
} else if (className[26] == positionedValues[3]) {
  document.querySelector('.fourth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '4'
} else if (className[26] == positionedValues[4]) {
  document.querySelector('.fifth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '5'
} else if (className[26] == positionedValues[5]) {
  document.querySelector('.sixth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '6'
} else if (className[26] == positionedValues[6]) {
  document.querySelector('.seventh').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '7'
} else if (className[26] == positionedValues[7]) {
  document.querySelector('.eigth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '8'
} else if (className[26] == positionedValues[8]) {
  document.querySelector('.ninth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '9'
} else if (className[26] == positionedValues[9]) {
  document.querySelector('.tenth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '11'
} else if (className[26] == positionedValues[10]) {
  document.querySelector('.eleventh').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '11'
} else if (className[26] == positionedValues[11]) {
  document.querySelector('.twelveth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '12'
} else if (className[26] == positionedValues[12]) {
  document.querySelector('.thirteenth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '13'
} else if (className[26] == positionedValues[13]) {
  document.querySelector('.fourteenth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '14'
} else if (className[26] == positionedValues[14]) {
  document.querySelector('.fifteenth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '15'
} else if (className[26] == positionedValues[15]) {
  document.querySelector('.sixteenth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '16'
} else if (className[26] == positionedValues[16]) {
  document.querySelector('.seventeenth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '17'
} else if (className[26] == positionedValues[17]) {
  document.querySelector('.eighteenth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '18'
} else if (className[26] == positionedValues[18]) {
  document.querySelector('.nineteenth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '19'
} else if (className[26] == positionedValues[19]) {
  document.querySelector('.twentyth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '20'
} else if (className[26] == positionedValues[20]) {
  document.querySelector('.twentyFirst').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '21'
} else if (className[26] == positionedValues[21]) {
  document.querySelector('.twentySecond').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '22'
} else if (className[26] == positionedValues[22]) {
  document.querySelector('.twentyThird').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '23'
} else if (className[26] == positionedValues[23]) {
  document.querySelector('.twentyFourth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '24'
} else if (className[26] == positionedValues[24]) {
  document.querySelector('.twentyFifth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '25'
} else if (className[26] == positionedValues[25]) {
  document.querySelector('.twentySixth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '26'
} else if (className[26] == positionedValues[26]) {
  document.querySelector('.twentySeventh').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '27'
} else if (className[26] == positionedValues[27]) {
  document.querySelector('.twentyEighth').innerHTML = JC2B
  document.querySelector('.JC2B').innerHTML = ""
  document.querySelector('.JC2B-rank').innerHTML = '28'
}