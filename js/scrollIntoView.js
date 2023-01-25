const toProject = document.getElementById("project");
const projectBtn = document.getElementById("projectBtn");

projectBtn.addEventListener('click', function () {
    toProject.scrollIntoView({behavior: "smooth"});
});