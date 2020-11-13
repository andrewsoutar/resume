const $ = document.querySelector.bind(document);

function setStylesheet() {
  $("#stylesheet").href = $("#stylesheet-select").value;
}

document.addEventListener("DOMContentLoaded", e => {
  $("#stylesheet-select").value = new URLSearchParams(window.location.search).get("style") || "resume.css";
  setStylesheet();
  $("#stylesheet-select").addEventListener("change", setStylesheet);
});
