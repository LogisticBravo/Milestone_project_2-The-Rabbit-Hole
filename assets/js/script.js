/* *** ORIGINAL TYPEWRITER CODE FROM W3 SCHOOLS - BASE FOR TYPEWRITE CODE ***
*   function typeWriter() {
*        if (i < txt.length) {
*       document.getElementById("main-content").innerHTML += txt.charAt(i);
*       i++;
*       setTimeout(typeWriter, 70);
*  }
* }
* * * * * * *  * * * * * * * * * * * * * * * *  * * * * * * * * * * * * * * * */
function typeWriter(txt, i, divId) {
    if (i < (txt.length)) {
        $('#' + divId).html(txt.substring(0, i + 1));
        i++;
        setTimeout(function () {
            typeWriter(txt, i, divId)
        }, 70);
    };
};

function quickType(spanId,optionalVariable ='',optionalValue = ''){
        var txt = $("#" + spanId).data("text") + optionalVariable + optionalValue;
        typeWriter(txt, 0, spanId);
    }

function showHide(show, showTwo, hide, hideTwo){
        $("#" + show).removeClass("hide").addClass("show");
        $("#" + showTwo).removeClass("hide").addClass("show");
        $("#" + hide).removeClass("show").addClass("hide");
        $("#" + hideTwo).removeClass("show").addClass("hide");}

function remove(scrambled) { //function removes any blank spaces that may be present and injects the elelemts 2,0,2,0 into array. The full array will later be shuffled and returned as  string. 
    if (index = scrambled.indexOf(" "), index > -1){
        scrambled.splice(index, 1);
        scrambled.push("2", "0", "2", "0");}
    else if (index = scrambled){
        scrambled.push("2", "0", "2", "0");}
        for (let i = scrambled.length - 1; i > 0; i--) { //'for' loop taken from "Fischer-Yates" algorithm from https://javascript.info/task/shuffle
            let j = Math.floor(Math.random() * (i + 1));
            [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]]; //end Fischer-Yates algorithm
            shuffled = scrambled.toString();
            shuffledName = shuffled.split(",").join("");
        }
    return shuffledName;
};

function changeId(){if (count === 1 && noCount === 1 && confirmCount === 1){
        $("button#confirm").attr("id","confirmRiddle");
        riddleButton = document.getElementById("confirmRiddle");
    }}

function attempts(){
        if (attempt == 1) {
            attempt--;
            alert("This is your final attempt");
        }
        else if (attempt == 0) {
            alert("Too many Incorrect attempts! You will start again!")
            window.location.href = "https://8000-b0bfd19b-42b8-476c-bb80-c849c316f359.ws-eu03.gitpod.io/";
        }
        else {
            attempt--;
            alert(`You have ${attempt} remaining attempts`);
        }}

function answerRiddle(riddleId, defaultTime = 7600){
    $("span").last().addClass("pixel");
    $(`span#${riddleId}`).prev().after('<span id="pass" data-text="Well done. . . Next Riddle:"></span>');
    quickType("pass")
    setTimeout(function () {
            $("span#pass").css("display", "block")
        }, 3800);
    setTimeout(function () {
            quickType(riddleId)
        }, 3900);
    setTimeout(function () {
            $(`span#${riddleId}`).css("display", "block")
        }, defaultTime);
    setTimeout(function () {
            quickType("solve")
        }, defaultTime + 600);
    setTimeout(function () {
            $(".pixel").removeClass("pixel")
        }, defaultTime + 2000);
    setTimeout(function () {
            $("#solve").after('<input type="text" id="answer" name="answer">'); $("#answer").focus();
        }, defaultTime + 1900);
}

function storeAnswers (){
    answers = document.getElementById("answer").value;
    answeredRiddles.push(answers);
    console.log(answeredRiddles);
}

function resetRiddles (emptyRiddleId){
    $("#pass").remove();
    $(`#${emptyRiddleId}`).empty();
    $("#solve").empty();
    $("#answer").remove();
    attempt = 3;
}

function nextRiddle(prevRiddleId, nextRiddleId, defaultTime){
    storeAnswers();
    resetRiddles(prevRiddleId);
    answerRiddle(nextRiddleId, defaultTime);
}

function anagramSolve (){
    $("#konami").empty();
        var yourNameShuffled = remove(scrambled)
        quickType("anagram",yourNameShuffled);
        setTimeout(function () {
            $("span#anagram").css("display", "block")
        }, 3800);
        setTimeout(function () {
            quickType("solve");
        }, 4000);
        setTimeout(function () {
            $(".pixel").removeClass("pixel")
        }, 5800);
        setTimeout(function () {
            $("span#solve").after('<input type="text" id="answer" name="answer">'); $("#answer").focus();
        }, 5700);
        showHide("confirm","reset","yes","no");
    }

window.onload = setTimeout(function () {
    var txt = $("#main-content").data("text");
    typeWriter(txt, 0, "main-content");
    counts();
}, 5000);

let riddlesAns ={
    riddle1: "up",
    riddle2: "up",
    riddle3: "down",
    riddle4: "down",
    riddle5: "left",
    riddle6: "right",
    riddle7: "left",
    riddle8: "right",
    riddle9: "b",
    riddle10: "a",
}

let answeredRiddles = [];

var button = document.getElementById("yes");
button.onclick = function () {
    count += 1;
    if (count === 1) {
        $("#main-content").empty();
        quickType("second");
        showHide("confirm","reset","yes","no");
        setTimeout(function () { $("span#second").append('<input type="text" id="name" name="name">'); }, 1500);
        setTimeout(function () { $(".pixel").removeClass("pixel") }, 1500);
        setTimeout(function () { $("#name").focus() }, 1600);
    }
    else {anagramSolve()};
    console.log(count);
};

function counts(){
    confirmCount = 0;
    riddleCount = 0;
    noCount = 0;
    count = 0;
    attempt = 3;
};

var noButton = document.getElementById("no");
noButton.onclick = function () {
    noCount += 1;
    if (noCount === 1 && count === 0) {
window.location.href ="https://github.com/LogisticBravo/Milestone_project_2-The-Rabbit-Hole";
    }
    else if (noCount === 1){
        $("#konami").empty();
        showHide("confirm","reset","yes","no");
        quickType("riddle-1");
        changeId();
        setTimeout(function () {
            $("span#riddle-1").css("display", "block")//Perhaps I should make this a display block class and use add class
        }, 3800);
        setTimeout(function () {
            quickType("solve")
        }, 4000);
        setTimeout(function () {
            $(".pixel").removeClass("pixel")
        }, 5800);
        setTimeout(function () {
            $("span#solve").after('<input type="text" id="answer" name="answer">'); $("#answer").focus();
        }, 5700);
        riddleButton.onclick = function (){
    riddles();};
    }
}

var resetButton = document.getElementById("reset")
resetButton.onclick = function () {
        $("#name").val('');
        $("#answer").val('');
    } 
//console.log(scrambled) - debug to check that name was passed to 'scrambled'

function arrayEquals(a, b) { //Compare two arrays to check they are the same (Attributed to: https://masteringjs.io/tutorials/fundamentals/compare-arrays)
  if (Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]))
    asciiLoading();
    else{attempts()};
}

function keyListen (){
    setTimeout(function () {
            $("#solve").after('<p id="log"></p>');
            $("#log").hide();
            $("#solve").hide();
            count +=1;
            document.addEventListener('keydown', logKey); //Keyboard event listener for the input of the code
                function logKey(e) {
                    log.textContent += ` ${e.code}`;
                    answers = document.getElementById("log").innerHTML;
                    answeredRiddles = answers.replace(/Arrow/g,'').replace(/Key/g,'').split(" "); //removes the words 'Arrow' and 'Key' from the Array
                    answeredRiddles.shift(); 
                    answeredRiddles.length = 10; //Restricts the length of the Array to 10 so that the first 10 key strokes only are added to the array
                    resetButton.onclick = function (){answers = {};answeredRiddles = [];$("#log").empty();};
                    console.log(answeredRiddles);
}}, 6000);
}

function checkArray (){
    for (let i = 0; i < answeredRiddles.length; i++) {
        answeredRiddles[i] = answeredRiddles[i].toLowerCase();
}
        riddlesAns = Object.values(riddlesAns); //converts the objects property values to an array
        arrayEquals(riddlesAns,answeredRiddles); //calls upon the arrayEquals function to ensure that the keyboard input matches the correct riddle answers i.e. the konami code
}

var confirmButton = document.getElementById("confirm");
confirmButton.onclick = function () {
    confirmCount += 1;
    if (confirmCount === 1) {
        yourName = document.getElementById("name").value;
        scrambled = yourName.split(""); //converts yourName to an Array so that it can be randomized later
        $("#second").empty();
        $("span").last().addClass("pixel");
        quickType("konami",yourName,"?");
        showHide("yes","no","confirm","reset");
    }
    if (confirmCount >= 2 && confirmCount <= 5 && count === 2) {
        answer = document.getElementById("answer").value;
        if (answer == yourName.concat("2020") && attempt >= 0) {
            alert("Correct");
            $("#anagram").empty();
            $("#solve").empty();
            $("#answer").remove();
            $("span").last().addClass("pixel");
            quickType("code-input");
            setTimeout(function () {
            quickType("solve")
        }, 6000);
        keyListen();
        }
        else {attempts()};
        console.log(attempt)
    }
    if (confirmCount >= 2 && count === 3) {
        checkArray();
    }
};

function riddles(){
    riddleCount += 1;
    answer = document.getElementById("answer").value;
if (answer == riddlesAns.riddle1 && answeredRiddles.length === 0){
    storeAnswers();
    $("#riddle-1").empty();
    $("#solve").empty();
    $("#answer").remove();
    attempt = 3;
    answerRiddle("riddle-2");
}
else if (answer == riddlesAns.riddle2 && answeredRiddles.length === 1){
    nextRiddle("riddle-2","riddle-3",12500);
}
else if (answer == riddlesAns.riddle3 && answeredRiddles.length === 2){
    nextRiddle("riddle-3","riddle-4", 12500);
}
else if (answer == riddlesAns.riddle4 && answeredRiddles.length === 3){
    nextRiddle("riddle-4","riddle-5", 10500);
}
else if (answer == riddlesAns.riddle5 && answeredRiddles.length === 4){
    nextRiddle("riddle-5","riddle-6", 22000);
}
else if (answer == riddlesAns.riddle6 && answeredRiddles.length === 5){
    nextRiddle("riddle-6","riddle-7", 11500);
}
else if (answer == riddlesAns.riddle7 && answeredRiddles.length === 6){
    nextRiddle("riddle-7","riddle-8", 12500);
}
else if (answer == riddlesAns.riddle8 && answeredRiddles.length === 7){
    nextRiddle("riddle-8","riddle-9");
}
else if (answer == riddlesAns.riddle9 && answeredRiddles.length === 8){
    nextRiddle("riddle-9","riddle-10");
}
else if (answer == riddlesAns.riddle10 && answeredRiddles.length === 9){
    storeAnswers();
    resetRiddles ("riddle-10");
    anagramSolve ();
}
else if (answer == yourName.concat("2020") && answeredRiddles.length === 10 && attempt >= 0) {
            alert("Correct");
            $("#anagram").empty();
            $("#solve").empty();
            $("#answer").remove();
            $("span").last().addClass("pixel");
            quickType("code-input");
            setTimeout(function () {
            quickType("solve")
        }, 6000);
        setTimeout(function () {
            $("#log").css("display", "block");
        }, 4100);
        kcode();
        }
else {attempts()};
}

function kcode (){
if (riddleCount >= 11 && attempt >=0){
    $("button#confirmRiddle").attr("id","confirm");
    keyListen();
    $("#confirm").after('<button class="show" id="riddleAnswers">Show Answered Riddles</button>');
    var riddleAnsButton = document.getElementById("riddleAnswers");
    riddleAnsButton.onclick = function () {
    document.getElementById("log").innerHTML = answeredRiddles.toString();
    setTimeout(function () {
            $("#log").css("display", "none");
            $("#riddleAnswers").remove();
            answeredRiddles = [];
        }, 2800);
}
    confirmButton.onclick = function(){
    checkArray();   
    };
}
else {attempts()};
}

function asciiLoading (){
    $("div div div").empty();
    $("#central").append("<span id='count1'>98</span><span id='count2'>114</span><span id='count3'>97</span><span id='count4'>100</span><span id='count5'>108</span><span id='count6'>101</span><span id='count7'>121</span>");
    function animateValue(obj, start, end, duration) { //courtesy of https://css-tricks.com/animating-number-counters/
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
setTimeout(function(){
var obj = document.getElementById("count1");
animateValue(obj, 98, 76, 7000);
var obj = document.getElementById("count2");
animateValue(obj, 114, 79, 10000);
var obj = document.getElementById("count3");
animateValue(obj, 97, 65, 4500);
var obj = document.getElementById("count4");
animateValue(obj, 100, 68, 6000);
var obj = document.getElementById("count5");
animateValue(obj, 108, 73, 9000);
var obj = document.getElementById("count6");
animateValue(obj, 101, 78, 15000);
var obj = document.getElementById("count7");
animateValue(obj, 121, 71, 12000);
},5000);
};
