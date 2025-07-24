

// List Banner Data
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

// List SubNav Data
let listSubNav = [
  { title: "Sweetbox", key: "sweetbox" },
  { title: "Sweetin", key: "sweetin" },
  { title: "Flan", key: "flan" },
  { title: "Cookies", key: "cookies" },
  { title: "Donuts", key: "donuts" },
  { title: "Healthy", key: "healthy" },
];

let listsubnav = "";
for (let i = 0; i < listSubNav.length; i++) {
  listsubnav += `<li><a href="#" onclick="showProduct_SubNav('${listSubNav[i].key}')">${listSubNav[i].title}</a></li>`;
}

document.querySelector(".subnav").innerHTML = listsubnav;

// Fill data for product page based on subnav selection
function showProduct_SubNav(category) {
  let html = ""; // Reset lại mỗi lần lọc

  for (let i = 0; i < listProduct.length; i++) {
    if (listProduct[i].category === category) {
      html += `
        <div class="product-card-pd">
          <img src="${listProduct[i].img}" alt="pd${i + 1}">
          <div class="title-pd">${listProduct[i].title}</div>
          <div class="price-pd">${listProduct[i].price.toLocaleString()} đ</div>
        </div>
      `;
    }
  }

  document.getElementById("product-center-pd").innerHTML = html;
}

function renderHotProducts() {
  let html = "";
  for (let i = 0; i < listProduct.length; i++) {    
    if (listProduct[i].hot == 1) {
      html += `
        <div class="product">
          <img src="${listProduct[i].img}" alt="${listProduct[i].title}">
          <h3 class="title-product">${listProduct[i].title}</h3>
          <p class="price">${listProduct[i].price.toLocaleString()} đ</p>
        </div>
      `;
    }
  }
  document.querySelector(".hot-products").innerHTML = html;
}
renderHotProducts();