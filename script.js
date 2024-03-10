// addressing Your Concerns js start
document.getElementById("card-1").addEventListener("mouseover", () => {
  const card = document.getElementById("card-1");
  card.style.transform = "rotateY(180deg)";
});
document.getElementById("card-1").addEventListener("mouseleave", () => {
  const card = document.getElementById("card-1");
  card.style.transform = "rotateY(0deg)";
});
document.getElementById("card-2").addEventListener("mouseover", () => {
  const card = document.getElementById("card-2");
  card.style.transform = "rotateY(180deg)";
});
document.getElementById("card-2").addEventListener("mouseleave", () => {
  const card = document.getElementById("card-2");
  card.style.transform = "rotateY(0deg)";
});
document.getElementById("card-3").addEventListener("mouseover", () => {
  const card = document.getElementById("card-3");
  card.style.transform = "rotateY(180deg)";
});
document.getElementById("card-3").addEventListener("mouseleave", () => {
  const card = document.getElementById("card-3");
  card.style.transform = "rotateY(0deg)";
});
// addressing Your Concerns js end

// Emphasize Unique Benefits js start
document
  .getElementById("Emphasize-card-1")
  .addEventListener("mouseover", () => {
    const card = document.getElementById("Emphasize-card-1");
    card.style.transform = "rotateY(180deg)";
  });
document
  .getElementById("Emphasize-card-1")
  .addEventListener("mouseleave", () => {
    const card = document.getElementById("Emphasize-card-1");
    card.style.transform = "rotateY(0deg)";
  });
document
  .getElementById("Emphasize-card-2")
  .addEventListener("mouseover", () => {
    const card = document.getElementById("Emphasize-card-2");
    card.style.transform = "rotateY(180deg)";
  });
document
  .getElementById("Emphasize-card-2")
  .addEventListener("mouseleave", () => {
    const card = document.getElementById("Emphasize-card-2");
    card.style.transform = "rotateY(0deg)";
  });
document
  .getElementById("Emphasize-card-3")
  .addEventListener("mouseover", () => {
    const card = document.getElementById("Emphasize-card-3");
    card.style.transform = "rotateY(180deg)";
  });
document
  .getElementById("Emphasize-card-3")
  .addEventListener("mouseleave", () => {
    const card = document.getElementById("Emphasize-card-3");
    card.style.transform = "rotateY(0deg)";
  });
document
  .getElementById("Emphasize-card-4")
  .addEventListener("mouseover", () => {
    const card = document.getElementById("Emphasize-card-4");
    card.style.transform = "rotateY(180deg)";
  });
document
  .getElementById("Emphasize-card-4")
  .addEventListener("mouseleave", () => {
    const card = document.getElementById("Emphasize-card-4");
    card.style.transform = "rotateY(0deg)";
  });
document
  .getElementById("Emphasize-card-5")
  .addEventListener("mouseover", () => {
    const card = document.getElementById("Emphasize-card-5");
    card.style.transform = "rotateY(180deg)";
  });
document
  .getElementById("Emphasize-card-5")
  .addEventListener("mouseleave", () => {
    const card = document.getElementById("Emphasize-card-5");
    card.style.transform = "rotateY(0deg)";
  });
// Emphasize Unique Benefits js end

// overlay card image zoom in effect
document.getElementById("overLay-card").addEventListener("mouseenter", () => {
  const card = document.getElementById("overlay-layer");
  card.style.transform = "scale(100%)";
  card.style.transition = "transform 1s";
});
document.getElementById("overLay-card").addEventListener("mouseleave", () => {
  const card = document.getElementById("overlay-layer");
  card.style.transform = "scale(-0%)";
  card.style.transition = "transform 1s";
});
