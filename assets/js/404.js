window.onload = function error404() {
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
        animateValue(obj, 9, 4, 3500);
        setTimeout(function () { $("#count1").addClass("matrix").removeClass("red") }, 3600);
        var obj = document.getElementById("count2");
        animateValue(obj, 9, 0, 8400);
        setTimeout(function () { $("#count2").addClass("matrix").removeClass("red") }, 8500);
        var obj = document.getElementById("count3");
        animateValue(obj, 9, 4, 6500);
        setTimeout(function () { $("#count3").addClass("matrix").removeClass("red") }, 6600);
        setTimeout(function () { window.location.href = "index.html" }, 10000);
    }, 5000);
    setTimeout(function () { window.location.href = "index.html" }, 20000);
};