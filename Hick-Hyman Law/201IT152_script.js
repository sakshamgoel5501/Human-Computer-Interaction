var case1 = false;
var case2 = false;
var case3 = false;
var entropy = 0;
var actualReactionTime = 0
var start = 0;
var stop = 0;

function startTimer() {
    start = window.performance.now();
}

function stopTimer() {
    stop = window.performance.now();
    actualReactionTime = stop - start;
    actualReactionTime = actualReactionTime / 1000;
}

function clearTestCases() {
    document.getElementById("TestCases").innerHTML = "";
    var menuButton = document.getElementById("menu");
    menuButton.style.display = 'block';
}

function showMenu() {
    if(case1)
        showMenu1();
    else if(case2)
        showMenu2();
    else if(case3)
        showMenu3();
}

function showMenu1(){
    var m = document.getElementById("menu1");
    m.style.display = 'block';
}

function showMenu2(){
    var m = document.getElementById("menu2");
    m.style.display = 'block';
}

function showMenu3(){
    var m = document.getElementById("menu3");
    m.style.display = 'block';
}


function testCase1() {
    case1 = true;
    entropy = Math.log2(4) + Math.log2(3);
}

function testCase2() {
    case2 = true;
    entropy = Math.log2(4) + Math.log2(3);
}

function testCase3() {
    case3 = true;
    entropy = Math.log2(4) + Math.log2(3);
}

function results() {
    document.getElementById('footwear').style.display = 'none';
    document.getElementById('iconFootwear').style.display = 'none';
    document.getElementById('alphabetical').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('actualReactionTime').innerHTML = `Actual reaction time = ${actualReactionTime.toFixed(4)} sec`;
    document.getElementById('entropy').innerHTML = `Entropy (i.e., log2(n)) = ${entropy.toFixed(4)} sec`;
}




