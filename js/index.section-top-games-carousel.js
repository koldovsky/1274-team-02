import { games, renderGame } from "./index.section-top-games.js";

let currentSlide = 0;
renderGame(games[currentSlide]);

function nextSlide() {
  currentSlide = (currentSlide + 1) % games.length;
  renderGame(games[currentSlide]);
  updateDots();
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + games.length) % games.length; 
  renderGame(games[currentSlide]);
  updateDots();
}

const buttonNext = document.querySelector(".top-games__carousel-games-button-right");
const buttonPrevious = document.querySelector(".top-games__carousel-games-button-left");

buttonNext.addEventListener("click", nextSlide);
buttonPrevious.addEventListener("click", previousSlide);

updateDots();