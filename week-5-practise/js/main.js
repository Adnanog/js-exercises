var jumbotron = document.querySelector(".jumbotron");
var donateBike = document.querySelector(".btn.btn-primary.btn-lrg");
var blueButton = document.querySelector("#blueBtn");
var voluntary = document.querySelector(".btn.btn-secondary.btn-lrg");
var orangeButton = document.querySelector("#orangeBtn");
var greenButton = document.querySelector("#greenBtn");

function themeOne() {
  jumbotron.style.backgroundColor = "#588fbd";
  donateBike.style.backgroundColor = "#ffa500";
  voluntary.style.backgroundColor = "black";
  voluntary.style.color = "white";
}
blueButton.addEventListener("click", themeOne);

function themeTwo() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateBike.style.backgroundColor = "#5751fd";
  voluntary.style.backgroundColor = "#31b0d5";
  voluntary.style.color = "white";
}
orangeButton.addEventListener("click", themeTwo);

function themeThree() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateBike.style.backgroundColor = "black";
  voluntary.style.backgroundColor = "#8c9c08";
  voluntary.style.color = "white";
}
greenButton.addEventListener("click", themeThree);

var email = document.querySelector("#exampleInputEmail1");
var newName = document.querySelector("#example-text-input");
var text = document.querySelector("#exampleTextarea");
var submitBtn = document.querySelector("#submitBtn");
var allInputs = [email, newName, text];

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  allInputs.forEach(function(element) {
    console.log(element.value);

    if (element.value.length > 0 && element[0].value.includes("@")) {
      element.style.backgroundColor = "green";
    } else {
      element.style.backgroundColor = "red";
    }
  });
});

function allInputsAreValid(element) {
  return element.value.length > 0;
}
var allInputsAretrue = allInputs.every(allInputsAreValid);
if (allInputsAretrue === true) {
  alert("Thank you for filling out the form");
  allInputs.forEach(function(element) {
    element.value = "";
  });
}
