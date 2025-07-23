let listProduct = [
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-1.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-2.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-3.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-4.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-5.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-6.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-7.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-8.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-1.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-2.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-3.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "./assets/images/product/product-4.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-5.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-6.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-7.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "./assets/images/product/product-8.jpg",
  },
];
let listpage = `<ul>
                <li>
                  <a href="#" class="home">
                    <i class="fa-solid fa-house-chimney"></i>
                  </a>
                </li>
                <li><a href="#" class="pagination-dot"> 0 </a></li>
              </ul>`;
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

