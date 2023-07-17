
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

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelectorAll('.btn');
  let index = 0;
  const colors = ['orange', 'white'];
  const fontColors = ['white', 'orange'];

  btn.forEach((button) => {
    button.addEventListener('click', function onClick() {
      button.style.backgroundColor = colors[index];
      button.style.color = fontColors[index];

      index = index >= colors.length - 1 ? 0 : index + 1;
    });
  });
});



// dropdown
function toggleDropdown() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('active');
}