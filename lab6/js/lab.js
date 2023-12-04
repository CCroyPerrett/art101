// AJAX
// Author: Joey Longo & Chase Croy-Perrett
// Date: 1 Dec 2023

$.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/{id or name}/",
  data: {
      
  },
  type: "GET",
  dataType: "json",
  success: function(data){
      console.log(data)
  },
  error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
  }
})

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
