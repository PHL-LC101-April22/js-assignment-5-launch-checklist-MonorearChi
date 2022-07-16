// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
         <li>Name: ${name} </li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star} </li>
        <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons: ${moons} </li>
        </ol>
        <img src = "${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return "Empty"
    } else if ((!isNaN(Number(testInput)))) {
        return "Is a Number"
    } else {
        return "Not a Number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = documents.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let cargoStatus = document.getElementById('cargoStatus');

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required")
    }
    //* make sure to check that fuelLevel and CargoLevel are numbers and pilot and co-pilot are strings *//
    else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please enter numerical values for Fuel Level and Cargo Mass");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Please do not enter numbers for name of pilot or co-pilot");
    }
    else {
        //* status of pilot and co-pilot *//
        pilotStatus.innerHTML = "Pilot ${pilot} is ready";
        copilotStatus.innerHTML = "Co-pilot ${copilot} is ready";
        list.style.visibility = "hidden";
    }
    //* check fuel levels and items *//
    if (Number(fuelLevel) < 10000) {
        fuelStatus.innerHTML = "Not enough fuel for journey";
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.styles.color = "red";
    } else if (Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = "Cargo too heavy for take off";
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Enough fuel for journey";
        cargoStatus.innerHTML = "Cargo light enough for take off";
        launchStatus.innerHTML = "Shuttle ready for launch";
        launchStatus.style.color = "green";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("httpa://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let idx = Math.floor(Math.random() * planets.length);
    return planets[idx];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

