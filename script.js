const projectsButton = document.getElementById("projectsButton");
const projectCard = document.getElementById("projectCard");
const closeButton = document.getElementById("closeButton");

projectsButton.addEventListener("click", function () {
  projectCard.style.display = "block";
});

closeButton.addEventListener("click", function () {
  projectCard.style.display = "none";
});
