var text = "a computer science student with a passion for tech and innovation.";
var element = document.getElementById("typewriter");
var i = 0;
function type() {
    if (i < text.length) {
        var char = text.charAt(i);
        if (element != null) {
            element.innerHTML += char;
        }
        i++;
        setTimeout(type, 50);
    }
}
window.onload = type;
