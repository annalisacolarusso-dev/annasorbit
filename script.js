const hero = document.getElementById("hero");
const launchBtn = document.getElementById("launch-btn");
const solarSystem = document.getElementById("solar-system");
const levelsWrapper = document.getElementById("levels");
const warpOverlay = document.querySelector(".warp-overlay");
const topNav = document.getElementById("top-nav");

const planets = document.querySelectorAll(".planet");
const backButtons = document.querySelectorAll(".back-btn");
const navLinks = document.querySelectorAll(".nav-link");

// Utility: set nav attiva
function setActiveNav(target) {
  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.target === target);
  });
}

// Mostra mappa
function showMap() {
  levelsWrapper.classList.add("hidden");
  solarSystem.classList.remove("hidden");
  setActiveNav("map");
  window.scrollTo({ top: 0, behavior: "instant" });
}

// Mostra un livello
function showLevel(id) {
  solarSystem.classList.add("hidden");
  levelsWrapper.classList.remove("hidden");

  const allLevels = levelsWrapper.querySelectorAll(".level");
  allLevels.forEach(lv => {
    lv.style.display = (lv.id === id) ? "block" : "none";
  });

  setActiveNav(id);
  window.scrollTo({ top: 0, behavior: "instant" });
}

// Launch → entra nel sistema
launchBtn.addEventListener("click", () => {
  document.body.classList.add("warp-active");

  setTimeout(() => {
    hero.classList.add("hidden");
    solarSystem.classList.remove("hidden");
    topNav.classList.remove("hidden");
    document.body.classList.remove("warp-active");
    showMap();
  }, 800);
});

// Click sui pianeti → warp nel livello
planets.forEach(planet => {
  planet.addEventListener("click", () => {
    const targetId = planet.getAttribute("data-target");

    document.body.classList.add("warp-active");
    setTimeout(() => {
      showLevel(targetId);
      document.body.classList.remove("warp-active");
    }, 800);
  });
});

// Nav bar → map o livelli
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.dataset.target;

    document.body.classList.add("warp-active");
    setTimeout(() => {
      if (target === "map") {
        showMap();
      } else {
        showLevel(target);
      }
      document.body.classList.remove("warp-active");
    }, 700);
  });
});

// Back buttons → map
backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.add("warp-active");
    setTimeout(() => {
      showMap();
      document.body.classList.remove("warp-active");
    }, 700);
  });
});
