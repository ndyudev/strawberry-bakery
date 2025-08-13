# 🍓 Strawberry Bakery - Website Bánh Kẹo

## 📖 Mô tả dự án

**Strawberry Bakery** là một website bánh kẹo trực tuyến được xây dựng bằng HTML, CSS và JavaScript thuần. Website cung cấp giao diện đẹp mắt để khách hàng xem sản phẩm, đăng ký tài khoản, đăng nhập và mua sắm các loại bánh kẹo thơm ngon.

## ✨ Tính năng chính

### 🛍️ **Quản lý sản phẩm**
- Hiển thị danh sách sản phẩm đa dạng (Cakes, Cookies, Sweetin, Healthy, Sweetbox, Flan)
- Phân loại sản phẩm theo danh mục
- Hiển thị giá cả và thông tin chi tiết
- Tìm kiếm và lọc sản phẩm

### 👤 **Hệ thống tài khoản**
- Đăng ký tài khoản mới
- Đăng nhập/Đăng xuất
- Phân quyền người dùng (User/Admin)
- Lưu trữ thông tin cá nhân

### 🛒 **Giỏ hàng thông minh**
- Thêm sản phẩm vào giỏ hàng
- Cập nhật số lượng sản phẩm
- Xóa sản phẩm khỏi giỏ hàng
- Tính tổng tiền tự động
- Lưu trữ giỏ hàng trong localStorage

### 🔧 **Trang Admin (dành cho Admin)**
- Thêm sản phẩm mới
- Quản lý danh sách sản phẩm
- Xóa sản phẩm
- Cập nhật thông tin sản phẩm

### 📱 **Responsive Design**
- Giao diện tương thích mọi thiết bị
- Mobile-first approach
- Navigation menu thông minh

## 🚀 Cài đặt và chạy dự án

### **Yêu cầu hệ thống**
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt Node.js hay package manager

### **Cách chạy**
1. **Clone hoặc download** dự án về máy
2. **Mở thư mục** `strawberry-bakery`
3. **Chạy file** `index.html` bằng trình duyệt web
4. **Hoặc sử dụng Live Server** trong VS Code

### **Cấu trúc thư mục**
```
strawberry-bakery/
├── index.html              # Trang chủ
├── product.html            # Trang sản phẩm
├── product-detail.html     # Trang chi tiết sản phẩm
├── cart.html              # Trang giỏ hàng
├── login.html             # Trang đăng nhập
├── register.html          # Trang đăng ký
├── admin.html             # Trang quản trị (Admin)
├── assets/
│   ├── css/               # File CSS
│   ├── images/            # Hình ảnh sản phẩm
│   └── js/                # File JavaScript
└── README.md              # File này
```

## 🎯 Hướng dẫn sử dụng

### **Khách hàng**
1. **Xem sản phẩm**: Truy cập trang chủ hoặc Menu
2. **Đăng ký tài khoản**: Click "Register" để tạo tài khoản mới
3. **Đăng nhập**: Sử dụng email và mật khẩu đã đăng ký
4. **Mua sắm**: Thêm sản phẩm vào giỏ hàng
5. **Thanh toán**: Xem giỏ hàng và tiến hành đặt hàng

### **Admin**
1. **Đăng nhập** với tài khoản có `role = 1`
2. **Truy cập trang Admin** từ menu Account
3. **Thêm sản phẩm mới** bằng form
4. **Quản lý sản phẩm** hiện có

## 🛠️ Công nghệ sử dụng

### **Frontend**
- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và responsive design
- **JavaScript (ES6+)**: Logic xử lý và tương tác

### **Data Storage**
- **localStorage**: Lưu trữ dữ liệu người dùng, giỏ hàng, sản phẩm
- **JSON**: Format dữ liệu

### **Libraries & Icons**
- **Font Awesome**: Icon library
- **Google Fonts**: Typography

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
- Kiểm tra email đã đăng ký
- Validate mật khẩu (tối thiểu 8 ký tự)
- Kiểm tra xác nhận mật khẩu
- Hiển thị cảnh báo với class `borderWarning`

### **Phân quyền**
- **User (role = 0)**: Xem sản phẩm, mua hàng
- **Admin (role = 1)**: Quản lý sản phẩm, thêm/xóa

## 🎨 Design System

### **Color Palette**
- **Primary**: `#ff6b9d` (Pink)
- **Secondary**: `#c44569` (Dark Pink)
- **Success**: `#28a745` (Green)
- **Warning**: `#ffc107` (Yellow)
- **Danger**: `#dc3545` (Red)

### **Typography**
- **Headings**: Bold, modern fonts
- **Body**: Readable, clean fonts
- **Prices**: Highlighted with primary color

### **Components**
- **Product Cards**: Consistent design với hover effects
- **Buttons**: Gradient backgrounds với hover states
- **Forms**: Clean input fields với validation feedback

## 📊 Cấu trúc dữ liệu

### **User Object**
```javascript
{
  name: "Tên người dùng",
  sodt: "Số điện thoại",
  email: "email@example.com",
  pw: "mật khẩu",
  role: 0 // 0: User, 1: Admin
}
```

### **Product Object**
```javascript
{
  id: "ID sản phẩm",
  title: "Tên sản phẩm",
  price: 100000,
  category: "danh mục",
  img: "./path/to/image.jpg",
  view: 1,
  hot: 1
}
```

### **Cart Item Object**
```javascript
{
  sp: "product object",
  qty: "số lượng"
}
```

## 🚀 Tính năng nâng cao

### **Real-time Updates**
- Cập nhật giỏ hàng tự động
- Sync dữ liệu giữa các tab
- Storage event listeners

### **Performance Optimization**
- Lazy loading images
- Efficient DOM manipulation
- Optimized event handling

## 🐛 Troubleshooting

### **Lỗi thường gặp**
1. **Giỏ hàng không cập nhật**: Kiểm tra localStorage và script loading order
2. **Sản phẩm không hiển thị**: Verify file paths và data structure
3. **Form validation không hoạt động**: Check JavaScript console errors

### **Debug Tips**
- Sử dụng **Console** để xem logs
- Kiểm tra **localStorage** trong DevTools
- Verify **script loading order** trong HTML

## 📈 Roadmap & Tính năng tương lai

### **Phase 2**
- [ ] Backend API integration
- [ ] Database (MySQL/PostgreSQL)
- [ ] User authentication (JWT)
- [ ] Payment gateway integration

### **Phase 3**
- [ ] Order management system
- [ ] Inventory tracking
- [ ] Customer reviews & ratings
- [ ] Email notifications

## 👥 Đóng góp

Dự án này được phát triển cho mục đích học tập và portfolio. Mọi đóng góp đều được chào đón!

### **Cách đóng góp**
1. Fork dự án
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📄 License

Dự án này được phát hành dưới **MIT License**. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- **Developer**: [Tên của bạn]
- **Email**: [email@example.com]
- **GitHub**: [github.com/username]

---

## 🎉 Cảm ơn

Cảm ơn bạn đã quan tâm đến dự án **Strawberry Bakery**! 

**"Every bite is made with passion and care"** 🍰✨

---

*Made with ❤️ by [Tên của bạn]*
