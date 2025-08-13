// Admin Functions - Quản lý sản phẩm

// Lấy danh sách sản phẩm từ localStorage
let productList = JSON.parse(localStorage.getItem('productList')) == null ? [] : JSON.parse(localStorage.getItem('productList'));

// Function thêm sản phẩm mới
function addNewProduct(event) {
  event.preventDefault();
  
  // Lấy giá trị từ form
  const title = document.getElementById('productTitle').value;
  const price = parseInt(document.getElementById('productPrice').value);
  const category = document.getElementById('productCategory').value;
  const image = document.getElementById('productImage').value;
  const description = document.getElementById('productDescription').value;
  
  // Kiểm tra dữ liệu
  if (!title || !price || !category || !image || !description) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return false;
  }
  
  // Tạo sản phẩm mới
  const newProduct = {
    id: Date.now(),
    title: title,
    price: price,
    category: category,
    img: [image],
    description: description,
    view: 0,
    hot: 0
  };
  
  // Thêm vào danh sách
  productList.push(newProduct);
  
  // Lưu vào localStorage
  localStorage.setItem('productList', JSON.stringify(productList));
  
  // Hiển thị thông báo
  alert('Thêm sản phẩm thành công!');
  
  // Reset form
  document.getElementById('addProductForm').reset();
  
  // Cập nhật danh sách sản phẩm
  displayProducts();
  
  return false;
}

// Function hiển thị danh sách sản phẩm
function displayProducts() {
  const productListElement = document.getElementById('productList');
  
  if (productList.length === 0) {
    productListElement.innerHTML = '<p style="text-align: center; color: #666;">Chưa có sản phẩm nào</p>';
    return;
  }
  
  let html = '';
  
  // Hiển thị tất cả sản phẩm đã thêm
  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    html += `
      <div class="product-item">
        <img src="${product.img[0]}" alt="${product.title}" onerror="this.src='./assets/images/placeholder.jpg'"/>
        <h4>${product.title}</h4>
        <p class="price">${product.price.toLocaleString()} ₫</p>
        <p><strong>Danh mục:</strong> ${product.category}</p>
        <p><strong>ID:</strong> ${product.id}</p>
        <button onclick="deleteProduct(${i})" style="background: #dc3545; color: white; border: none; padding: 0.5rem 1rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; margin-top: 0.5rem;">
          <i class="fa-solid fa-trash"></i> Xóa
        </button>
      </div>
    `;
  }
  
  productListElement.innerHTML = html;
}

// Function xóa sản phẩm
function deleteProduct(index) {
  if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
    productList.splice(index, 1);
    localStorage.setItem('productList', JSON.stringify(productList));
    displayProducts();
    alert('Đã xóa sản phẩm!');
  }
}
displayProducts();