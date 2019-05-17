
function tipCalculator(val){
let percent;
    if(val <= 50){
      percent = .2;
    } 
    else if(val >= 50 && val <=200){
        percent = .15;
    }

    else if(val >= 200){
      percent = .1;
    }
 
    return percent * val;

}

// call tipCalculator
console.log(tipCalculator(100));
let bills = [124,48,268];
let tip = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

let finalValues = [
    bills[0] + tip[0],
    bills[1] + tip[1],
    bills[2] + tip[2],

]
console.log('tips --->',tip + 'values --->',finalValues);
