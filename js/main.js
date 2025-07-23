import './data-pproduct.js';
import './slider-banner.js';
import './product-hot.js';
import './subnav-data.js';
import './product-list.js';

// ==================== Product List ====================
const listProduct = [
  // Các sản phẩm thường
  {
    title: "Strawberry",
    price: 354000,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-1.jpg",
  },
  {
    title: "Strawberry",
    price: 354000,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-2.jpg",
  },
  {
    title: "Strawberry",
    price: 354000,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-3.jpg",
  },
  {
    title: "Strawberry",
    price: 354000,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-4.jpg",
  },

  // Các sản phẩm hot
  {
    title: "Strawberry",
    price: 354000,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-5.jpg",
  },
  {
    title: "Strawberry",
    price: 354000,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-6.jpg",
  },
  {
    title: "Strawberry",
    price: 354000,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-7.jpg",
  },
  {
    title: "Strawberry",
    price: 354000,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-8.jpg",
  },
];

// ==================== Render Hot Products ====================
function renderHotProducts() {
  let html = "";

  listProduct.forEach((item) => {
    if (item.hot === 1) {
      html += `
        <div class="product">
          <img src="${item.img}" alt="${item.title}">
          <h3 class="title-product">${item.title}</h3>
          <p class="price">${item.price.toLocaleString()} đ</p>
        </div>
      `;
    }
  });

  document.querySelector(".hot-products").innerHTML = html;
}

renderHotProducts();

// ==================== Show All Products ====================
function showProduct() {
  let html = "";

  listProduct.forEach((item, index) => {
    html += `
      <div class="product-card-pd">
        <img src="${item.img}" alt="pd${index + 1}">
        <div class="title-pd">${item.title}</div>
        <div class="price-pd">${item.price.toLocaleString()} đ</div>
      </div>
    `;
  });

  const container = document.getElementById("product-center-pd");
  if (container) container.innerHTML = html;
}

showProduct();

// ==================== Banner Slider ====================
const listBanner = [
  { image: "./assets/images/banner/strawberry-bakery-banner.png" },
  { image: "./assets/images/banner/strawberry-bakery-banner-2.png" },
  { image: "./assets/images/banner/strawberry-bakery-banner-3.png" },
];

let currentBanner = 0;

function renderBanner() {
  const bannerHTML = `
    <img src="${listBanner[currentBanner].image}" alt="Strawberry Bakery Banner" />
  `;
  document.querySelector(".banner-img").innerHTML = bannerHTML;
}

function nextBanner() {
  currentBanner = (currentBanner + 1) % listBanner.length;
  renderBanner();
}

function prevBanner() {
  currentBanner = (currentBanner - 1 + listBanner.length) % listBanner.length;
  renderBanner();
}

function initBanner() {
  renderBanner();
  setInterval(nextBanner, 3000); // Auto slide every 3s
}

initBanner();

// ==================== Toggle Menu ====================
const toggleBtn = document.querySelector(".menu-toggle i");
const navMenu = document.querySelector(".nav ul");

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggleBtn.classList.toggle("fa-bars");
    toggleBtn.classList.toggle("fa-xmark");
  });
}

// ==================== Sub Navigation ====================
const listSubNav = [
  { title: "Sweetbox" },
  { title: "Cake" },
  { title: "Pastry" },
  { title: "Cookies" },
  { title: "Donuts" },
];

function renderSubNav() {
  let html = "";

  listSubNav.forEach((item) => {
    html += `<li><a href="#">${item.title}</a></li>`;
  });

  const subnav = document.querySelector(".subnav");
  if (subnav) subnav.innerHTML = html;
}

renderSubNav();
