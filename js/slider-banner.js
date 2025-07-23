let listBanner = [
  { image: "../assets/images/banner/strawberry-bakery-banner.png" },
  { image: "../assets/images/banner/strawberry-bakery-banner-2.png" },
  { image: "../assets/images/banner/strawberry-bakery-banner-3.png" },
];

let i = 0;

function renderBanner() {
  const banner = `<img
    src="${listBanner[i].image}"
    alt="Strawberry Bakery Banner"
  />`;
  document.querySelector(".banner-img").innerHTML = banner;
}

function nextBanner() {
  i = (i + 1) % listBanner.length;
  renderBanner();
}

function prevBanner() {
  i = (i - 1 + listBanner.length) % listBanner.length;
  renderBanner();
}

function initBanner() {
  i = 0;
  renderBanner();
}
// Cuối file slider-banner.js
initBanner();

setInterval(nextBanner, 3000);

