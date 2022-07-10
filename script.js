// Write your JavaScript code here!

const { formSubmission, myFetch, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilot]").value;
        let copilotName = document.querySelector("input[name=copilot]").value;
        let fuelLevel = docuement.querySelector("input[name=fuel]").value;
        let cargoMass = document.querySelector("input[name=cargo]").value;
        let list = document.getElementById("facultyItems");

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.stat;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, moons, imageUrl, distance);
    })

});