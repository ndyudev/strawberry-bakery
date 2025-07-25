let listBanner = [
  { image: "../assets/images/banner/strawberry-bakery-banner.png" },
  { image: "../assets/images/banner/strawberry-bakery-banner-2.png" },
  { image: "../assets/images/banner/strawberry-bakery-banner-3.png" },
];

let i_banner = 0;

function renderBanner() {
  const banner = `<img
    src="${listBanner[i_banner].image}"
    alt="Strawberry Bakery Banner"
  />`;
  document.querySelector(".banner-img").innerHTML = banner;
}

function nextBanner() {
  i_banner = (i_banner + 1) % listBanner.length;
  renderBanner();
}

function prevBanner() {
  i_banner = (i_banner - 1 + listBanner.length) % listBanner.length;
  renderBanner();
}

function initBanner() {
  i_banner = 0;
  renderBanner();
}
// Cuối file slider-banner.js
initBanner();

setInterval(nextBanner, 3000);

