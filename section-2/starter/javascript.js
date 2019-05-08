// coding challenge 1 //

// BMI(Body mass index) 

let name = prompt('what is your name ?');
let checked;
let height = 1.83;
let mass = 75;

let bmi = mass / (height * height);
console.log('bmi -->',bmi);


if(name === 'john'){
    checked = true;
    console.log('john bmi is: ',bmi);
    if(checked == true){
        window.alert('is ' + name + ' highter then mark? ' + checked)
    }

}
else {
    checked = false;
    console.log('makr bmi is: ',bmi);
    window.alert('is ' + name + ' highter then mark? ' + checked)
}


