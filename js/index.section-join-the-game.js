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
  const icon = document.querySelector(".modal-join-the-game__icon");
  const title = document.querySelector(".modal-join-the-game__title");
  const message = document.querySelector(".modal-join-the-game__message");

  if (emailPattern.test(emailValue)) {
    icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 32"><g><path d="M18.32 32c-1.51 0-2.93-.62-3.997-1.746-.43-.455-.43-1.19 0-1.645.43-.455 1.128-.455 1.558 0 .653.686 1.52 1.065 2.44 1.065.92 0 1.787-.38 2.438-1.066l19.03-20.077c.652-.687 1.01-1.6 1.01-2.572 0-.97-.358-1.885-1.01-2.572-1.344-1.418-3.532-1.418-4.876 0L24.31 14.573c-.43.454-1.13.454-1.56 0-.43-.454-.43-1.19 0-1.644L33.354 1.743c2.204-2.325 5.79-2.325 7.994 0 2.204 2.325 2.204 6.108 0 8.433l-19.03 20.077C21.25 31.38 19.83 32 18.32 32z"></path><path fill-opacity=".359" d="M24 26.134l-3.295 3.44c-1.82 1.9-4.77 1.9-6.59 0L2.365 17.307c-1.82-1.9-1.82-4.98 0-6.88 1.82-1.9 4.77-1.9 6.59 0L24 26.133z"></path><path d="M18.053 32c-1.592 0-3.088-.645-4.214-1.817L1.742 17.59c-2.324-2.42-2.324-6.354 0-8.773C2.868 7.645 4.365 7 5.957 7c1.592 0 3.088.645 4.213 1.817L25.66 24.94c.453.473.453 1.24 0 1.712l-3.393 3.53C21.142 31.356 19.645 32 18.053 32zM5.957 9.42c-.97 0-1.884.393-2.57 1.108-1.42 1.475-1.42 3.876 0 5.352l12.096 12.592c.686.715 1.6 1.11 2.57 1.11.97 0 1.884-.395 2.57-1.11l2.572-2.676L8.527 10.528c-.686-.715-1.6-1.11-2.57-1.11z"></path></g></svg>
    `;
    title.innerHTML = `Thank you!`;
    title.style.color = "green";
    message.innerHTML = `We will contact you shortly.`;
    modal.classList.toggle("modal-join-the-game--visible");
  } else {
    icon.innerHTML = `
    <svg viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-298.000000, -149.000000)" fill="#D9534C"><g transform="translate(44.000000, 136.000000)"><g transform="translate(7.000000, 13.000000)"><g transform="translate(247.000000, 0.000000)"><path d="M16.7908408,21.3903124 L17.8543746,22.4173551 L8.63769372,31.634036 C6.90580338,33.3659263 4.09785434,33.3659263 2.36596401,31.634036 C0.634073669,29.9021457 0.634073669,27.0941966 2.36596401,25.3623063 L10.6999804,17.0282899 C10.9886287,16.7396415 11.4566203,16.7396415 11.7452686,17.0282899 C12.033917,17.3169383 12.033917,17.7849298 11.7452686,18.0735782 L3.41125229,26.4075946 C2.25665873,27.5621881 2.25665873,29.4341541 3.41125229,30.5887477 C4.56584585,31.7433413 6.43781187,31.7433413 7.59240543,30.5887477 L16.7908408,21.3903124 Z M21.6688687,16.5122844 L30.5887477,7.59240543 C31.7433413,6.43781187 31.7433413,4.56584585 30.5887477,3.41125229 C29.4341541,2.25665873 27.5621881,2.25665873 26.4075946,3.41125229 L21.3007062,8.51814066 C21.0120578,8.80678905 20.5440663,8.80678905 20.2554179,8.51814066 C19.9667695,8.22949227 19.9667695,7.76150076 20.2554179,7.47285237 L25.3623063,2.36596401 C27.0941966,0.634073669 29.9021457,0.634073669 31.634036,2.36596401 C33.3659263,4.09785434 33.3659263,6.90580338 31.634036,8.63769372 L22.7324026,17.5393271 L21.6688687,16.5122844 Z" id="Combined-Shape" fill-rule="nonzero"></path><path d="M13.0289604,30.6069977 C13.0289604,31.3998259 13.0289604,32.192654 13.0289604,32.9854821 L13.0289604,32.9854821 C13.0289604,35.0265345 14.6835602,36.6811343 16.7246126,36.6811343 L16.7246126,36.6811343 C18.7656649,36.6811343 20.4202647,35.0265345 20.4202647,32.9854821 L20.4202647,0.463742998 C20.4202647,-1.57730934 18.7656649,-3.23190918 16.7246126,-3.23190918 L16.7246126,-3.23190918 C14.6835602,-3.23190918 13.0289604,-1.57730934 13.0289604,0.463742998 L13.0289604,25.4558746 C13.0289604,26.8652445 13.0289604,28.5822856 13.0289604,30.6069977 Z" id="Path-2-Copy-2" stroke="#D9534C" stroke-width="1.47826087" fill-opacity="0.36" stroke-linecap="round" transform="translate(16.724613, 16.724613) rotate(-225.000000) translate(-16.724613, -16.724613) "></path></g></g></g></g></g></svg>
    `;
    title.innerHTML = `Can't send form.`;
    title.style.color = "red";
    message.innerHTML = `Please write correct email.`;
    modal.classList.toggle("modal-join-the-game--visible");
  }
});

btnClose.addEventListener("click", () => {
  modal.classList.remove("modal-join-the-game--visible");
});
