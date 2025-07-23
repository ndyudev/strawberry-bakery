let listProduct = [
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "../assets/images/product/product-1.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "../assets/images/product/product-2.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "../assets/images/product/product-3.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "../assets/images/product/product-4.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "../assets/images/product/product-5.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "../assets/images/product/product-6.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "../assets/images/product/product-7.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "../assets/images/product/product-8.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "../assets/images/product/product-1.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "../assets/images/product/product-2.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "../assets/images/product/product-3.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 0,
    img: "../assets/images/product/product-4.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "../assets/images/product/product-5.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "../assets/images/product/product-6.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "../assets/images/product/product-7.jpg",
  },
  {
    title: "Strawberry",
    price: 354.0,
    view: 1,
    hot: 1,
    img: "../assets/images/product/product-8.jpg",
  },
];

let html = "";

function showProduct() {
  for (let i = 0; i < listProduct.length; i++) {
    html += `<div class="product-card-pd">
    <img src="${listProduct[i].img}" alt="pd${i + 1}">
    <div class="title-pd">${listProduct[i].title}</div>
    <div class="price-pd">${listProduct[i].price.toLocaleString()} đ</div>
  </div>`;
  }

  document.getElementById("product-center-pd").innerHTML = html;
}

showProduct();
