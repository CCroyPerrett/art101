// index.js - purpose and description here
// Author: Chase Croy-Perrett and Joey Long
// Date: 17th of November, 2023
// A simple script that gets an input field and
// outputs a modified version.

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

$("#submit").click( function display(){
  var name = $("#user-name").val();
  //running the sortname function to alphabetically sort the input
  var sortedName = sortname(name)
  //appending the sorted name to the output
  $("#output").append('<div class="text"><p>' + sortedName + '</p></div>')
});

$("#anagram").click( function display(){
  var name = $("#user-anagram").val();
  //running the sortname function to alphabetically sort the input
  var anagrams = anagram(name)
  //appending the sorted name to the output
  var outputstr = "";
  for(i = 0; i < anagrams.length -1; i++){
   outputstr = outputstr + anagrams[i] + ", ";
  }
  outputstr = outputstr + anagrams[anagrams.length -1]
  $("#output2").html(outputstr);
});


function sortname(userName) {
  //making the name lowercase so it sorts properly
  var userName = userName.toLowerCase();
  console.log("userName =", userName);
  //splitting the name into an array then printing
  var splitArray = userName.split('');
  console.log("splitArray =", splitArray);
  //sorting the array then printing
  var sortedArray = splitArray.sort();
  console.log("sortedArray =", sortedArray);
  //turn the array back into a string then printing
  var sortedName = sortedArray.join('');
  console.log("sortedName =", sortedName);
  //return the sorted name 
  return sortedName;
  //code taken from Wes Modes
}

function anagram(userName){
  var anagrams = []; //array containing different anagrams
  var validarr = [];
  
  console.log("started anagrams");

  for(var j = 0; j < userName.length; j++){ 
    validarr.push(0); //validarray represents what letters have/havent yet been used
  }   
  
  //starts looking for anagram combos
  for(var i = 0; i < userName.length; i++){
  
    newvalidarr = validarr;
    newvalidarr[i] = 1;
    var letter = userName[i];
    var newanagrams = split(userName, letter, newvalidarr);
    
    //appends generated anagrams to array
    for(j = 0; j < newanagrams.length; j++){
      anagrams.push(newanagrams[j]);
      console.log("found anagram" + newanagrams[j]);
    }

    validarr[i] = 0;
  }
  
  console.log("finished anagrams: " + anagrams);
  return anagrams;
}

function split(userName, anagram, validarray){
  console.log("Starting anagrams with anagram: " + anagram + " with valid array " + validarray);

  
  var newanagrams = [];
  var full = true;
  //checks if there is yet any unused letters
  for(var i = 0; i < validarray.length; i++){
    if(validarray[i] == 0) //if one if found,construct an anagram with it
    {
      full = false;
      //updates valid array with letter we are about to use
      var newvalidarray = validarray;
      newvalidarray[i] = 1;

      //gets next step in the anagram
      newanagram = anagram + userName[i];

      //finds anagram steps after this one
      var newanagramforms = split(userName, newanagram, newvalidarray);

      //appends new anagram forms to array to return
      for(var j = 0; j < newanagramforms.length; j++){ 
        newanagrams.push(newanagramforms[j]);
      }
      newvalidarray[i] = 0;
    }
  }

  if(full){
    console.log("anagram is full");
    return [anagram];
  }

  return newanagrams;
}

// let's get this party started
main();
