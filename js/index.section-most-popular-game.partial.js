const responce = await fetch("api/pages.json");
const pages = await responce.json();

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
  const pagesContainer = document.querySelector(".most-popular-game-pages");
  pagesContainer.innerHTML = pagesHtml;
}

renderPages(pages);
