
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

const btn = document.getElementById('btn');
let index = 0;
const colors = ['orange', 'white'];
const fontColors = ['white', 'orange'];

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = colors[index];
    btn.style.color = fontColors[index];

    index = index >= colors.length - 1 ? 0 : index + 1;
});