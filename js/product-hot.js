let listProduct = [
  {
    title: "SWEETBOX SIGNATURE (Xanh) – Hộp 8 vị",
    price: 295000,
    view: 1,
    hot: 1,
    category: "sweetbox",
    img: "../assets/images/product/product-1.jpg",
  },
  {
    title: "SWEETBOX SIGNATURE (Xanh) – Hộp 16 vị",
    price: 495000,
    view: 1,
    hot: 1,
    category: "sweetbox",
    img: "../assets/images/product/product-2.jpg",
  },
  {
    title: "SWEETBOX SIGNATURE (Hồng) – Hộp 16 vị",
    price: 495000,
    view: 1,
    hot: 1,
    category: "sweetbox",
    img: "../assets/images/product/product-3.jpg",
  },
  {
    title: "SWEETBOX SIGNATURE (Xanh) – Hộp 12 vị",
    price: 415000,
    view: 1,
    hot: 1,
    category: "sweetbox",
    img: "../assets/images/product/product-4.jpg",
  }
];

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

