'use strict';

var markBMI = Math.round(78 / (1.69 ** 2));
var johnBMI = Math.round(95 / (1.95 ** 2));
console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's!`);

    console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI is higher than Mark's!`);

    console.log(`John's BMI(${johnBMI}) is higher than Mark's (${markBMI})`);
}
