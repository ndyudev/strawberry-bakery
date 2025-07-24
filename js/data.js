let listProduct = [
  // Cakes (8 ảnh)
  { title: "Strawberry Shortcake", price: 320000, category: "cakes", view: 1, hot: 1, img: "./assets/images/product/product-1.jpg" },
  { title: "Strawberry Cheese Mousse", price: 350000, category: "cakes", view: 1, hot: 0, img: "./assets/images/product/product-2.jpg" },
  { title: "Strawberry Tiramisu", price: 370000, category: "cakes", view: 1, hot: 1, img: "./assets/images/product/product-3.jpg" },
  { title: "Strawberry Yogurt Cake", price: 340000, category: "cakes", view: 1, hot: 0, img: "./assets/images/product/product-4.jpg" },
  { title: "Strawberry Chocolate Gateau", price: 390000, category: "cakes", view: 1, hot: 1, img: "./assets/images/product/product-5.jpg" },
  { title: "Strawberry Cream Roll", price: 280000, category: "cakes", view: 1, hot: 0, img: "./assets/images/product/product-6.jpg" },
  { title: "Strawberry Fresh Cream", price: 310000, category: "cakes", view: 1, hot: 1, img: "./assets/images/product/product-7.jpg" },
  { title: "Strawberry Dream Cake", price: 360000, category: "cakes", view: 1, hot: 0, img: "./assets/images/product/product-8.jpg" },

  // Cookies (9 ảnh)
  { title: "Classic Butter Cookies", price: 95000, category: "cookies", view: 1, hot: 1, img: "./assets/images/product/cookies/cookies-1.jpg" },
  { title: "Chocolate Chip Cookies", price: 105000, category: "cookies", view: 1, hot: 0, img: "./assets/images/product/cookies/cookies-2.jpg" },
  { title: "Matcha Almond Cookies", price: 115000, category: "cookies", view: 1, hot: 1, img: "./assets/images/product/cookies/cookies-3.jpg" },
  { title: "Cranberry Oatmeal Cookies", price: 110000, category: "cookies", view: 1, hot: 0, img: "./assets/images/product/cookies/cookies-4.jpg" },
  { title: "Red Velvet Cookies", price: 120000, category: "cookies", view: 1, hot: 1, img: "./assets/images/product/cookies/cookies-5.jpg" },
  { title: "Pistachio Cookies", price: 125000, category: "cookies", view: 1, hot: 0, img: "./assets/images/product/cookies/cookies-6.jpg" },
  { title: "Hazelnut Cookies", price: 115000, category: "cookies", view: 1, hot: 1, img: "./assets/images/product/cookies/cookies-7.jpg" },
  { title: "Coconut Cookies", price: 95000, category: "cookies", view: 1, hot: 0, img: "./assets/images/product/cookies/cookies-8.jpg" },
  { title: "Coffee Bean Cookies", price: 105000, category: "cookies", view: 1, hot: 1, img: "./assets/images/product/cookies/cookies-9.jpg" },

  // Sweetin (6 ảnh)
  { title: "Sweetin Chocolate Ruby", price: 395000, category: "sweetin", view: 1, hot: 1, img: "./assets/images/product/sweetin/sweetin-1.jpg" },
  { title: "Sweetin Tiramisu Vải", price: 345000, category: "sweetin", view: 1, hot: 0, img: "./assets/images/product/sweetin/sweetin-2.jpg" },
  { title: "Sweetin Matcha Opera", price: 235000, category: "sweetin", view: 1, hot: 1, img: "./assets/images/product/sweetin/sweetin-3.jpg" },
  { title: "Sweetin Love Garden", price: 415000, category: "sweetin", view: 1, hot: 0, img: "./assets/images/product/sweetin/sweetin-4.jpg" },
  { title: "Sweetin Caramel Mousse", price: 255000, category: "sweetin", view: 1, hot: 1, img: "./assets/images/product/sweetin/sweetin-5.jpg" },
  { title: "Sweetin Berry Mix", price: 265000, category: "sweetin", view: 1, hot: 0, img: "./assets/images/product/sweetin/sweetin-6.jpg" },

  // Healthy (8 ảnh)
  { title: "Yogurt Granola Bowl", price: 99000, category: "healthy", view: 1, hot: 1, img: "./assets/images/product/healthy/healthy-1.jpg" },
  { title: "Oatmeal Dâu Tươi", price: 109000, category: "healthy", view: 1, hot: 0, img: "./assets/images/product/healthy/healthy-2.jpg" },
  { title: "Healthy Chia Pudding", price: 89000, category: "healthy", view: 1, hot: 1, img: "./assets/images/product/healthy/healthy-3.jpg" },
  { title: "Salad Trái Cây", price: 79000, category: "healthy", view: 1, hot: 0, img: "./assets/images/product/healthy/healthy-4.jpg" },
  { title: "Yogurt Mật Ong", price: 95000, category: "healthy", view: 1, hot: 1, img: "./assets/images/product/healthy/healthy-5.jpg" },
  { title: "Smoothie Bowl", price: 99000, category: "healthy", view: 1, hot: 0, img: "./assets/images/product/healthy/healthy-6.jpg" },
  { title: "Healthy Mix Nuts", price: 119000, category: "healthy", view: 1, hot: 1, img: "./assets/images/product/healthy/healthy-7.jpg" },
  { title: "Bánh Yến Mạch", price: 79000, category: "healthy", view: 1, hot: 0, img: "./assets/images/product/healthy/healthy-8.jpg" },

  // Sweetbox (13 ảnh)
  { title: "Sweetbox Signature 8 vị", price: 295000, category: "sweetbox", view: 1, hot: 1, img: "./assets/images/product/sweetbox/sweetbox-1.jpg" },
  { title: "Sweetbox Signature 16 vị", price: 495000, category: "sweetbox", view: 1, hot: 0, img: "./assets/images/product/sweetbox/sweetbox-2.jpg" },
  { title: "Sweetbox Love 12 vị", price: 415000, category: "sweetbox", view: 1, hot: 1, img: "./assets/images/product/sweetbox/sweetbox-3.jpg" },
  { title: "Sweetbox Love Garden", price: 595000, category: "sweetbox", view: 1, hot: 0, img: "./assets/images/product/sweetbox/sweetbox-4.jpg" },
  { title: "Sweetbox Chocolate", price: 325000, category: "sweetbox", view: 1, hot: 1, img: "./assets/images/product/sweetbox/sweetbox-5.jpg" },
  { title: "Sweetbox Mix Nuts", price: 355000, category: "sweetbox", view: 1, hot: 0, img: "./assets/images/product/sweetbox/sweetbox-6.jpg" },
  { title: "Sweetbox Berry", price: 375000, category: "sweetbox", view: 1, hot: 1, img: "./assets/images/product/sweetbox/sweetbox-7.jpg" },
  { title: "Sweetbox Caramel", price: 315000, category: "sweetbox", view: 1, hot: 0, img: "./assets/images/product/sweetbox/sweetbox-8.jpg" },
  { title: "Sweetbox Hazelnut", price: 335000, category: "sweetbox", view: 1, hot: 1, img: "./assets/images/product/sweetbox/sweetbox-9.jpg" },
  { title: "Sweetbox Pistachio", price: 345000, category: "sweetbox", view: 1, hot: 0, img: "./assets/images/product/sweetbox/sweetbox-10.jpg" },
  { title: "Sweetbox Almond", price: 355000, category: "sweetbox", view: 1, hot: 1, img: "./assets/images/product/sweetbox/sweetbox-11.jpg" },
  { title: "Sweetbox Red Velvet", price: 365000, category: "sweetbox", view: 1, hot: 0, img: "./assets/images/product/sweetbox/sweetbox-12.jpg" },
  { title: "Sweetbox Trà Xanh", price: 325000, category: "sweetbox", view: 1, hot: 1, img: "./assets/images/product/sweetbox/sweetbox-13.jpg" },

  // Flan (4 ảnh)
  { title: "Flan Gato Berry Mix", price: 415000, category: "flan", view: 1, hot: 1, img: "./assets/images/product/flan/flan-1.jpg" },
  { title: "Flan Gato Caramel", price: 75000, category: "flan", view: 1, hot: 0, img: "./assets/images/product/flan/flan-2.jpg" },
  { title: "Flan Gato Trà Thái Đỏ", price: 435000, category: "flan", view: 1, hot: 1, img: "./assets/images/product/flan/flan-3.jpg" },
  { title: "Flan Gato Mè Đen", price: 425000, category: "flan", view: 1, hot: 0, img: "./assets/images/product/flan/flan-4.jpg" }
];

let listSubNav = [
  { title: "Sweetbox", key: "sweetbox" },
  { title: "Sweetin", key: "sweetin" },
  { title: "Flan", key: "flan" },
  { title: "Cookies", key: "cookies" },
  { title: "Cakes", key: "donuts" },
  { title: "Healthy", key: "healthy" },
];