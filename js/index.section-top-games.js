export const games = [
  {
    id: "1",
    title: "Monster Battle",
    subtitle: "Fighting",
    description:
      "Enjoy this fighting game, choose one of the offered teams, and fight with numerous monsters on the main arena of the Arkonium planet.",
    image: "img/top-games/monster-battle.png",
    imageDescription: "Monster Battle.",
    platform: "Android, iOS",
    price: "15",
    rating: "4.5",
  },

  {
    id: "2",
    title: "Fish World",
    subtitle: "Puzzle",
    description:
      "Do you like seas and oceans? If yes, this colorful game with cute seals, turtles, fish and other exotic sea creatures will definitely amuse you!",
    image: "img/top-games/fish-world.webp",
    imageDescription: "Fish World.",
    platform: "Android, iOS",
    price: "15",
    rating: "4.8",
  },

  {
    id: "3",
    title: "Wild West",
    subtitle: "Simulation",
    description:
      "Imagine that you are a resident of a small town in the Wild West. Build your home, farm, and watch out for coyotes, bandits, and drunken cowboys!",
    image: "img/top-games/wild-west.webp",
    imageDescription: "Wild West.",
    platform: "Android, iOS",
    price: "35",
    rating: "4.9",
  }
];

export function renderGame(game) {
  let gameHtml = "";
  gameHtml += `
    <article class="top-games__carousel-games-inner-slide">
        <img class="top-games__carousel-games-inner-slide-game" src="${game.image}"
        alt="${game.imageDescription}" />
        <section class="top-games__carousel-games-inner-slide-container">
        <h3 class="top-games__carousel-games-inner-slide-title">
            ${game.title}
        </h3>
        <p class="top-games__carousel-games-inner-slide-subtitle">${game.subtitle}</p>
        <p class="top-games__carousel-games-inner-slide-text">
            ${game.description}
        </p>
        <div class="top-games__slide-details">
            <div class="top-games__slide-details-item">
            <img class="top-games__slide-details-icon" src="img/top-games/platform.svg" alt="platform" />
            <span class="top-games__slide-details-item-title">Platform:</span><span
                class="top-games__slide-details-item-text">${game.platform}</span>
            </div>
            <div class="top-games__slide-details-item">
            <img class="top-games__slide-details-icon" src="img/top-games/price.svg" alt="price" />
            <span class="top-games__slide-details-item-title">Price:</span><span
                class="top-games__slide-details-item-text">$${game.price}</span>
            </div>
            <div class="top-games__slide-details-item">
            <img class="top-games__slide-details-icon" src="img/top-games/rating.svg" alt="rating" />
            <span class="top-games__slide-details-item-title">Rating:</span><span
                class="top-games__slide-details-item-text">${game.rating}</span>
            </div>
        </div>
        <div class="top-games__download">
            <p class="top-games__download-text">
            Download now:
            </p>
            <div class="top-games__download-links">
            <img class="top-games__download-link" src="img/top-games/app-store.svg" alt="App Store" />
            <img class="top-games__download-link" src="img/top-games/google-play.svg" alt="Google Play" />
            </div>
        </div>
    </section>
    </article>
    `;
  const topGameContainer = document.querySelector(
    ".top-games__carousel-games-content"
  );
  topGameContainer.innerHTML = gameHtml;
}

renderGame(games[0]);

