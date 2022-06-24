// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilot]");
        let coPilotName = document.querySelector("input[name=coPilot]");
        let fuelLevel = docuement.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargo]");
        if (pilotName.value === "" && coPilotName.value === "" || fuelLevel.value === "" && cargoMass.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }
    });
});

function validateInput(testInput) {

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput().validateInput = validateInput().validateInput + "Empty", "Not a Number" || "Is a Number";
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

console.log(validateInput().validateInput);
