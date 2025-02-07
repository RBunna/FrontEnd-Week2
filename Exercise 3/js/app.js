const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

document.getElementById("create").addEventListener("click", function() {
  const newCard = document.createElement('div');
  newCard.classList.add("card");
  newCard.style.backgroundColor = randomColor();

  const description = document.createElement("p");
  description.textContent = "Description";

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Card";
  removeButton.addEventListener("click", () => {
    newCard.remove();
  });

  cardFooter.appendChild(removeButton);
  newCard.appendChild(description);
  newCard.appendChild(cardFooter);

  document.getElementsByClassName("container")[0].appendChild(newCard);
});
