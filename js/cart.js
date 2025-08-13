// local storage : arrCart[{sp: obj, qty: 1}]

let arrCart =
  localStorage.getItem("arrCart") == null
    ? []
    : JSON.parse(localStorage.getItem("arrCart"));

// Kiểm tra element tồn tại trước khi set innerText
function updateCartCount() {
  const cartCountElement = document.getElementById("sl");
  if (cartCountElement) {
    cartCountElement.innerText = arrCart.length;
  }
}

function addCart(ctrl, obj) {
  // ctrl: add nhấn vào
  // obj : product thêm vào

  //   console.log('addCart được gọi với:', ctrl, obj);

  // Lấy số lượng từ input quantity
  let sl = parseInt(
    ctrl.previousElementSibling.querySelector(".quantity-input").value
  );

  // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
  var flag = false;
  for (let i = 0; i < arrCart.length; i++) {
    const element = arrCart[i];
    if (element.sp.id == obj.id) {
      // Sản phẩm đã có: tăng số lượng
      flag = true;
      element.qty += sl;
      break;
    }
  }

  if (flag == false) {
    // Sản phẩm chưa có: thêm mới
    let cartItem = {
      sp: obj,
      qty: sl,
    };
    arrCart.push(cartItem);
  }

  // Cập nhật số lượng trên header
  updateCartCount();

  // Lưu vào localStorage
  localStorage.setItem("arrCart", JSON.stringify(arrCart));
  
  // Cập nhật tổng tiền nếu đang ở trang cart
  if (window.location.pathname.includes('cart.html')) {
    updateTotalDisplay();
  }
}

function showProductCart() {
  let productCart = '';
  
  if (arrCart.length === 0) {
    // Giỏ hàng trống
    productCart = `
      <div style="text-align: center; padding: 2rem;">
        <i class="fa-solid fa-shopping-cart" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
        <h3>Giỏ hàng trống</h3>
        <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
        <a href="product.html" class="continue-shopping">Tiếp tục mua sắm</a>
      </div>
    `;
  } else {
    // Có sản phẩm trong giỏ hàng
    for (let i = 0; i < arrCart.length; i++) {
      const product = arrCart[i];
             productCart += `
         <div class="cart-item">
           <div class="item-product">
             <img src="${product.sp.img[0]}" alt="${product.sp.title}"/>
             <div class="item-info">
               <h3>${product.sp.title}</h3>
               <p class="item-description">Sản phẩm từ Strawberry Bakery</p>
             </div>
           </div>
           <div class="item-price">${product.sp.price.toLocaleString()} ₫</div>
           <div class="item-quantity">
             <span class="quantity-display">${product.qty}</span>
           </div>
           <div class="item-subtotal">
             <span>${(product.sp.price * product.qty).toLocaleString()} ₫</span>
             <button class="remove-item" onclick="delCart(${i})">
               <i class="fa-solid fa-xmark"></i>
             </button>
           </div>
         </div>
       `;
    }
  }
  
  document.getElementById("cart").innerHTML = productCart;
}

// Xóa sản phẩm khỏi giỏ hàng
function delCart(index) {
  arrCart.splice(index, 1);
  localStorage.setItem("arrCart", JSON.stringify(arrCart));
  updateCartCount();
  showProductCart();
  
  // Cập nhật tổng tiền
  updateTotalDisplay();
}

// Tính tổng tiền giỏ hàng
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < arrCart.length; i++) {
    const product = arrCart[i];
    total += product.sp.price * product.qty;
  }
  return total;
}

// Cập nhật tổng tiền trên giao diện
function updateTotalDisplay() {
  const totalElement = document.querySelector('.total span:last-child');
  if (totalElement) {
    const total = calculateTotal();
    const shipping = 150000; // Phí giao hàng
    const finalTotal = total + shipping;
    
    // Cập nhật tạm tính
    const subtotalElement = document.querySelector('.subtotal span:last-child');
    if (subtotalElement) {
      subtotalElement.textContent = total.toLocaleString() + ' ₫';
    }
    
    // Cập nhật tổng cộng
    totalElement.textContent = finalTotal.toLocaleString() + ' ₫';
  }
}

// Cập nhật cart count khi load trang (cho tất cả các trang)
updateCartCount();
showProductCart();
updateTotalDisplay();