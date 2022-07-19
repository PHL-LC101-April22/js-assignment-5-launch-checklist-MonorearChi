// Write your JavaScript code here!


const { formSubmission, myFetch, addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load" , function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        //event.preventDefault(); 

        let pilot= document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = docuement.querySelector("input[name=fuel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("facultyItems");
        const launchStatus = document.getElementById("launchStatus");

        if (pilot.value ==="" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else {
            if (formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) === "Error") {
                event.preventDefault();
            } else { 
                launchStatus.innerHTML = "Shuttle is ready for launch";
                launchStatus.style.color = "green";
                event.preventDefault();
            };      
            
        };
        //formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        
        let planetChoice = pickPlanet(listedPlanets);
        console.log(planetChoice);
        addDestinationInfo(document, planetChoice.name, planetChoice.diameter, planetChoice.star, planetChoice.distance, planetChoice.moons, planetChoice.image);

    });


        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       /* let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.stat;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, moons, imageUrl, distance); */
    });

