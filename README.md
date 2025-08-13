# 🍓 Strawberry Bakery - Website Bánh Kẹo

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-00C7B7?style=for-the-badge&logo=responsive&logoColor=white)
![FontAwesome](https://img.shields.io/badge/FontAwesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

**Website bán bánh kem hiện đại, giao diện đẹp, tối ưu trải nghiệm người dùng.**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ndyudev)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:chauunhatduyyit@gmail.com)

</div>

---

## 📖 Mô tả dự án

**Strawberry Bakery** là một website bánh kẹo trực tuyến được xây dựng bằng HTML, CSS và JavaScript thuần. Website cung cấp giao diện đẹp mắt để khách hàng xem sản phẩm, đăng ký tài khoản, đăng nhập và mua sắm các loại bánh kẹo thơm ngon.

### 🌟 **Điểm nổi bật**
- **Giao diện hiện đại** với tông màu hồng pastel đẹp mắt
- **Responsive design** tối ưu cho mọi thiết bị
- **Tách module CSS** rõ ràng, dễ bảo trì và mở rộng
- **Hiệu ứng hover** mượt mà, chuyên nghiệp
- **Navigation menu** thông minh với dropdown

## ✨ Tính năng chính

### 🛍️ **Quản lý sản phẩm**
- Hiển thị danh sách sản phẩm đa dạng (Cakes, Cookies, Sweetin, Healthy, Sweetbox, Flan)
- Phân loại sản phẩm theo danh mục
- Hiển thị giá cả và thông tin chi tiết
- Tìm kiếm và lọc sản phẩm
- **Product New section** tự động cập nhật sản phẩm mới từ admin

### 👤 **Hệ thống tài khoản**
- Đăng ký tài khoản mới với validation đầy đủ
- Đăng nhập/Đăng xuất an toàn
- Phân quyền người dùng (User/Admin)
- Lưu trữ thông tin cá nhân trong localStorage
- **Form validation** với visual feedback (borderWarning)

### 🛒 **Giỏ hàng thông minh**
- Thêm sản phẩm vào giỏ hàng với số lượng
- Cập nhật số lượng sản phẩm real-time
- Xóa sản phẩm khỏi giỏ hàng
- Tính tổng tiền tự động (bao gồm phí giao hàng)
- Lưu trữ giỏ hàng trong localStorage
- **Cart count** hiển thị số lượng sản phẩm trên header

### 🔧 **Trang Admin (dành cho Admin)**
- Thêm sản phẩm mới với form validation
- Quản lý danh sách sản phẩm hiện có
- Xóa sản phẩm với xác nhận
- Cập nhật thông tin sản phẩm
- **Real-time updates** khi có thay đổi

### 📱 **Responsive Design**
- Giao diện tương thích mọi thiết bị
- Mobile-first approach
- Navigation menu thông minh với hamburger menu
- **Grid layout** tự động điều chỉnh theo màn hình

## 🚀 Cài đặt và chạy dự án

### **Yêu cầu hệ thống**
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt Node.js hay package manager
- **Live Server** (VS Code extension) để chạy local

### **Cách chạy**
1. **Clone hoặc download** dự án về máy
2. **Mở thư mục** `strawberry-bakery`
3. **Chạy file** `index.html` bằng trình duyệt web
4. **Hoặc sử dụng Live Server** trong VS Code (khuyến nghị)

### **Cấu trúc thư mục**
```
strawberry-bakery/
├── index.html              # Trang chủ với banner và sản phẩm nổi bật
├── product.html            # Trang sản phẩm với grid layout
├── product-detail.html     # Trang chi tiết sản phẩm và add to cart
├── cart.html              # Trang giỏ hàng với tính năng quản lý
├── login.html             # Trang đăng nhập với validation
├── register.html          # Trang đăng ký với form validation
├── admin.html             # Trang quản trị (Admin) - thêm/sửa/xóa sản phẩm
├── assets/
│   ├── css/               # File CSS được tách module rõ ràng
│   │   ├── main.css       # CSS chính và variables
│   │   └── sections/      # CSS cho từng section
│   │       ├── header.css
│   │       ├── banner.css
│   │       ├── product.css
│   │       ├── cart.css
│   │       ├── admin.css
│   │       └── responsive.css
│   ├── images/            # Hình ảnh sản phẩm và logo
│   │   ├── logo/
│   │   ├── banner/
│   │   └── product/
│   └── js/                # File JavaScript
│       ├── main.js        # Logic chính
│       ├── cart.js        # Quản lý giỏ hàng
│       ├── admin.js       # Quản lý admin
│       ├── product-new.js # Hiển thị sản phẩm mới
│       └── show-menu.js   # Hiển thị menu động
└── README.md              # File này
```

## 🎯 Hướng dẫn sử dụng

### **Khách hàng**
1. **Xem sản phẩm**: Truy cập trang chủ hoặc Menu
2. **Đăng ký tài khoản**: Click "Register" để tạo tài khoản mới
3. **Đăng nhập**: Sử dụng email và mật khẩu đã đăng ký
4. **Mua sắm**: Thêm sản phẩm vào giỏ hàng với số lượng
5. **Thanh toán**: Xem giỏ hàng và tiến hành đặt hàng

### **Admin**
1. **Đăng nhập** với tài khoản có `role = 1`
2. **Truy cập trang Admin** từ menu Account → "Add Product"
3. **Thêm sản phẩm mới** bằng form với validation
4. **Quản lý sản phẩm** hiện có (xem, xóa)
5. **Sản phẩm mới** sẽ tự động xuất hiện trong Product New section

## 🛠️ Công nghệ sử dụng

### **Frontend**
- **HTML5**: Cấu trúc trang web semantic
- **CSS3**: Styling, animations, responsive design
- **JavaScript (ES6+)**: Logic xử lý, DOM manipulation, localStorage

### **Data Storage**
- **localStorage**: Lưu trữ dữ liệu người dùng, giỏ hàng, sản phẩm
- **JSON**: Format dữ liệu chuẩn
- **Session management**: Quản lý phiên đăng nhập

### **Libraries & Icons**
- **Font Awesome**: Icon library đẹp và đa dạng
- **Google Fonts**: Typography chuyên nghiệp
- **CSS Variables**: Quản lý màu sắc và spacing

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }
```

## 🔐 Bảo mật và Validation

### **Form Validation**
- Kiểm tra email đã đăng ký (duplicate prevention)
- Validate mật khẩu (tối thiểu 8 ký tự)
- Kiểm tra xác nhận mật khẩu
- Hiển thị cảnh báo với class `borderWarning`
- **Real-time validation** khi user nhập

### **Phân quyền**
- **User (role = 0)**: Xem sản phẩm, mua hàng, quản lý giỏ hàng
- **Admin (role = 1)**: Quản lý sản phẩm, thêm/xóa, truy cập admin panel

### **Data Security**
- **Input sanitization** để tránh XSS
- **localStorage encryption** cho dữ liệu nhạy cảm
- **Session timeout** tự động

## 🎨 Design System

### **Color Palette**
- **Primary**: `#ff6b9d` (Pink) - Màu chủ đạo
- **Secondary**: `#c44569` (Dark Pink) - Màu phụ
- **Success**: `#28a745` (Green) - Thành công
- **Warning**: `#ffc107` (Yellow) - Cảnh báo
- **Danger**: `#dc3545` (Red) - Lỗi/xóa
- **Neutral**: `#f8f9fa`, `#e9ecef` (Background)

### **Typography**
- **Headings**: Bold, modern fonts với hierarchy rõ ràng
- **Body**: Readable, clean fonts với line-height tối ưu
- **Prices**: Highlighted với primary color và font-weight cao
- **Buttons**: Clear, actionable text

### **Components**
- **Product Cards**: Consistent design với hover effects và shadows
- **Buttons**: Gradient backgrounds với hover states và transitions
- **Forms**: Clean input fields với validation feedback
- **Navigation**: Smooth dropdowns và mobile hamburger menu

### **Spacing System**
- **Consistent margins** và paddings
- **Grid system** với gap chuẩn
- **Responsive spacing** theo breakpoints

## 📊 Cấu trúc dữ liệu

### **User Object**
```javascript
{
  name: "Tên người dùng",
  sodt: "Số điện thoại",
  email: "email@example.com",
  pw: "mật khẩu (min 8 chars)",
  role: 0 // 0: User, 1: Admin
}
```

### **Product Object**
```javascript
{
  id: "ID sản phẩm (auto-generated)",
  title: "Tên sản phẩm",
  price: 100000, // VNĐ
  category: "danh mục (cakes, cookies, sweetin, etc.)",
  img: "./path/to/image.jpg",
  description: "Mô tả sản phẩm",
  view: 1, // Lượt xem
  hot: 1   // Sản phẩm nổi bật (0/1)
}
```

### **Cart Item Object**
```javascript
{
  sp: "product object", // Thông tin sản phẩm
  qty: "số lượng"       // Số lượng đã chọn
}
```

### **Admin Product Object**
```javascript
{
  id: Date.now(),        // Timestamp làm ID
  title: "Tên sản phẩm",
  price: 100000,
  category: "danh mục",
  img: ["image_url"],    // Array of images
  description: "Mô tả",
  view: 0,
  hot: 0
}
```

## 🚀 Tính năng nâng cao

### **Real-time Updates**
- Cập nhật giỏ hàng tự động khi thay đổi
- Sync dữ liệu giữa các tab với storage events
- **Live cart count** trên header
- **Auto-refresh** Product New section khi có sản phẩm mới

### **Performance Optimization**
- **Lazy loading** cho images
- **Efficient DOM manipulation** với minimal reflows
- **Optimized event handling** với event delegation
- **CSS transitions** thay vì JavaScript animations

### **User Experience**
- **Smooth transitions** và hover effects
- **Loading states** cho các actions
- **Error handling** với user-friendly messages
- **Success feedback** cho completed actions

## 🐛 Troubleshooting

### **Lỗi thường gặp**
1. **Giỏ hàng không cập nhật**: Kiểm tra localStorage và script loading order
2. **Sản phẩm không hiển thị**: Verify file paths và data structure
3. **Form validation không hoạt động**: Check JavaScript console errors
4. **Admin panel không load**: Kiểm tra role trong localStorage
5. **Cart count reset**: Verify script loading sequence

### **Debug Tips**
- Sử dụng **Console** để xem logs và errors
- Kiểm tra **localStorage** trong DevTools → Application
- Verify **script loading order** trong HTML (cart.js phải load sau product-detail.js)
- Check **Network tab** để xem file loading issues
- Use **Elements tab** để inspect DOM structure

### **Common Fixes**
```javascript
// Fix cart count reset
updateCartCount(); // Call this after DOM is ready

// Fix product display
if (typeof listProduct !== 'undefined') {
  // Safe to use listProduct
}

// Fix localStorage issues
try {
  localStorage.setItem('key', 'value');
} catch (e) {
  console.error('localStorage error:', e);
}
```

## 📈 Roadmap & Tính năng tương lai

### **Phase 2 (Next 3 months)**
- [ ] **Backend API integration** với Node.js/Express
- [ ] **Database** (MySQL/PostgreSQL) thay thế localStorage
- [ ] **User authentication** với JWT tokens
- [ ] **Payment gateway integration** (VNPay, Momo)
- [ ] **Image upload** cho admin panel
- [ ] **Search functionality** với filters

### **Phase 3 (Next 6 months)**
- [ ] **Order management system** hoàn chỉnh
- [ ] **Inventory tracking** và stock management
- [ ] **Customer reviews & ratings** system
- [ ] **Email notifications** cho orders
- [ ] **Admin dashboard** với analytics
- [ ] **Multi-language support** (EN/VI)

### **Phase 4 (Long term)**
- [ ] **Mobile app** (React Native/Flutter)
- [ ] **PWA** (Progressive Web App)
- [ ] **AI recommendations** cho sản phẩm
- [ ] **Loyalty program** và points system
- [ ] **Social media integration**

## 👥 Đóng góp

Dự án này được phát triển cho mục đích học tập và portfolio. Mọi đóng góp đều được chào đón!

### **Cách đóng góp**
1. **Fork** dự án về GitHub của bạn
2. **Tạo feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Tạo Pull Request** với mô tả chi tiết

### **Guidelines**
- **Code style**: Tuân thủ JavaScript/HTML/CSS conventions
- **Documentation**: Thêm comments cho code phức tạp
- **Testing**: Test trên nhiều trình duyệt và devices
- **Performance**: Tối ưu hóa code và assets

## 📄 License

Dự án này được phát hành dưới **MIT License**. Xem file `LICENSE` để biết thêm chi tiết.

**MIT License** cho phép:
- ✅ Sử dụng cho mục đích thương mại
- ✅ Sửa đổi và phân phối
- ✅ Sử dụng cho mục đích cá nhân
- ✅ Chỉ yêu cầu giữ copyright notice

## 📞 Liên hệ

<div align="center">

**Chau Nhat Duy** - *Web Developer & UI/UX Enthusiast*

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ndyudev)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:chauunhatduyyit@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)

**"Làm web đẹp, chuẩn, dễ mở rộng và bảo trì!"** 🍓

</div>

---

## 🎉 Cảm ơn

Cảm ơn bạn đã quan tâm đến dự án **Strawberry Bakery**! 

**"Every bite is made with passion and care"** 🍰✨

### 🌟 **Special Thanks**
- **Font Awesome** cho icon library tuyệt vời
- **Google Fonts** cho typography đẹp
- **GitHub** cho platform hosting
- **VS Code** cho development experience

---

*Made with ❤️ by **Chau Nhat Duy***

---

<div align="center">

**⭐ Nếu dự án này hữu ích, hãy cho một star nhé! ⭐**

</div>
