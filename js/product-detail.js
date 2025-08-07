import { listProduct } from './data-product.js';

// Lấy thông tin sản phẩm từ URL
let url = window.location.search;
let params = new URLSearchParams(url);
let productIndex = params.get('index');

// Tìm sản phẩm trong listProduct
let currentProduct = null;
if (productIndex !== null) {
  currentProduct = listProduct[parseInt(productIndex)];
}

// Nếu không tìm thấy sản phẩm, sử dụng sản phẩm đầu tiên
if (!currentProduct) {
  currentProduct = listProduct[0];
}

// Hàm đổ dữ liệu lên trang
function fillProductDetail() {
  if (!currentProduct) return;

  // Cập nhật ảnh chính
  const mainImage = document.querySelector('.main-image img');
  if (mainImage) {
    mainImage.src = currentProduct.img;
    mainImage.alt = currentProduct.title;
  }

  // Cập nhật thumbnails
  const thumbnails = document.querySelectorAll('.thumbnail img');
  thumbnails.forEach((thumb, index) => {
    // Tạo đường dẫn ảnh thumbnail (giả sử có nhiều ảnh)
    let thumbnailSrc = currentProduct.img;
    if (index > 0) {
      // Thay đổi số để tạo ảnh khác (nếu có)
      thumbnailSrc = currentProduct.img.replace('-1.jpg', `-${index + 1}.jpg`);
    }
    thumb.src = thumbnailSrc;
    thumb.alt = currentProduct.title;
  });

  // Cập nhật tên sản phẩm
  const productTitle = document.querySelector('.product-title');
  if (productTitle) {
    productTitle.textContent = currentProduct.title;
  }

  // Cập nhật giá
  const productPrice = document.querySelector('.product-price');
  if (productPrice) {
    productPrice.textContent = currentProduct.price.toLocaleString() + ' ₫';
  }

  // Cập nhật label trong quantity selector
  const quantityLabel = document.querySelector('.quantity-selector label');
  if (quantityLabel) {
    quantityLabel.textContent = currentProduct.title + ' số lượng';
  }

  // Cập nhật title của trang
  document.title = currentProduct.title + ' - Strawberry Bakery';
}

// Chạy khi trang load xong
document.addEventListener('DOMContentLoaded', function() {
  fillProductDetail();
});

// Export để sử dụng ở file khác nếu cần
export { currentProduct, fillProductDetail };