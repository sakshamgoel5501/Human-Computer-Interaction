prevXCentre = window.innerWidth / 2;
prevYCentre = window.innerHeight / 2;
var time = [];
var W = [];
var A = [];
var circleNumber = 0;
var numCircles = 30;
var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'brown'];
var lastClicked = 0;

function clearHeading() {
    document.getElementById("Heading").innerHTML = "";
}

function calculateTime() {
    var timeNow = window.performance.now();
    var timeTaken = timeNow - lastClicked;
    time[circleNumber-1] = timeTaken / 1000;
    lastClicked = timeNow;
}

function startTimer() {
    lastClicked = window.performance.now();
}

function createCircle() {
    //var start = window.performance.now();

    // xCentre = (window.innerWidth * (1/8)) + Math.random() * (window.innerWidth * (6/8));
    // yCentre = (window.innerHeight * (1/8)) + Math.random() * (window.innerHeight * (6/8));

    xCentre = 120 + (Math.random() * 800);
    yCentre = 120 + (Math.random() * 150);

    distance = Math.sqrt( Math.pow(Math.abs(xCentre-prevXCentre), 2) + Math.pow(Math.abs(yCentre-prevYCentre), 2) );
    
    // smallerRemainingX = Math.min(xCentre, window.innerWidth-xCentre);
    // smallerRemainingY = Math.min(yCentre, window.innerHeight-yCentre);
    
    // maxPossibleRadius = Math.min(smallerRemainingX, smallerRemainingY);
    // radius = Math.random() * maxPossibleRadius;

    radius = 10 + (Math.random() * 100);

    W[circleNumber] = 2*radius;
    A[circleNumber] = distance;
    
    prevXCentre = xCentre;
    prevYCentre = yCentre;

    // Draw Circle
    var round = document.getElementById('circle');
    round.innerHTML = "";
    round.style.width = `${2*radius}px`;
    round.style.height = `${2*radius}px`;
    var color = Math.floor((Math.random() * 100)) % 7;
    round.style.backgroundColor = colors[color];
    round.style.marginLeft = `${xCentre}px`;
    round.style.marginTop = `${yCentre}px`;
    
    //var end = window.performance.now();
    
    //var timeTaken = end - start;
    //time[circleNumber] = timeTaken;
    
    circleNumber++;
    if(circleNumber == numCircles+1){
        round.style.display = 'none';
        createTable();
        drawGraph();
    }
}

function createTable() {
    const results = document.querySelector('.results');
    results.style.display = 'block';
    const infoTableBody = document.getElementById('info-table-body');
    const container = document.querySelector('.container');
    container.style.display = 'block';
    
    for (let i=0 ; i<numCircles ; i++) {
        let row = document.createElement('tr');
        let cell1 = document.createElement('th');
        let cell2 = document.createElement('td');
        let cell3 = document.createElement('td');
        let cell4 = document.createElement('td');
        cell1.innerHTML = i + 1;
        cell1.scope = 'row';
        cell2.innerHTML = time[i].toFixed(6);
        cell3.innerHTML = A[i].toFixed(2);
        cell4.innerHTML = W[i].toFixed(2);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        infoTableBody.appendChild(row);
    }
}

function drawGraph() {
    const infoGraph = document.getElementById('info-graph');
    let dataset = [];
    W.forEach((d, i) => {
    dataset.push({
        x: d,
        y: time[i],
    });
    });
    graph = new Chart(infoGraph, {
    type: 'scatter',
    data: {
        datasets: [
        {
            label: 'Diameter vs Time',
            data: dataset,
            backgroundColor: 'rgb(255, 99, 132)',
        },
        ],
    },
    });
}


