console.log("loaded");
// Selecteer de DOM-elementen voor de grafieken
const myChart = document.querySelector(".myChart");
const mySecondChart = document.querySelector(".mySecondChart");
const highestNumberElement= document.querySelector(".highest-number");
const totalElement = document.querySelector(".totaal");
const smallestNumberElement = document.querySelector(".totaal-small");

// Haal gegevens op van een API
fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
.then(myData => myData.json())
.then(myJsonData => genarteCharts(myJsonData));


// Functie om de grafieken te genereren op basis van de verkregen gegevens
function genarteCharts(myJsonData) {
    const mylabels= [];
    const myData= [];
    console.log(myJsonData.eur);

     // Doorloop de verkregen gegevens en voeg gegevens toe aan de arrays
    for(key in myJsonData.eur){
      // De functie doorloopt de verkregen gegevens en controleert of een waarde groter is dan 800. Als dat het geval is, wordt de sleut
        if(myJsonData.eur[key] >800){
        mylabels.push(key);
        console.log(key + " " + myJsonData.eur[key]);
        myData.push(myJsonData.eur[key])
    }
    }
     // Genereer de grafieken met behulp van de createChart-functie
    createChart(mySecondChart, "pie",mylabels, myData);
    createChart(myChart, "line", mylabels, myData);
      // Vind het grootste getal in de array
    const highestNumber = getBiggestNumber(myData);
    const fixedNumber = highestNumber.toFixed(2);
    highestNumberElement.textContent = fixedNumber;
    console.log("heighestNumber :",fixedNumber);
    //vind het totaal getal in de array
    const total = berekenTotaal(myData);
    totalElement.textContent = total;

  const small = getSmallestNumber(myData);

  smallestNumberElement.textContent = small;
    console.log("kleinste getall :",small);
}


// Functie om een grafiek te maken met behulp van Chart.js
function createChart(canvas, type, labels, data) {
new Chart(canvas, {
    type: type,
    data: {
      labels:labels,
      datasets: [{
        label: '# of Votes',
        data:data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
};


// Functie om het grootste getal in een array te vinden
function getBiggestNumber(numbersArray) {

  let biggestNumber = 0;

  for(let i = 0; i < numbersArray.length; i++) {
    const currentNumber = numbersArray[i];
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  }
  return biggestNumber;
};
// klein getal
function getSmallestNumber(small) {
  let smallestNumber = 0;
  for (let i = 0; i < small.length; i++) {
    const currentNumber = small[i];
    if (currentNumber < smallestNumber) {
        smallestNumber = currentNumber;
    }
    return smallestNumber;
  }
}

//totaal function

function berekenTotaal(getallen) {
  let totaal = 0;
  for (let i = 0; i < getallen.length; i++) {
    totaal += getallen[i];
  }
  return totaal;
}

// let getallenArray = [1, 2, 3, 4, 5];
// let resultaat = berekenTotaal(getallenArray);
// console.log("Het totaal is:", resultaat);





const signOut =document.querySelector(".sign-out");



     signOut.addEventListener("click",function(){
        // window.localStorage.removeItem('password');
        window.localStorage.clear();
        window.location.href = "inlog.html";
    
     });