console.log("test");

const firstChart = document.querySelector(".firstChart");
const SecondChart = document.querySelector(".SecondChart");
const thirdChart = document.querySelector(".thirdChart");
const hottestWeather = document.querySelector(".hottestWeather");
const averageWeather = document.querySelector(".averageWeather");
//hier heb ik de data out gehald met behulp van fetch
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
  .then(response => response.json())
  .then(myDataJson => {
    chartBuilding(myDataJson);
  })


function chartBuilding(myDataJson) {
  console.log(myDataJson);
  console.log(myDataJson.current_weather);
  console.log(myDataJson.current_weather.temperature);
  console.log(myDataJson.hourly.temperature_2m);
//hier zijn keluren van de temparatuur als het warmer is dan gaat de kleuren veranderen
  const colors = [];

  for (let i = 0; i < myDataJson.hourly.temperature_2m.length; i++) {
    const temperature = myDataJson.hourly.temperature_2m[i];

    if (temperature >= 25) {
      colors.push("red");
    } else if (temperature >= 20) {
      colors.push("orange");
    } else {
      colors.push("blue");
    }
  }

  createChart(firstChart, myDataJson.hourly.time, myDataJson.hourly.temperature_2m, "bar", "temperature is", colors);
  createChart(SecondChart, myDataJson.hourly.time, myDataJson.hourly.relativehumidity_2m, "line", "humidity is");
  createChart(thirdChart, myDataJson.hourly.time, myDataJson.hourly.windspeed_10m, "bar", "windspeed is");

  console.log(getBiggestNumber(myDataJson.hourly.temperature_2m));
}

console.log("here");
// hier is een functie waarmee wordt het grootste nummer bereikend
function getBiggestNumber(temperatureArray) {
  let biggestNumber = 0;

  for (let i = 0; i < temperatureArray.length; i++) {
    const currentNumber = temperatureArray[i];
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  }
  return biggestNumber;
}
// hier is de chart functie is uit chart.js gehaald
function createChart(chart, labels, data, type, label, colors) {
  new Chart(chart, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        borderColor: colors,
        label: label,
        data: data,
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}