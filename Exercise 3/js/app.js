document.getElementById("create").addEventListener("click", function() {
  document.getElementsByClassName("container")[0].innerHTML = '<div class="card"><p>Description</p><div class="card-footer"><button onclick="document.querySelector(".card").remove()">Remove Card</button></div></div>';
});
