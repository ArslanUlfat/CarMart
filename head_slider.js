setInterval("slider();", 1500);
var a = 1;
function slider() {
    if (a !== 3) {
        document.getElementById("slide-head").src = "images/head/car-" + a + ".png";
        a++;
    } else {
        a = 1;
    }
}