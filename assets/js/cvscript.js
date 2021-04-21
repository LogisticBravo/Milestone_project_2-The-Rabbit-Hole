window.onload = function(){
    $("tr td:nth-child(1)").addClass("pr-5");
    $("h6").parent("td").removeClass("pr-5");
    $("tr td:nth-child(3)").addClass("pl-5");
    $("h6").parent("td").removeClass("pl-5");
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