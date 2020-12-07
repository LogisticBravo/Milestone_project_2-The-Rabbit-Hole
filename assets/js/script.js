/* *** FOR DEBUG ON CLICK ***
* var clicked = false
* document.getElementById("yes").addEventListener("click",function(){clicked = true});
*/

/* *** ORIGINAL TYPEWRITER CODE FROM W3 SCHOOLS - BASE FOR TYPEWRITE CODE ***
*   function typeWriter() {
*        if (i < txt.length) {
*       document.getElementById("main-content").innerHTML += txt.charAt(i);
*       i++;
*       setTimeout(typeWriter, 70);
*  }
* }
*/

function typeWriter(txt, i, divId) {
  if (i < (txt.length)) {
    $('#' + divId).html(txt.substring(0, i+1));
    i++;
    setTimeout(function() {
      typeWriter(txt, i, divId)
    }, 70);
  };
};

window.onload = setTimeout(function(){
  var txt = $("#main-content").data("text");
  typeWriter(txt, 0, "main-content");
},5000);

var button = document.getElementById("yes"),
  count = 0;
button.onclick = function() {
  count += 1;
  if (count === 1){
  $("#main-content").empty();
    var txt = $("#second").data("text");
    typeWriter(txt, 0, "second");
  $("#yes").removeClass("show").addClass("hide");
  $("#no").removeClass("show").addClass("hide");
  $("#confirm").removeClass("hide").addClass("show");
  $("#reset").removeClass("hide").addClass("show");
  setTimeout(function(){$("span#second").append('<input type="text" id="name" name="name">');},1500);
  setTimeout(function(){$(".pixel").removeClass("pixel")},1500);
  setTimeout(function(){$("#name").focus()},1600);}
  if (count === 2){
    $("#konami").empty();
        var txt = $("#anagram").data("text")+remove(scrambled);
        typeWriter(txt, 0, "anagram");
    $("#yes").removeClass("show").addClass("hide");
    $("#no").removeClass("show").addClass("hide");
    $("#confirm").removeClass("hide").addClass("show");
    $("#reset").removeClass("hide").addClass("show");
}
  console.log(count);
};

$(document).on("click","#confirm",function(){
    yourName = document.getElementById("name").value;
    scrambled = yourName.split(""); //converts yourName to an Array so that it can be randomized later
    $("#second").empty();
  var txt = `${$("#konami").data("text")} ${yourName}?`;
  typeWriter(txt, 0, "konami");
    $("#confirm").removeClass("show").addClass("hide");
    $("#reset").removeClass("show").addClass("hide");
    $("#yes").removeClass("hide").addClass("show");
    $("#no").removeClass("hide").addClass("show");
});

//console.log(scrambled) - debug to check that name was passed to 'scrambled'

$(document).on("click","#reset",function(){
    $("#name").val('');
});

function remove(scrambled){ //function removes any blank spaces that may be present and injects the elelemts 2,0,2,0 into array. The full array will later be shuffled and returned as  string. 
index = scrambled.indexOf(" ");
if(index > -1){scrambled.splice(index,1);
scrambled.push("2","0","2","0");
  for (let i = scrambled.length - 1; i > 0; i--) { //'for' loop taken from "Fischer-Yates" algorithm from https://javascript.info/task/shuffle
    let j = Math.floor(Math.random() * (i + 1)); 
    [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]]; //end Fischer-Yates algorithm
    shuffled = scrambled.toString();
    shuffledName = shuffled.split(",").join("");
  }
}
return shuffledName;
};