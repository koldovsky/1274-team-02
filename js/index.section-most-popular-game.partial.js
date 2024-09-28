const pages = [
  {
    name: "Xbox One Games",
    categoryImgPath: "img/most-popular-games/xbox_title_picture.svg",
    gamesList: [
      {
        title: "Dark Matter",
        description:
          "Get ready for a unique adventure at the edge of the universe.",
        price: 35,
        imgPath: "img/astronaut/dark-matter/dark-matter.png",
      },
      {
        title: "Fishing Day",
        description:
          "A classic fishing simulator in a modern cartoonish style.",
        price: 25,
        imgPath: "img/fishingday/fishingday.webp",
      },
      {
        title: "Aliens Guest",
        description:
          "Unravel the tangle of secrets of the aliens hiding on the Earth.",
        price: 35,
        imgPath: "img/aliens-guest/aliensguest.webp",
      },
    ],
  },
  {
    name: "iOS & Android Games",
    categoryImgPath: "img/most-popular-games/ios_android_title.svg",
    gamesList: [
      {
        title: "Atlantis Ruins",
        description: "Pirate treasures are hidden in the depths of the ocean.",
        price: 8,
        imgPath: "img/atlantis-ruins/atlantis-ruins.png",
      },
      {
        title: "Feed the Fox",
        description: "Your pet is not a kitty or a puppy but a real wild fox.",
        price: 5,
        imgPath: "img/feed-the-fox/feedthefox.webp",
      },
      {
        title: "Shamans Jungle",
        description: "Make your way through the jungle full of dangers!",
        price: 5,
        imgPath: "img/shamans-jungle/shamansjungle.webp",
      },
    ],
  },
  {
    name: "Nintendo Wii Games",
    categoryImgPath: "img/most-popular-games/nintendo.svg",
    gamesList: [
      {
        title: "Creepy Maid",
        description:
          "Something strange is happening at your mansion this Halloween!",
        price: 15,
        imgPath: "img/creepy maid/creepy-maid.png",
      },
      {
        title: "Witch School",
        description:
          "Grab your broom, cauldron, and welcome to the witch school!",
        price: 25,
        imgPath: "img/witch-school/witchschool.webp",
      },
      {
        title: "To the Moon",
        description:
          "Congrats, you're a captain on a spaceship. Where will you go?",
        price: 35,
        imgPath: "img/to-the-moon/tothemoon.webp",
      },
    ],
  },
];

function renderPages(pages) {
  let pagesHtml = "";
  for (const page of pages) {
    pagesHtml += `
    <section class="most-popular-game-page">
      <header class="most-popular-game-page-title">
        <img class="most-popular-game-xbox-title-picture" 
             src="${page.categoryImgPath}" 
             alt="${page.name}">
        <h3 class="most-popular-game-title-text">${page.name}</h3>
      </header>
      <svg xmlns="http://www.w3.org/2000/svg" width="3000px" height="33" style="width:10%">
        <path d="M0 16.5 L3000 16.5" style="fill:none;stroke:#ffffff;stroke-width:3px"></path>
      </svg>`;
    for (const glist of page.gamesList) {
      pagesHtml += `
      <article class="most-popular-game-card">
          <img class="most-popular-game-card-image" src="${glist.imgPath}"
            alt="${glist.title}">
              <div class="most-popular-game-card-details">
                <p class="most-popular-game-card-title">${glist.title}<span
                  class="underline"></span><span
                  class="most-popular-game-card-price">${glist.price}</span></p>
                <p class="most-popular-game-card-title-text">${glist.description}</p>
              </div>
            </article>`;
    }
    pagesHtml += `</section>`;
  }
  const pagesContainer = document.querySelector('.most-popular-game-pages');
  pagesContainer.innerHTML = pagesHtml;
}

renderPages(pages);