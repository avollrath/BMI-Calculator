const image = document.getElementById('image-container');
let imageInner = document.querySelector('.image');
const weightField = document.getElementById('weightField');
const heightField = document.getElementById('heightField');
const checkbutton = document.getElementById('valuesSubmit');
const result = document.getElementById('result-box');
const textUnderweight = document.getElementById('underweight');
const textNormal = document.getElementById('normal');
const textOverweight = document.getElementById('overweight');
const textObese = document.getElementById('obese');
let bmi = 0;




function changeImage(bmi){

textUnderweight.style.fontSize = '0.7rem';
textUnderweight.style.textDecoration = 'none';

textNormal.style.fontSize = '0.7rem';
textNormal.style.textDecoration = 'none';

textOverweight.style.fontSize = '0.7rem';
textOverweight.style.textDecoration = 'none';

textObese.style.fontSize = '0.7rem';
textObese.style.textDecoration = 'none';
   

if (bmi < 18.5) {    
image.innerHTML = '<img class="image" src="./assets/images/underweight.jpg">';
result.style.backgroundColor = '#7790ba';
result.innerHTML = 'Your BMI is ' + bmi + '. You are underweight.';
textUnderweight.style.fontSize = '0.8rem';
textUnderweight.style.textDecoration = 'underline';
}

else if (bmi >= 18.5 && bmi < 25) {    
    image.innerHTML = '<img class="image" src="./assets/images/normal.jpg">';
    result.style.backgroundColor = '#4cb55b';
    result.innerHTML = 'Your BMI is ' + bmi +'. You are normal weight.';
    textNormal.style.fontSize = '0.8rem';
    textNormal.style.textDecoration = 'underline';
    }

else if (bmi >= 25 && bmi < 30) {    
    image.innerHTML = '<img class="image" src="./assets/images/overweight.jpg">';
    result.style.backgroundColor = '#4983a0';
    result.innerHTML = 'Your BMI is ' + bmi +'. You are overweight.';
    textOverweight.style.fontSize = '0.8rem';
    textOverweight.style.textDecoration = 'underline';
    }

else {
   
    image.innerHTML = '<img class="image" src="./assets/images/obese.jpg">';
    result.style.backgroundColor = '#b24040';
    result.innerHTML = 'Your BMI is ' + bmi +'. You are obese.';
    textObese.style.fontSize = '0.8rem';
    textObese.style.textDecoration = 'underline';

 }

result.style.visibility = "visible";
result.style.opacity = '1';


}





function calcBmi(){

let height = Number(heightField.value);    
let weight = Number(weightField.value);

bmi = weight / Math.pow(height, 2);

bmi = bmi.toFixed(2);
bmi = Number(bmi);


changeImage(bmi);

}



checkbutton.addEventListener("click", calcBmi);


