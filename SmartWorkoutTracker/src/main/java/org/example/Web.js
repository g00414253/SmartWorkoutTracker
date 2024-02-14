//Displays all the main Info
function ShowInfo(){
    document.getElementById('MainContent')
        .style.display = "block";

    document.getElementById('WeightCalculator')
        .style.display = "none";
    document.getElementById('1Rm')
        .style.display = "none";
    document.getElementById('Brm')
        .style.display = "none";
    document.getElementById('BodyFatCal')
        .style.display = "none";
    document.getElementById('Macro')
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
    document.getElementById('Brm')
        .style.display = "none";
    document.getElementById('BodyFatCal')
        .style.display = "none";
    document.getElementById('Macro')
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
    document.getElementById('Brm')
        .style.display = "none";
    document.getElementById('BodyFatCal')
        .style.display = "none";
    document.getElementById('Macro')
        .style.display = "none";
}

function ShowBrm(){
    document.getElementById('Brm')
        .style.display = "block";

    document.getElementById('MainContent')
        .style.display = "none";
    document.getElementById('WeightCalculator')
        .style.display = "none";
    document.getElementById('1Rm')
        .style.display = "none";
    document.getElementById('BodyFatCal')
        .style.display = "none";
    document.getElementById('Macro')
        .style.display = "none";
}

function ShowBodyFatCal(){
    document.getElementById('BodyFatCal')
        .style.display = "block";

    document.getElementById('MainContent')
        .style.display = "none";
    document.getElementById('WeightCalculator')
        .style.display = "none";
    document.getElementById('Brm')
        .style.display = "none";
    document.getElementById('1Rm')
        .style.display = "none";
    document.getElementById('Macro')
        .style.display = "none";
}

function ShowMacro(){
    document.getElementById('Macro')
        .style.display = "block";

    document.getElementById('MainContent')
        .style.display = "none";
    document.getElementById('WeightCalculator')
        .style.display = "none";
    document.getElementById('Brm')
        .style.display = "none";
    document.getElementById('BodyFatCal')
        .style.display = "none";
    document.getElementById('1Rm')
        .style.display = "none";
}

function calculate1RepMax() {
    // Add your JavaScript logic here to calculate the 1 Rep Max
    const weight = document.getElementById('Weight').value;
    const reps = document.getElementById('Reps').value;

    // Add your calculation logic and display the result
    let oneRepMax =  (100 * weight ) / (101.3 - 2.67123 * reps);

//Needed to display 1rm graph
    google.charts.load('current',{packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);

   return  document.getElementById('result').textContent = 'Your estimated 1 Rep Max is: ' + oneRepMax.toFixed(2);
}


function drawChart() {
     let weight = document.getElementById('Weight').value;
     let reps = document.getElementById('Reps').value;

    // Add your calculation logic and display the result
    let result =  (100 * weight ) / (101.3 - 2.67123 * reps);

// Set Data
    const data = google.visualization.arrayToDataTable([
        ['Reps', 'Weight(Kg)'],
        [result/(1+0.0333*15),15],[result/(1+0.0333*14),14],[result/(1+0.0333*13),13],[result/(1+0.0333*12),12],
        [result/(1+0.0333*11),11],[result/(1+0.0333*10),10],[result/(1+0.0333*9),9],[result/(1+0.0333*8),8],[result/(1+0.0333*7),7],
        [result/(1+0.0333*6),6],[result/(1+0.0333*5),5],[result/(1+0.0333*4),4],
        [result/(1+0.0333*3),3],[result/(1+0.0333*2),2],[result/(1),1]
    ]);

// Set Options
    const options = {
        title: 'Weight vs Reps',
        hAxis: {title: 'Weight (Kg)'},
        vAxis: {title: 'Repetitions'},
        legend: 'none'
    };

// Draw
    const chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
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

//Function for Macros
function CalMacro(){
    let Diet =document.getElementById('Diet').value;

    //Reads in Macro values so that  they can be read and altered
    let Protein = document.getElementById('myProtein');
    let Fats = document.getElementById('myFats')
    let Carbs = document.getElementById('myCarbs')

    //Switch statements for different diets
    switch (Diet){
        case 'HighCarb':
            Carbs.value =60
            Protein.value=25
            Fats.value=15
            break;
        case 'ModerateCarb':
            Carbs.value =50
            Protein.value=30
            Fats.value=20
            break;
        case 'ZoneDiet':
            Carbs.value =40
            Protein.value=30
            Fats.value=30
            break;
        case 'LowCarb':
            Carbs.value =25
            Protein.value=35
            Fats.value=40
            break;
        case 'KetoDiet':
            Carbs.value =5
            Protein.value=30
            Fats.value=60
            break;
        case 'Custom':
            Carbs=document.getElementById('myCarbs')
            Protein=document.getElementById('myProtein')
            Fats=document.getElementById('myFats')
            break;
        default:
            break;
    }

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawPie);
}

function drawPie() {
    // Get the values for Protein, Carbs, and Fats
    let Protein = parseFloat(document.getElementById('myProtein').value);
    let Carbs = parseFloat(document.getElementById('myCarbs').value);
    let Fats = parseFloat(document.getElementById('myFats').value);

    // Create the data table
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Macro');
    data.addColumn('number', 'Breakdown');

    // Add data rows
    data.addRows([
        ['Protein', Protein],
        ['Carbs', Carbs],
        ['Fats', Fats],
    ]);

    // Optional; add a title and set the width and height of the chart
    let options = {
        'title': 'Breakdown of ' + document.getElementById('Calories').value + ' calories',
        'width': 350,
        'height': 250
    };

    //calls nutri function
    CalcNutri()

    // Display the chart inside the <div> element with id="piechart"
    let chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

function CalcNutri(){
    let TotalCal=document.getElementById('Calories').value

    let ProteinRatio =document.getElementById('myProtein').value
    let CarbRatio=document.getElementById('myCarbs').value
    let FatRatio=document.getElementById('myFats').value

    let ProteinCals=TotalCal * (ProteinRatio/100)
    let CarbCals=TotalCal * (CarbRatio/100)
    let FatCals=TotalCal * (FatRatio/100)

    let ProteinGram = ProteinCals/4
    let CarbGram = CarbCals/4
    let FatGram =FatCals/9

    return document.getElementById('Breakdown').textContent="A break down of your Macros\nProtein has a total of " + ProteinCals.toFixed(2) + " Calories which is a total of " + ProteinGram.toFixed(2) +" Grams\n Carbs has a total of " + CarbCals.toFixed(2) + " Calories which is a total of " + CarbGram.toFixed(2) +"Grams\nFats have a total of " + FatCals.toFixed(2) + " Calories which is a total of " + FatGram.toFixed(2) +"Grams\n"
}
