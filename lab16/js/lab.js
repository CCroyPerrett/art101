// AJAX & JSON
// Author: Joey Longo & Chase Croy-Perrett
// Date: 4 Dec 2023

// Using the core $.ajax() method
function getComic(){
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://xkcd.com/info.0.json",
  // The data to send (will be converted to a query string)
  data: {},
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log("Data is: " + data);
      console.log("Title is: " + data.title);
      console.log("Img is: " + data.img);
      console.log("Alt is: " + data.alt);
      
      var comicObj = data;
      
      var comicstring = "";
      var title = comicstring + "<h1>" + comicObj.title + "</h1>";
      console.log("comicstring is : " + comicstring)
      var img = comicstring + "<img src='" + comicObj.img + " ' alt='" + comicObj.alt + "' > ";
      console.log("comicstring is : " + comicstring)
      var alttxt = comicstring + "<p>" + comicObj.alt + "</p>";

      $("#output").append(title);
      $("#output").append(img);
      $("#output").append(alttxt);
      console.log("comicstring is : " + comicstring);

      
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})
}

function main() {
  console.log("Main function started.");
  getComic();
  // the code that makes everything happen
}

// let's get this party started
main();
