const $ = document.querySelector.bind(document);

$("#stylesheet-select").addEventListener("change", e => {
  $("#stylesheet").href = e.target.value;
});
