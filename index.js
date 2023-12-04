function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHome() {
  hide("skills");
  hide("projects");
  hide("languages");

  var page = document.getElementById("home");
  page.style.display = "block";
}

function showSkills() {
  hide("home");
  hide("projects");
  hide("languages");

  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showProjets() {
  hide("home");
  hide("skills");
  hide("languages");

  var page = document.getElementById("projects");
  page.style.display = "block";
}

function showLanguages() {
  hide("home");
  hide("skills");
  hide("projects");

  var page = document.getElementById("languages");
  page.style.display = "block";
}

/*
function showRubik () {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";

  var page = document.getElementById("rubik");
  page.style.display = "block";
}
*/
