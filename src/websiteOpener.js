var form;
var successText;
var time;
var link;
var error;


window.onload = function openWebsite() {
    form = document.getElementById("form");
    successText = document.getElementById("successText");
    time = document.getElementById("timeField");
    link = document.getElementById("linkField");
    error = document.getElementById("error");
};

function main() {
    formOut();
    textIn();
}

function formOut() {
    form.style.animationTimingFunction = "ease-out";
    form.style.animationName = "Out";
    form.style.left = "110%";
    form.style.right = "-40%";
}

function textIn() { // TODO find solution to delay animation
    successText.style.animationTimingFunction = "ease-in";
    successText.style.animationName = "In";
    successText.innerHTML = "Timer is set for 13:37";
    successText.style.left = "35%";
    successText.style.right = "35%";
}

function validate() {

}

function wait() {

}

function openLink() {
    window.open();
}