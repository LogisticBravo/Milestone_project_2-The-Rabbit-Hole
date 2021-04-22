window.onload = function(){
    $("tr td:nth-child(1)").addClass("pr-5");
    $("h6").parent("td").removeClass("pr-5");
    $("tr td:nth-child(3)").addClass("pl-5");
    $("h6").parent("td").removeClass("pl-5");
    keyListen();
    quickType("asciiname");
    setTimeout(function () {
            quickType("edu1")
        }, 23500);
        setTimeout(function () {
            quickType("date1")
        }, 22500);
        setTimeout(function () {
            quickType("date2")
        }, 25000);
        setTimeout(function () {
            quickType("job1")
        }, 26000);
        setTimeout(function () {
            quickType("role1")
        }, 26500);
        setTimeout(function () {
            quickType("date3")
        }, 36000);
        setTimeout(function () {
            quickType("job2")
        }, 37500);
        setTimeout(function () {
            quickType("role2")
        }, 38000);
        setTimeout(function () {
            quickType("date4")
        }, 39000);
        setTimeout(function () {
            quickType("job3")
        }, 40500);
        setTimeout(function () {
            quickType("role3")
        }, 41000);
        setTimeout(function () {
            quickType("date5")
        }, 42000);
        setTimeout(function () {
            quickType("edu2")
        }, 43500);
        setTimeout(function () {
            quickType("date6")
        }, 42000);
        setTimeout(function () {
            quickType("job4")
        }, 43500);
        setTimeout(function () {
            quickType("role4")
        }, 44500);
        setTimeout(function () {
            quickType("date7")
        }, 31000);
        setTimeout(function () {
            quickType("role7")
        }, 31500);
        setTimeout(function () {
            quickType("date8")
        }, 34000);
        setTimeout(function () {
            quickType("role8")
        }, 34500);
        setTimeout(function () {
            quickType("p1")
        }, 6000);
        setTimeout(function () {
            quickType("p3")
        }, 12000);
        setTimeout(function () {
            quickType("p2")
        }, 8000);
        setTimeout(function () {
            quickType("plist1")
        }, 12000);
        setTimeout(function () {
            quickType("plist2")
        }, 18000);
        setTimeout(function () {
            quickType("plist3")
        }, 10000);
        setTimeout(function () {
            quickType("plist4")
        }, 21000);
        setTimeout(function () {
            quickType("h1")
        }, 5100);
        setTimeout(function () {
            quickType("h2")
        }, 6000);
        setTimeout(function () {
            quickType("h3")
        }, 8000);
        setTimeout(function () {
            quickType("h4")
        }, 9000);
        setTimeout(function () {
            quickType("h5")
        }, 21000);
} 

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

let konami = [];

konamiCount = 0;

function keyListen (){
            $("div").last().after('<p id="log"></p>');
            $("#log").hide();
            document.addEventListener('keydown', logKey); //Keyboard event listener for the input of the code
                function logKey(e) {
                    log.textContent += ` ${e.code}`;
                    kcode = document.getElementById("log").innerHTML;
                    konami = kcode.replace(/Arrow/g,'').replace(/Key/g,'').split(" "); //removes the words 'Arrow' and 'Key' from the Array
                    konami.shift();
                    if (konami.length === 10){konamiCount +=1;checkArray();}
                    console.log(konami);
};
}
function checkCount(){
if(konamiCount ===1){ideTheme();};
if(konamiCount ===2){matrixTheme();};
}

function arrayEquals(a, b) { //Compare two arrays to check they are the same (Attributed to: https://masteringjs.io/tutorials/fundamentals/compare-arrays)
  if (Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]))
    checkCount();
else reset();
}

function reset(){
    alert("wrong");
    konamiCount -= 1;
    $("#log").empty();
    konami=[];
}

function checkArray (){
    for (let i = 0; i < konami.length; i++) {
        konami[i] = konami[i].toLowerCase();
}
        riddlesAns = Object.values(riddlesAns); //converts the objects property values to an array
        arrayEquals(riddlesAns,konami); //calls upon the arrayEquals function to ensure that the keyboard input matches the correct riddle answers i.e. the konami code
}

function ideTheme (){
    $(":header").addClass("ide-blue");
    $("p").addClass("ide-orange");
    $("li").addClass("ide-pink");
    $("td:first-child").addClass("ide-yellow");
    $("td:last-child").addClass("ide-yellow");
    $("td:nth-child(2)").addClass("ide-cyan");
    $("td:first-child:contains('/')").removeClass("ide-yellow").addClass("ide-green");
    $("#log").empty();
    konami=[];
}

function matrixTheme () {
    $(":header").removeClass("ide-blue").addClass("matrix");
        $("p").removeClass("ide-orange").addClass("matrix");
        $("li").removeClass("ide-pink").addClass("matrix");
        $("td:first-child").removeClass("ide-yellow").addClass("matrix");
        $("td:last-child").removeClass("ide-yellow").addClass("matrix");
        $("td:nth-child(2)").removeClass("ide-cyan").addClass("matrix");
        $("td:first-child:contains('/')").removeClass("ide-green").addClass("matrix");
        $(".col-md-auto").addClass("matrix");
}