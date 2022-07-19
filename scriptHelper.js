// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    /*
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: </li>
            <li>Diameter: </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: </li>
            <li>Number of Moons: </li>
        </ol>
        <image src=""> 
    */

    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML =
        `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <image src="">`; 
        
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById("pilotStatus").innerHTML = 'Pilot ${pilot.value} is ready for launch';

    document.getElementById("copilotStatus").innerHTML = 'Co-pilot ${copilot.value} is ready for launch';

    /*let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let cargoStatus = document.getElementById('cargoStatus'); */

    if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number" ) {
        alert("Enter valid infromation for each field!");
    } else if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too great for launch`;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        return "Error";
    } else if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        return "Error";
    } else if (cargoLevel.value > 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too great for launch`;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        return "Error";
    } else {
        list.style.visibility = "hidden";
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
    };
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("httpa://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let idx = Math.floor(Math.random()*planets.length);
    return planets[choice];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

