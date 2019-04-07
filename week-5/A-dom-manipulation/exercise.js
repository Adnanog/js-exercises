/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var changeColor = document.querySelector("body");
changeColor.style.backgroundColor = "lightgreen";

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function alertSomething() {
  alert("Thank you fot visiting Bilkes for refugees");
}
var newBotton = document.querySelector("#alertBtn");
newBotton.addEventListener("click", alertSomething);

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
function addText() {
  var buttons = document.querySelector(".buttons");
  var paragraph = document.createElement("p");
  buttons.appendChild(paragraph);
  paragraph.innerText = "Read more below";
}
var addSomeText = document.querySelector("#addTextBtn");
addSomeText.addEventListener("click", addText);
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var links = document.querySelectorAll("a");
var largerLinks = document.querySelector("#largerLinksBtn");
function biggerSize() {
  links.forEach(function(link) {
    link.style.fontSize = "25px";
  });
}
largerLinks.addEventListener("click", biggerSize);
