// Function to handle card rotation
function rotateCard(cardId, rotateValue) {
  const card = document.getElementById(cardId);
  card.style.transform = `rotateY(${rotateValue}deg)`;
}

// Addressing Your Concerns js
["card-1", "card-2", "card-3"].forEach((id) => {
  document
    .getElementById(id)
    .addEventListener("mouseover", () => rotateCard(id, 180));
  document
    .getElementById(id)
    .addEventListener("mouseleave", () => rotateCard(id, 0));
});

// Function to handle Emphasize Unique Benefits rotation
function emphasizeRotateCard(cardId, rotateValue) {
  const card = document.getElementById(cardId);
  card.style.transform = `rotateY(${rotateValue}deg)`;
}

[
  "Emphasize-card-1",
  "Emphasize-card-2",
  "Emphasize-card-3",
  "Emphasize-card-4",
  "Emphasize-card-5",
].forEach((id) => {
  document
    .getElementById(id)
    .addEventListener("mouseover", () => emphasizeRotateCard(id, 180));
  document
    .getElementById(id)
    .addEventListener("mouseleave", () => emphasizeRotateCard(id, 0));
});

