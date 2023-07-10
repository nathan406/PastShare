
// filter content
document.getElementById("toggleButton").addEventListener("click", function () {
  var contentDiv = document.getElementById("content");
  contentDiv.style.display = (contentDiv.style.display === "none") ? "block" : "none";
});

document.getElementById("closeButton").addEventListener("click", function() {
  var contentDiv = document.getElementById("content");
  contentDiv.style.display = "none";
});

// support button

function toggleColor() {
  var button = document.querySelector('.supportbtn');
  button.classList.toggle('clicked');
}