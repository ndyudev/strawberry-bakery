let listProductHot = [
  { id: 12, title: "Strawberry Shortcake", price: 320000, category: "cakes", view: 1, hot: 1, img: "./assets/images/product/cookies/cookies-4.jpg" },
  { id: 7, title: "Strawberry Cheese Mousse", price: 350000, category: "cakes", view: 1, hot: 0, img: "./assets/images/product/product-2.jpg" },
  { id: 15, title: "Hazelnut Cookies", price: 115000, category: "cookies", view: 1, hot: 1, img: "./assets/images/product/cookies/cookies-7.jpg" },
  { id: 16, title: "Coconut Cookies", price: 95000, category: "cookies", view: 1, hot: 0, img: "./assets/images/product/cookies/cookies-8.jpg" },
  { id: 22, title: "Sweetin Caramel Mousse", price: 255000, category: "sweetin", view: 1, hot: 1, img: "./assets/images/product/sweetin/sweetin-5.jpg" },
  { id: 23, title: "Sweetin Berry Mix", price: 265000, category: "sweetin", view: 1, hot: 0, img: "./assets/images/product/sweetin/sweetin-6.jpg" },
  { id: 30, title: "Healthy Mix Nuts", price: 119000, category: "healthy", view: 1, hot: 1, img: "./assets/images/product/healthy/healthy-7.jpg" },
  { id: 31, title: "Bánh Yến Mạch", price: 79000, category: "healthy", view: 1, hot: 0, img: "./assets/images/product/healthy/healthy-8.jpg" },
];

function renderHotProducts() {
  let hotProduct = "";
  for (let i = 0; i < listProductHot.length; i++) {    
    if (listProductHot[i].hot == 1) {
      hotProduct += `
        <a href="product-detail.html?id=${listProductHot[i].id}" class="product-link">
          <div class="product">   
            <img src="${listProductHot[i].img}" alt="${listProductHot[i].title}">
            <h3 class="title-product">${listProductHot[i].title}</h3>
            <p class="price">${listProductHot[i].price.toLocaleString()} đ</p>
          </div>
        </a>
      `;
    }
  }
  document.querySelector(".hot-products").innerHTML = hotProduct;
}
renderHotProducts();

