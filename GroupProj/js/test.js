 
function main() {
  GetValues();
} 

var early;
var ontime;
var late;

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
        options: {scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }} });
  
      console.log("early, ontime, late: " + early + " " + ontime + " " + late);
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
    options: {scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }} })
  
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
        "late": (late + l),
      }),
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

//$("#output").append(timeChart);


function getData(){
    var busrou = $("#route").val();
    console.log("Bus Route is: " + busrou);

    var bussto = $("#stop").val();
    console.log("Bus Stop Location is: " + bussto);
    
    var busarr = $("#arrive").val();
    console.log("Bus arrive status is: " + busarr);
    
    var busdata = [busrou, bussto, busarr];

    switch($("#arrive").val()){
        case "early":
            IncrementValues(1,0,0);
            break;
        case "ontime":
            IncrementValues(0,1,0);
            break;
        case "late":
            IncrementValues(0,0,1);
            break;
    }

    return busdata;
}

$("#party-toggle button").click(function(){
    if ($("body").hasClass("party")) {
      $("body").removeClass("party");  
    }
    else {
      $("body").addClass("party");
      $("body").append("Thank you for your input!");
      debugger;
    }
  })

$.ajax({
   url: "https://getpantry.cloud/apiv1/pantry/9532ecda-611e-4d74-4d74-ad60-0460-0460e26a6af4",

})

main();