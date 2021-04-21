window.onload = function(){
    $("tr td:nth-child(1)").addClass("pr-5");
    $("h6").parent("td").removeClass("pr-5");
    $("tr td:nth-child(3)").addClass("pl-5");
    $("h6").parent("td").removeClass("pl-5");
    quickType("asciiname");
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