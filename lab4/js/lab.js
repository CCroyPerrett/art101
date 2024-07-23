// index.js - purpose and description here
// Author: Chase Croy-Perrett and Joe
// Date: 23rd of October, 2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  GetValues();
}

function GetValues(){
  
  //gets values
  var settings = {
    "url": "https://getpantry.cloud/apiv1/pantry/51f361dd-ba2d-411b-aaf1-61b2ecb6064b/basket/bus",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    early = response.early;
    ontime = response.ontime;
    late = response.late;

    timeChart = new Chart( "timeChart", {
      type: "bar",
      data: {
          labels: ["Early","OnTime","Late"],
          datasets: [{
          backgroundColor: ["red", "green","blue"],
              //data: [Math.floor(Math.random() * 30), Math.floor(Math.random() * 40), Math.floor(Math.random() * 50)]
              data: [early, ontime, late]
          }]
      },
      options: {} });

    console.log("early, ontime, late: " + early + " " + ontime + " " + late);
  });

}

function IncrementValues(e, o, l){
  
  console.log("json stringify is: " + JSON.stringify({
    "early": (early + e),
    "ontime": (ontime + o), 
    "late": (late + l)}));

  //updates values
  var settings = {
    "url": "https://getpantry.cloud/apiv1/pantry/51f361dd-ba2d-411b-aaf1-61b2ecb6064b/basket/bus",
    "method": "PUT",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "early": (early + e),
      "ontime": (ontime + o), 
      "late": (late + l)
    }),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

// let's get this party started
main();

function AddEntries(){

  var settings = {
    "url": "https://getpantry.cloud/apiv1/pantry/51f361dd-ba2d-411b-aaf1-61b2ecb6064b/basket/bus",
    "method": "PUT",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "early": 1,
      "ontime": 1,
      "late": 1,
    }),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

var timeChart = new Chart( "timeChart", {
  type: "bar",
  data: {
      labels: ["Early","OnTime","Late"],
      datasets: [{
      backgroundColor: ["red", "green","blue"],
          //data: [Math.floor(Math.random() * 30), Math.floor(Math.random() * 40), Math.floor(Math.random() * 50)]
          data: [early, ontime, late]
      }]
  },
  options: {} });

  main();
