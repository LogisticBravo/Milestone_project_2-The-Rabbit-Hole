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

$(document).on("click","#yes", function(){
  $("#main-content").empty();
  var txt = $("#second").data("text");
  typeWriter(txt, 0, "second");
});