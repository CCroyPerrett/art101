// AJAX
// Author: Joey Longo & Chase Croy-Perrett
// Date: 1 Dec 2023


function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

function getBerryInfo(){
  console.log("Got berry Info!");
  $("#output").after(doajax())
}

function doajax(){
// Using the core $.ajax() method
  var berrynum = Math.floor(Math.random() * 18);
  if(berrynum == 0){
    berrynum += 1;
  }
  var berrymsg = "";
var berryData = $.ajax({
  // The URL for the request (from the api docs)
  //https://pokeapi.co/api/v2/berry/{id or name}/
  url: "https://pokeapi.co/api/v2/berry/" + berrynum+ "/",
  // The data to send (will be converted to a query string)
  data: { 
          // here is where any data required by the api 
          //   goes (check the api docs)
          //id: 123,
          //api_key: "blahblahblah",
  },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log("the selected berry numer is : " + berrynum); 
      console.log("the selected berry is : " + data.name);
      berrymsg = berrymsg + "Your randomly selected Pokemon berry is the " + data.name + " berry!";

      berrymsg = berryImg(berrymsg, data.name)
      $("#berrydata").html(berrymsg);
      console.log("berrymsg is: " + berrymsg);
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("the selected berry number is : " + berrynum); 
      console.log("the selected berry is : " + data.name);
      console.log("Error: That Isn't a real type of berry!", textStatus, errorThrown);
  }
})

  return berryData;
}

function doajax2(id){
  ENDPOINT = "https://pokeapi.co/api/v2/pokemon/" + id + "/"
  console.log(ENDPOINT)
  $.ajax({
      url: ENDPOINT,
      data: {
      },
      type: "GET",
      dataType: "json",
      success: function(data){
          console.log(data)
          pokemon = data.name;
          pokemon = pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
          if(id >= 100){
            pokemon = pokemon + "<br><img src = '" + "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png'>"
          }
          else if(id >= 10){
            pokemon = pokemon + "<br><img src = '" + "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0" + id + ".png'>"
          }
          else{
            pokemon = pokemon + "<br><img src = '" + "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00" + id + ".png'>"
          }
          $("#output2").html(pokemon)
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
      }
    })
  
}

$("#my-button").click(function(){
  var id = Math.floor(Math.random() * (1017 - 1))+ 1; 
  var text = doajax2(id)
  $("#output2").html(text);
})


function berryImg(msg, name){
  msg = msg + "<img src = '";
  console.log("Finding berryImg for: " + name );
  switch(name){
    case("cheri"):
      console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/a/a6/Dream_Cheri_Berry_Sprite.png";
      break;
    case("chesto"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/7/7e/Dream_Chesto_Berry_Sprite.png";
      break;
    case("pecha"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/6/62/Dream_Pecha_Berry_Sprite.png";
      break;
    case("rawst"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/5/59/Dream_Rawst_Berry_Sprite.png";
      break;
    case("aspear"):
      console.log("got into switch");
      msg = msg + "https://ahost2.bulbagarden.net/content/bulbagarden/images/bg-green-2x-optim.png";
      break;
    case("leppa"):
      console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/e/e2/Dream_Leppa_Berry_Sprite.png";
      break;
    case("oran"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/0/0c/Dream_Oran_Berry_Sprite.png";
      break;
    case("persim"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/3/38/Dream_Persim_Berry_Sprite.png";
      break;
    case("lum"):
      console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/d/d3/Dream_Lum_Berry_Sprite.png";
      break;
    case("sitrus"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/thumb/a/aa/Dream_Sitrus_Berry_Sprite.png/84px-Dream_Sitrus_Berry_Sprite.png";
      break;
    case("figy"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/thumb/5/55/Dream_Figy_Berry_Sprite.png/86px-Dream_Figy_Berry_Sprite.png";
      break;
    case("wiki"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/thumb/b/bc/Dream_Wiki_Berry_Sprite.png/102px-Dream_Wiki_Berry_Sprite.png";
      break;
    case("mago"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/thumb/a/ad/Dream_Mago_Berry_Sprite.png/101px-Dream_Mago_Berry_Sprite.png";
      break;
    case("aguav"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/thumb/d/d6/Dream_Aguav_Berry_Sprite.png/81px-Dream_Aguav_Berry_Sprite.png";
      break;
    case("iapapa"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/thumb/d/d2/Dream_Iapapa_Berry_Sprite.png/85px-Dream_Iapapa_Berry_Sprite.png";
      break;
    case("razz"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/3/32/Dream_Razz_Berry_Sprite.png";
      break;
    case("bluk"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/f/f0/Dream_Bluk_Berry_Sprite.png";
      break;
    case("nanab"):
    console.log("got into switch");
      msg = msg + "https://archives.bulbagarden.net/media/upload/3/32/Dream_Nanab_Berry_Sprite.png";
      break;
  }
  msg = msg + "'" +  ">";
  return msg;
}