const title = document.querySelector(".join-the-game__title");
const points = document.querySelector(".join-the-game__point");
const subtitle = document.querySelector(".join-the-game__subtitle");

const titleColor = ["#c1305c", "white", "#fcee79", "#a94b9c"];

const pointsCount = ["●", "● ●", "● ● ●"];

const subtitleText =
  "Want to be the first to know about our releases and discounts? Subscribeto our newsletter! ";

function changeColor(arr, celtor) {
  celtor.style.color = arr[Math.floor(Math.random() * arr.length)];
}

let currentIndexPoints = 0;

function changePoints(arr) {
  points.innerText = arr[currentIndexPoints++];
  if (currentIndexPoints >= arr.length) currentIndexPoints = 0;
}

let currentIndexWords = 999;
const wordsHolder = 50;

function writeSubtitleWords(arr) {
  if (currentIndexWords >= arr.length + wordsHolder) {
    currentIndexWords = 0;
    subtitle.innerText = "";
  } else if (currentIndexWords >= arr.length) currentIndexWords++;
  else subtitle.innerHTML += arr[currentIndexWords++];
}

setInterval(() => changeColor(titleColor, title), 900);
setInterval(() => changePoints(pointsCount), 700);
setInterval(() => writeSubtitleWords(subtitleText), 20);

const modal = document.querySelector(".modal-join-the-game");
const btnSubmit = document.querySelector(".join-the-game__submit");
const btnClose = document.querySelector(".modal-join-the-game__button");

const emailInput = document.querySelector(".join-the-game__email");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(emailValue)) {
    modal.classList.toggle("modal-join-the-game--visible");
  } else {
  }
});

btnClose.addEventListener("click", () => {
  modal.classList.remove("modal-join-the-game--visible");
});
