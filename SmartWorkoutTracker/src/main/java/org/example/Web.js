//Displays all the main Info
function ShowInfo(){
    document.getElementById('MainContent')
        .style.display = "block";

    document.getElementById('WeightCalculator')
        .style.display = "none";
    document.getElementById('1Rm')
        .style.display = "none";
}

//Displays a weight calculator App
function ShowWeight(){
    document.getElementById('WeightCalculator')
        .style.display = "block";

    document.getElementById('MainContent')
        .style.display = "none";
    document.getElementById('1Rm')
        .style.display = "none";
}

//Displays a 1Rm App
function Show1Rm(){
    document.getElementById('1Rm')
        .style.display = "block";

    document.getElementById('MainContent')
        .style.display = "none";
    document.getElementById('WeightCalculator')
        .style.display = "none";
}

function calculate1RepMax() {
    // Add your JavaScript logic here to calculate the 1 Rep Max
    const weight = document.getElementById('Weight').value;
    const reps = document.getElementById('Reps').value;

    // Add your calculation logic and display the result
    let oneRepMax =  (100 * weight ) / (101.3 - 2.67123 * reps);
   return  document.getElementById('result').textContent = 'Your estimated 1 Rep Max is: ' + oneRepMax.toFixed(2);
}

function calculateLoaded(){
    document.getElementById('Loaded')
        .style.display = "block";

    document.getElementById('Plates')
        .style.display = "none";

    const red = document.getElementById('25kg').value;
    const blue = document.getElementById('20kg').value;
    const yellow = document.getElementById('15kg').value;
    const green = document.getElementById('10kg').value;
    const redSmall = document.getElementById('5kg').value;
    const blueSmall = document.getElementById('2.5kg').value;
    const black = document.getElementById('1.25kg').value;

    let WeightLoad = ((red * 25) * 2) + ((blue * 20) * 2) + ((yellow * 15) * 2) + ((green * 10) * 2) + ((redSmall * 5) * 2) + ((blueSmall * 2.5) * 2) + ((black * 1.25) * 2) + 20;

    return  document.getElementById('resultWeight').textContent = 'The bar is loaded with : ' + WeightLoad.toFixed(2);
}

function calculatePlates(){
    document.getElementById('Plates')
        .style.display = "block";

    document.getElementById('Loaded')
        .style.display = "none";

    let WeightIn = document.getElementById('WeightIn').value;
    let red=0,blue=0,yellow=0,green=0,smallRed=0,smallBlue=0,black=0;

    WeightIn-=20;

    while (WeightIn >= 50) {
        red++;
        WeightIn -= 50;
    }
    while (WeightIn >= 40) {
        blue++;
        WeightIn -= 40;
    }
    while (WeightIn >= 30) {
        yellow++;
        WeightIn -= 30;
    }
    while (WeightIn >= 20) {
        green++;
        WeightIn -= 20;
    }
    while (WeightIn >= 10) {
        smallRed++;
        WeightIn -= 10;
    }
    while (WeightIn >= 5) {
        smallBlue++;
        WeightIn -= 5;
    }
    while (WeightIn >= 2.5) {
        black++;
        WeightIn -= 2.5;
    }

    return document.getElementById('WeightLoad').textContent = 'On each side load the bar with : \n25kg:' + red + "\n20kg:" + blue + "\n15kg:" + yellow + "\n10kg:" + green + "\n5kg:" + smallRed + "\n2.5kg:" + smallBlue + "\n1.25kg:" + black;
}
