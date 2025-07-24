let listProduct = [
  // Sweetbox
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
    hot: 0,
    category: "sweetbox",
    img: "../assets/images/product/product-3.jpg",
  },
  {
    title: "SWEETBOX SIGNATURE (Xanh) – Hộp 12 vị",
    price: 415000,
    view: 1,
    hot: 0,
    category: "sweetbox",
    img: "../assets/images/product/product-4.jpg",
  },
  {
    title: "SWEETBOX SIGNATURE (HỒNG) – Hộp 8 vị",
    price: 295000,
    view: 1,
    hot: 0,
    category: "sweetbox",
    img: "../assets/images/product/product-5.jpg",
  },
  {
    title: "SWEETBOX LOVE – Hộp 8 vị",
    price: 295000,
    view: 1,
    hot: 1,
    category: "sweetbox",
    img: "../assets/images/product/product-6.jpg",
  },
  {
    title: "SWEETBOX LOVE – Hộp 16 vị",
    price: 495000,
    view: 1,
    hot: 0,
    category: "sweetbox",
    img: "../assets/images/product/product-7.jpg",
  },
  {
    title: "SWEETBOX LOVE – Hộp 12 vị",
    price: 415000,
    view: 1,
    hot: 0,
    category: "sweetbox",
    img: "../assets/images/product/product-8.jpg",
  },
  {
    title: "SWEETBOX LOVE GARDEN",
    price: 595000,
    view: 1,
    hot: 1,
    category: "sweetbox",
    img: "../assets/images/product/product-1.jpg",
  },
  {
    title: "SWEETBOX LOVE GARDEN PREMIUM",
    price: 695000,
    view: 1,
    hot: 0,
    category: "sweetbox",
    img: "../assets/images/product/product-2.jpg",
  },

  // Sweetin
  {
    title: "Sweetin – Chocolate Ruby",
    price: 395000,
    view: 1,
    hot: 1,
    category: "sweetin",
    img: "../assets/images/product/product-3.jpg",
  },
  {
    title: "Sweetin – Tiralychée (Premium)",
    price: 345000,
    view: 1,
    hot: 1,
    category: "sweetin",
    img: "../assets/images/product/product-4.jpg",
  },
  {
    title: "Sweetin – Tiralychée (Modern Classic)",
    price: 235000,
    view: 1,
    hot: 0,
    category: "sweetin",
    img: "../assets/images/product/product-5.jpg",
  },
  {
    title: "Sweetin Love – Matcha Chocolate Dream Cake",
    price: 245000,
    view: 1,
    hot: 0,
    category: "sweetin",
    img: "../assets/images/product/product-6.jpg",
  },
  {
    title: "Sweetin – Matcha Tiramisu",
    price: 215000,
    view: 1,
    hot: 0,
    category: "sweetin",
    img: "../assets/images/product/product-7.jpg",
  },
  {
    title: "Sweetin – Matcha Opera",
    price: 235000,
    view: 1,
    hot: 0,
    category: "sweetin",
    img: "../assets/images/product/product-8.jpg",
  },

  // Bánh Mousse
  {
    title: "Green Bliss – Mousse Bơ",
    price: 535000,
    view: 1,
    hot: 1,
    category: "mousse",
    img: "../assets/images/product/product-1.jpg",
  },
  {
    title: "Tropical Aura – Mousse Bưởi Đỏ Thanh Trà",
    price: 585000,
    view: 1,
    hot: 0,
    category: "mousse",
    img: "../assets/images/product/product-2.jpg",
  },
  {
    title: "Tropical Green – Mousse Mãng Cầu Dâu Tây",
    price: 625000,
    view: 1,
    hot: 0,
    category: "mousse",
    img: "../assets/images/product/product-3.jpg",
  },

  // Bánh Entremet
  {
    title: "KoKo Mango – Entremet Xôi Xoài",
    price: 650000,
    view: 1,
    hot: 1,
    category: "entremet",
    img: "../assets/images/product/product-4.jpg",
  },
  {
    title: "Summer Wine – Entremet Anh Đào",
    price: 650000,
    view: 1,
    hot: 0,
    category: "entremet",
    img: "../assets/images/product/product-5.jpg",
  },
  {
    title: "Mangosteen Rose – Entremet Măng Cụt (màu Hồng)",
    price: 750000,
    view: 1,
    hot: 0,
    category: "entremet",
    img: "../assets/images/product/product-6.jpg",
  },
  {
    title: "Star Summer – Entremet Hạ Khế",
    price: 650000,
    view: 1,
    hot: 0,
    category: "entremet",
    img: "../assets/images/product/product-7.jpg",
  },
  {
    title: "Mangosteen Noire – Entremet Măng Cụt (màu Nâu)",
    price: 750000,
    view: 1,
    hot: 0,
    category: "entremet",
    img: "../assets/images/product/product-8.jpg",
  },

  // Bánh Kem Bắp
  {
    title: "Delicate Bloom – Bánh Kem Bắp Dâu",
    price: 465000,
    view: 1,
    hot: 1,
    category: "kem-bap",
    img: "../assets/images/product/product-1.jpg",
  },
  {
    title: "Harvest Bloom – Bánh Kem Bắp",
    price: 465000,
    view: 1,
    hot: 0,
    category: "kem-bap",
    img: "../assets/images/product/product-2.jpg",
  },

  // Bánh Flan Gato
  {
    title: "Flan Gato Berry Mix",
    price: 415000,
    view: 1,
    hot: 1,
    category: "flan-gato",
    img: "../assets/images/product/product-3.jpg",
  },
  {
    title: "Flan Gato Fruit & Pins – Flan Gato Trái Cây",
    price: 515000,
    view: 1,
    hot: 0,
    category: "flan-gato",
    img: "../assets/images/product/product-4.jpg",
  },
  {
    title: "Bold Charming – Flan Gato Trà Thái Đỏ",
    price: 435000,
    view: 1,
    hot: 0,
    category: "flan-gato",
    img: "../assets/images/product/product-5.jpg",
  },
  {
    title: "Soft Glow – Flan Gato Mè Đen Matcha",
    price: 425000,
    view: 1,
    hot: 0,
    category: "flan-gato",
    img: "../assets/images/product/product-6.jpg",
  },

  // Bánh Healthy
  {
    title: "Chocolate Dream Cake (Classic)",
    price: 225000,
    view: 1,
    hot: 1,
    category: "healthy",
    img: "../assets/images/product/product-7.jpg",
  },
  {
    title: "Tiralychée – Tiramisu Vải Mây",
    price: 625000,
    view: 1,
    hot: 1,
    category: "healthy",
    img: "../assets/images/product/product-8.jpg",
  },

  // Bánh nướng – Bánh mì
  {
    title: "Bánh Mì Kem Phô mai Nam Việt Quất",
    price: 27000,
    view: 1,
    hot: 0,
    category: "banh-nuong",
    img: "../assets/images/product/product-1.jpg",
  },
  {
    title: "Bánh Chuối Sô-cô-la",
    price: 90000,
    view: 1,
    hot: 0,
    category: "banh-nuong",
    img: "../assets/images/product/product-2.jpg",
  },
  {
    title: "Bánh Mì Cuộn Nho Quế",
    price: 59000,
    view: 1,
    hot: 0,
    category: "banh-nuong",
    img: "../assets/images/product/product-3.jpg",
  },
  {
    title: "Plain croissant",
    price: 35000,
    view: 1,
    hot: 0,
    category: "banh-nuong",
    img: "../assets/images/product/product-4.jpg",
  },
  {
    title: "Hộp Bánh Chuối Sô-cô-la",
    price: 109000,
    view: 1,
    hot: 0,
    category: "banh-nuong",
    img: "../assets/images/product/product-5.jpg",
  },
  {
    title: "Strawberry danish – Danish Dâu",
    price: 45000,
    view: 1,
    hot: 0,
    category: "banh-nuong",
    img: "../assets/images/product/product-6.jpg",
  },
  {
    title: "Red croissant",
    price: 39000,
    view: 1,
    hot: 0,
    category: "banh-nuong",
    img: "../assets/images/product/product-7.jpg",
  },
  {
    title: "Pain Au Choco",
    price: 39000,
    view: 1,
    hot: 0,
    category: "banh-nuong",
    img: "../assets/images/product/product-8.jpg",
  },

  // Cookie & Snack
  {
    title: "Fruits and Nuts Biscotti – Biscotti trái cây và hạt",
    price: 59000,
    view: 1,
    hot: 0,
    category: "cookie-snack",
    img: "../assets/images/product/product-1.jpg",
  },
  {
    title: "Cream cheese Cookie – Cookie kem phô mai",
    price: 59000,
    view: 1,
    hot: 0,
    category: "cookie-snack",
    img: "../assets/images/product/product-2.jpg",
  },
  {
    title: "Seaweed Snack – Snack rong biển",
    price: 59000,
    view: 1,
    hot: 0,
    category: "cookie-snack",
    img: "../assets/images/product/product-3.jpg",
  },
  {
    title: "Passion Fruit Cookie – Cookie chanh dây",
    price: 59000,
    view: 1,
    hot: 0,
    category: "cookie-snack",
    img: "../assets/images/product/product-4.jpg",
  },
  {
    title: "Hộp Bánh Lamington",
    price: 165000,
    view: 1,
    hot: 0,
    category: "cookie-snack",
    img: "../assets/images/product/product-5.jpg",
  },
  {
    title: "Hộp Snack Rong Biển",
    price: 120000,
    view: 1,
    hot: 0,
    category: "cookie-snack",
    img: "../assets/images/product/product-6.jpg",
  },
  {
    title: "Parmesan Crackers – Bánh Giòn Phô Mai Parmesan",
    price: 59000,
    view: 1,
    hot: 0,
    category: "cookie-snack",
    img: "../assets/images/product/product-7.jpg",
  },

  // SweetAway
  {
    title: "SweetAway – Set 1 và set 2",
    price: 209000,
    view: 1,
    hot: 0,
    category: "sweetaway",
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
