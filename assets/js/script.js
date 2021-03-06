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
// utilises the typewriter function to quicly select and type out elements
function quickType(spanId, optionalVariable = '', optionalValue = '') {
    var txt = $("#" + spanId).data("text") + optionalVariable + optionalValue;
    typeWriter(txt, 0, spanId);
}

// types out the main-content id element to screen when the user lands on the page. 
window.onload =
    setTimeout(function () {
        var txt = $("#main-content").data("text");
        typeWriter(txt, 0, "main-content");
        counts();
    }, 3500);
setTimeout(function () {
    $("#yes").removeAttr("disabled"); //Disables buttons until typing complete. Used throughout
    $("#no").removeAttr("disabled");
}, 5800);
$(".pixel").removeClass("pixel");
$("#yes").prop("disabled", true);
$("#no").prop("disabled", true);

// answers to the riddles - used later to check against
let riddlesAns = {
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
//Sets up the answeredRiddles array. Key presses are later pushed to this array.
let answeredRiddles = [];

//quickly add's and removes classes
function showHide(show, showTwo, hide, hideTwo) {
    $("#" + show).removeClass("hide").addClass("show");
    $("#" + showTwo).removeClass("hide").addClass("show");
    $("#" + hide).removeClass("show").addClass("hide");
    $("#" + hideTwo).removeClass("show").addClass("hide");
}

function remove(scrambled) { //function removes any blank spaces that may be present and injects the elelemts 2,0,2,0 into array. The full array will later be shuffled and returned as  string. 
    if (index = scrambled.indexOf(" "), index > -1) {
        scrambled.splice(index, 1);
        scrambled.push("2", "0", "2", "0");
    }
    else if (index = scrambled) {
        scrambled.push("2", "0", "2", "0");
    }
    for (let i = scrambled.length - 1; i > 0; i--) { //'for' loop taken from "Fischer-Yates" algorithm from https://javascript.info/task/shuffle
        let j = Math.floor(Math.random() * (i + 1));
        [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]]; //end Fischer-Yates algorithm
        shuffled = scrambled.toString();
        shuffledName = shuffled.split(",").join("");
    }
    return shuffledName;
};

//Changes the id attribute of the confirm button so that a new count can be started based on it's presses later on
function changeId() {
    if (count === 1 && noCount === 1 && confirmCount === 1) {
        $("button#confirm").attr("id", "confirmRiddle");
        riddleButton = document.getElementById("confirmRiddle");
    }
}
// Tracks and reacts to the number of incorrect attemps the user has made
function attempts() {
    if (attempt == 1) {
        attempt--;
        alert("This is your final attempt");
    }
    else if (attempt == 0) {
        alert("Too many Incorrect attempts! You will start again!")
        window.location.href = "index.html";
    }
    else {
        attempt--;
        alert(`You have ${attempt} remaining attempts\nHint: If answering riddles - use lower case`);
    }
}
// Later used in the nextRiddle function so as to quickly build out the riddles function. 
function answerRiddle(riddleId, defaultTime = 7600) {
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
    $("#confirmRiddle").prop("disabled", true);
    $("#reset").prop("disabled", true);
    setTimeout(function () {
        $("#confirmRiddle").removeAttr("disabled");
        $("#reset").removeAttr("disabled");
    }, defaultTime + 1900);
}
//Stores all the user answers for the riddles in an array which will be checked later
function storeAnswers() {
    answers = document.getElementById("answer").value;
    answeredRiddles.push(answers);
}
//Used to remove the current riddle before the next riddle is typed. Resets users attempts to 3 so that the user starts each riddle with 3 attempts
function resetRiddles(emptyRiddleId) {
    $("#pass").remove();
    $(`#${emptyRiddleId}`).empty();
    $(`#${emptyRiddleId}`).remove();
    $("#solve").empty();
    $("#answer").remove();
    attempt = 3;
}
// Combines 3 functions so as to allow for quicker coding of the riddles function
function nextRiddle(prevRiddleId, nextRiddleId, defaultTime) {
    storeAnswers();
    resetRiddles(prevRiddleId);
    answerRiddle(nextRiddleId, defaultTime);
}
//types the anagram to the screen which includes the users name which is shuffled by another function and has '2020' within it 
function anagramSolve() {
    $("#konami").empty();
    var yourNameShuffled = remove(scrambled)
    quickType("anagram", yourNameShuffled);
    showHide("p3");
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
    showHide("confirm", "reset", "yes", "no");
    $("#confirm").prop("disabled", true);
    $("#confirmRiddle").prop("disabled", true);
    $("#reset").prop("disabled", true);
    setTimeout(function () {
        $("#confirm").removeAttr("disabled");
        $("#confirmRiddle").removeAttr("disabled");
        $("#reset").removeAttr("disabled");
    }, 7200);
}
//uses a count to determine what action is taken when the button od id yes is clicked
var button = document.getElementById("yes");
button.onclick = function () {
    count += 1;
    if (count === 1) {
        $("#main-content").empty();
        $("span").last().addClass("pixel");
        $("#confirm").prop("disabled", true);
        $("#reset").prop("disabled", true);
        quickType("second");
        showHide("p1"); //All instances of showHide p'X' are to create the cmd line effect of previously typed answers on the index page
        showHide("confirm", "reset", "yes", "no");
        setTimeout(function () { $("span#second").append('<input type="text" id="name" name="name">'); }, 1500);
        setTimeout(function () { $(".pixel").removeClass("pixel") }, 1500);
        setTimeout(function () { $("#name").focus() }, 1600);
        setTimeout(function () {
            $("#confirm").removeAttr("disabled");
            $("#reset").removeAttr("disabled")
        }, 1700);
    }
    else { anagramSolve() };
};
//sets up all the counts that are used in the logic of the script
function counts() {
    confirmCount = 0;
    riddleCount = 0;
    noCount = 0;
    count = 0;
    attempt = 3;
};
//uses a count to determine what action is taken when the button of id no is clicked
var noButton = document.getElementById("no");
noButton.onclick = function () {
    noCount += 1;
    if (noCount === 1 && count === 0) {
        window.location.href = "https://github.com/LogisticBravo/Milestone_project_2-The-Rabbit-Hole";
    }
    else if (noCount === 1) {
        $("#konami").empty();
        showHide("confirm", "reset", "yes", "no");
        quickType("riddle-1");
        changeId();
        showHide("p5");
        setTimeout(function () {
            $("span#riddle-1").css("display", "block")
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
        $("#confirmRiddle").prop("disabled", true);
        $("#reset").prop("disabled", true);
        setTimeout(function () {
            $("#confirmRiddle").removeAttr("disabled");
            $("#reset").removeAttr("disabled");
        }, 5800);
        riddleButton.onclick = function () {
            riddles();
        };
    }
}
//empty's the input field for the user
var resetButton = document.getElementById("reset")
resetButton.onclick = function () {
    $("#name").val('');
    $("#answer").val('');
}

function arrayEquals(a, b) { //Compare two arrays to check they are the same (Attributed to: https://masteringjs.io/tutorials/fundamentals/compare-arrays)
    if (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]))
        asciiLoading();
    else { attempts() };
    checkAttempt();
}
//resets the everything after each incorrect attempt
function checkAttempt() {
    if (attempt === 2) { answers = {}; answeredRiddles = []; $("#log").empty(); };
    if (attempt === 1) { answers = {}; answeredRiddles = []; $("#log").empty(); };
}
// listens for and capture key strokes by the user
function keyListen() {
    setTimeout(function () {
        $("#solve").after('<p id="log"></p>');
        $("#log").hide();
        $("#solve").hide();
        $("#confirm").prop("disabled", true);
        $("#reset").prop("disabled", true);
        count += 1;
        document.addEventListener('keydown', logKey); //Keyboard event listener for the input of the code
        function logKey(e) {
            log.textContent += ` ${e.code}`;
            answers = document.getElementById("log").innerHTML;
            answeredRiddles = answers.replace(/Arrow/g, '').replace(/Key/g, '').split(" "); //removes the words 'Arrow' and 'Key' from the Array
            answeredRiddles.shift();
            //answeredRiddles.length = 10; //Restricts the length of the Array to 10 so that the first 10 key strokes only are added to the array
            if (answeredRiddles.length === 10) {
                $("#confirm").removeAttr("disabled");
                $("#reset").removeAttr("disabled"); answeredRiddles.length = 10;
            }
            resetButton.onclick = function () { answers = {}; answeredRiddles = []; $("#log").empty(); };
        }
    }, 6000);
}
//iterates through the array and converts the answers to lowercase
function checkArray() {
    for (let i = 0; i < answeredRiddles.length; i++) {
        answeredRiddles[i] = answeredRiddles[i].toLowerCase();
    }
    riddlesAns = Object.values(riddlesAns); //converts the objects property values to an array
    arrayEquals(riddlesAns, answeredRiddles); //calls upon the arrayEquals function to ensure that the keyboard input matches the correct riddle answers i.e. the konami code
}
//Easter egg
function checkInput() {
    if ($("input").val() == "neo") {
        $("button").addClass("matrix").removeClass("ide-pink").removeClass("ide-orange");
        $("div").addClass("matrix").removeClass("ide-cyan");
        $("a").addClass("matrix").removeClass("ide-yellow");
        confirmCount -= 1;
        $("#name").val('');
    }
    else if ($("input").val() == "admin") {
        $("#confirm").addClass("ide-pink").removeClass("matrix");
        $("#reset").addClass("ide-orange").removeClass("matrix");
        $("#yes").addClass("ide-pink").removeClass("matrix");
        $("#no").addClass("ide-orange").removeClass("matrix");
        $("div").addClass("ide-cyan").removeClass("matrix");
        $("#solve").addClass("ide-blue").removeClass("matrix");
        $("a").removeClass("matrix").addClass("ide-yellow");
        confirmCount -= 1;
        $("#name").val('');
    }
    else if (count === 1 && ($("input").val().length == 0)) { alert("Input cannot be Empty!"); confirmCount -= 1; }
}
// determines what path is taken by the user based on the counts of the button clicks
var confirmButton = document.getElementById("confirm");
confirmButton.onclick = function () {
    confirmCount += 1;
    checkInput();
    if (confirmCount === 1) {
        yourName = document.getElementById("name").value;
        scrambled = yourName.split(""); //converts yourName to an Array so that it can be randomized later
        $("#second").empty();
        $("span").last().addClass("pixel");
        quickType("konami", yourName, "?");
        $("#yes").prop("disabled", true);
        $("#no").prop("disabled", true);
        showHide("yes", "no", "confirm", "reset");
        showHide("p2");
        $("#p2").append(yourName);
        setTimeout(function () {
            $("#yes").removeAttr("disabled");
            $("#no").removeAttr("disabled");
        }, 2100);
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
            showHide("p4");
            showHide("p17");
            $("#anagram-solve").append(yourName.concat("2020"));
            setTimeout(function () {
                quickType("solve")
            }, 6000);
            $("#confirm").prop("disabled", true);
            $("#reset").prop("disabled", true);
            keyListen();
            mobileKeys();
        }
        else { attempts() };
    }
    if (confirmCount >= 2 && count === 3) {
        checkArray();
    }
};
// Empty's the screen and types out all of the riddles. Uses previously set up functions to capture, check and provide the path for the user to take
function riddles() {
    riddleCount += 1;
    answer = document.getElementById("answer").value;
    if (answer == riddlesAns.riddle1 && answeredRiddles.length === 0) {
        storeAnswers();
        $("#riddle-1").empty();
        $("#solve").empty();
        $("#answer").remove();
        attempt = 3;
        answerRiddle("riddle-2");
        showHide("p6");
        $("#answer1").append(answer);
    }
    else if (answer == riddlesAns.riddle2 && answeredRiddles.length === 1) {
        nextRiddle("riddle-2", "riddle-3", 12500);
        showHide("p7");
        $("#answer2").append(answer);
    }
    else if (answer == riddlesAns.riddle3 && answeredRiddles.length === 2) {
        nextRiddle("riddle-3", "riddle-4", 12500);
        showHide("p8");
        $("#answer3").append(answer);
    }
    else if (answer == riddlesAns.riddle4 && answeredRiddles.length === 3) {
        nextRiddle("riddle-4", "riddle-5", 10500);
        showHide("p9");
        $("#answer4").append(answer);
    }
    else if (answer == riddlesAns.riddle5 && answeredRiddles.length === 4) {
        nextRiddle("riddle-5", "riddle-6", 22000);
        showHide("p10");
        $("#answer5").append(answer);
    }
    else if (answer == riddlesAns.riddle6 && answeredRiddles.length === 5) {
        nextRiddle("riddle-6", "riddle-7", 11500);
        showHide("p11");
        $("#answer6").append(answer);
    }
    else if (answer == riddlesAns.riddle7 && answeredRiddles.length === 6) {
        nextRiddle("riddle-7", "riddle-8", 12500);
        showHide("p12");
        $("#answer7").append(answer);
    }
    else if (answer == riddlesAns.riddle8 && answeredRiddles.length === 7) {
        nextRiddle("riddle-8", "riddle-9");
        showHide("p13");
        $("#answer8").append(answer);
    }
    else if (answer == riddlesAns.riddle9 && answeredRiddles.length === 8) {
        nextRiddle("riddle-9", "riddle-10");
        showHide("p14");
        $("#answer9").append(answer);
    }
    else if (answer == riddlesAns.riddle10 && answeredRiddles.length === 9) {
        storeAnswers();
        resetRiddles("riddle-10");
        anagramSolve();
        showHide("p15");
        $("#answer10").append(answer);
        $("#p3").addClass("hide").removeClass("show");
    }
    else if (answer == yourName.concat("2020") && answeredRiddles.length === 10 && attempt >= 0) {
        alert("Correct");
        $("#anagram").empty();
        $("#solve").empty();
        $("#answer").remove();
        $("span").last().addClass("pixel");
        showHide("p16");
        quickType("code-input");
        setTimeout(function () {
            quickType("solve")
        }, 6000);
        setTimeout(function () {
            $("#log").css("display", "block");
        }, 4100);
        kcode();
    }
    else { attempts() };
}
// If the user travels the path through the riddles, this shows them the answers at the end. It then removes the button
function kcode() {
    if (riddleCount >= 11 && attempt >= 0) {
        $("button#confirmRiddle").attr("id", "confirm");
        $(".pixel").removeClass("pixel");
        keyListen();
        mobileKeys();
        $("#confirm").after('<button class="show" id="riddleAnswers">Show Answered Riddles</button>');
        var riddleAnsButton = document.getElementById("riddleAnswers");
        riddleAnsButton.onclick = function () {
            document.getElementById("log").innerHTML = answeredRiddles.toString();
            setTimeout(function () {
                $("#log").addClass("show");
                $("#riddleAnswers").remove();
            }, 2800);
            setTimeout(function () {
                $("#log").addClass("hide");
            }, 7000);
        }
        confirmButton.onclick = function () {
            checkArray();
        };
    }
    else { attempts() };
}
//When the konami code is entered correctly. The Ascii numbers are shown on screen and animated as each number is locked in. Once locked, the CV page is loaded. The numbers themselves also include an easter egg or two ;-)
function asciiLoading() {
    $("div div div").empty();
    $("#central").append("<span id='count1' class='pr-5 count-size'>98</span><span id='count2' class='pr-5 count-size'>114</span><span id='count3' class='pr-5 count-size'>97</span><span id='count4' class='pr-5 count-size'>100</span><span id='count5' class='pr-5 count-size'>108</span><span id='count6' class='pr-5 count-size'>101</span><span id='count7' class='pr-5 count-size'>121</span>");
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
    setTimeout(function () {
        var obj = document.getElementById("count1");
        animateValue(obj, 98, 76, 7000);
        setTimeout(function () { $("#count1").addClass("matrix") }, 7100);
        var obj = document.getElementById("count2");
        animateValue(obj, 114, 79, 10000);
        setTimeout(function () { $("#count2").addClass("matrix") }, 10100);
        var obj = document.getElementById("count3");
        animateValue(obj, 97, 65, 4500);
        setTimeout(function () { $("#count3").addClass("matrix") }, 4600);
        var obj = document.getElementById("count4");
        animateValue(obj, 100, 68, 6000);
        setTimeout(function () { $("#count4").addClass("matrix") }, 6100);
        var obj = document.getElementById("count5");
        animateValue(obj, 108, 73, 9000);
        setTimeout(function () { $("#count5").addClass("matrix") }, 9100);
        var obj = document.getElementById("count6");
        animateValue(obj, 101, 78, 15000);
        setTimeout(function () { $("#count6").addClass("matrix") }, 15100);
        var obj = document.getElementById("count7");
        animateValue(obj, 121, 71, 12000);
        setTimeout(function () { $("#count7").addClass("matrix") }, 12100);
        setTimeout(function () { window.location.href = "cv.html" }, 20000);
    }, 5000);
    setTimeout(function () { window.location.href = "cv.html" }, 20000);
};
//used by the mobileKeys function to check if the buttons can be activated to submit an attempt. Resets the length of the array. 
function checkUnlock() {
    if (answeredRiddles.length === 10) {
        $("#confirm").removeAttr("disabled");
        $("#reset").removeAttr("disabled"); answeredRiddles.length = 10;
    }
}
//Provides mobile users with the ability to input the konami code. Pushes each click to the array.
function mobileKeys() {
    var arrowUpButton = document.getElementById("upkey");
    arrowUpButton.onclick = function () {
        answeredRiddles.push("Up");
        checkUnlock();
    }
    var arrowDownButton = document.getElementById("downkey");
    arrowDownButton.onclick = function () {
        answeredRiddles.push("Down");
        checkUnlock();
    }
    var arrowLeftButton = document.getElementById("leftkey");
    arrowLeftButton.onclick = function () {
        answeredRiddles.push("Left");
        checkUnlock();
    }
    var arrowRightButton = document.getElementById("rightkey");
    arrowRightButton.onclick = function () {
        answeredRiddles.push("Right");
        checkUnlock();
    }
    var aKeyButton = document.getElementById("akey");
    aKeyButton.onclick = function () {
        answeredRiddles.push("A");
        checkUnlock();
    }
    var bKeyButton = document.getElementById("bkey");
    bKeyButton.onclick = function () {
        answeredRiddles.push("B");
        checkUnlock();
    }
}