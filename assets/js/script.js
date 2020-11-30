var i = 0;
var txt = 'Would you like to play a game?';
var txt2= "Ok, let's try this!";

/*$("#yes").click(function() {
    $("#main-content").empty();
});*/

$("#yes").click(function() {
    $("#main-content").empty();
});

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("main-content").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
window.onload = setTimeout(typeWriter, 5000);


