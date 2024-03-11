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
document.getElementById("overlay-card-1").addEventListener("mouseenter", () => {
  const card = document.getElementById("overlay-layer-1");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-1"
  );
  card.style.transform = "scale(100%)";

  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  card.style.transition = "transform 1s";
  CommercialServiceTitle.style.display = "none";
});
document.getElementById("overlay-card-1").addEventListener("mouseleave", () => {
  const card = document.getElementById("overlay-layer-1");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-1"
  );
  card.style.transform = "scale(-0%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "flex";
});
document.getElementById("overlay-card-2").addEventListener("mouseenter", () => {
  const card = document.getElementById("overlay-layer-2");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-2"
  );
  card.style.transform = "scale(100%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "none";
});
document.getElementById("overlay-card-2").addEventListener("mouseleave", () => {
  const card = document.getElementById("overlay-layer-2");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-2"
  );
  card.style.transform = "scale(-0%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "flex";
});
document.getElementById("overlay-card-3").addEventListener("mouseenter", () => {
  const card = document.getElementById("overlay-layer-3");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-3"
  );
  card.style.transform = "scale(100%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "none";
});
document.getElementById("overlay-card-3").addEventListener("mouseleave", () => {
  const card = document.getElementById("overlay-layer-3");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-3"
  );
  card.style.transform = "scale(-0%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "flex";
});
document.getElementById("overlay-card-4").addEventListener("mouseenter", () => {
  const card = document.getElementById("overlay-layer-4");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-4"
  );
  card.style.transform = "scale(100%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "none";
});
document.getElementById("overlay-card-4").addEventListener("mouseleave", () => {
  const card = document.getElementById("overlay-layer-4");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-4"
  );
  card.style.transform = "scale(-0%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "flex";
});
document.getElementById("overlay-card-5").addEventListener("mouseenter", () => {
  const card = document.getElementById("overlay-layer-5");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-5"
  );
  card.style.transform = "scale(100%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "none";
});
document.getElementById("overlay-card-5").addEventListener("mouseleave", () => {
  const card = document.getElementById("overlay-layer-5");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-5"
  );
  card.style.transform = "scale(-0%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "flex";
});
document.getElementById("overlay-card-6").addEventListener("mouseenter", () => {
  const card = document.getElementById("overlay-layer-6");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-6"
  );
  card.style.transform = "scale(100%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "none";
});
document.getElementById("overlay-card-6").addEventListener("mouseleave", () => {
  const card = document.getElementById("overlay-layer-6");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-6"
  );
  card.style.transform = "scale(-0%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "flex";
});
document.getElementById("overlay-card-7").addEventListener("mouseenter", () => {
  const card = document.getElementById("overlay-layer-7");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-7"
  );
  card.style.transform = "scale(100%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "none";
});
document.getElementById("overlay-card-7").addEventListener("mouseleave", () => {
  const card = document.getElementById("overlay-layer-7");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-7"
  );
  card.style.transform = "scale(-0%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "flex";
});
document.getElementById("overlay-card-8").addEventListener("mouseenter", () => {
  const card = document.getElementById("overlay-layer-8");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-8"
  );
  card.style.transform = "scale(100%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "none";
});
document.getElementById("overlay-card-8").addEventListener("mouseleave", () => {
  const card = document.getElementById("overlay-layer-8");
  const CommercialServiceTitle = document.getElementById(
    "Commercial-service-title-8"
  );
  card.style.transform = "scale(-0%)";
  card.style.transition = "transform 1s";
  card.style.clipPath = "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)";
  card.style.borderLeft = "10px solid #3D6CE9";
  card.style.borderRight = "10px solid #3D6CE9";
  CommercialServiceTitle.style.display = "flex";
});
