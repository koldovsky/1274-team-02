function init() {
  import("./index.section-most-popular-game.partial.js");
  import("./index.section-top-games-carousel.js");
  import("./index.section-top-games.js");
  import("./index.section-join-the-game.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
