// Login JavaScript với localStorage
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');

    // Kiểm tra nếu đã đăng nhập
    checkIfLoggedIn();

    // Xử lý submit form đăng nhập
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });

    // Kiểm tra trạng thái đăng nhập
    function checkIfLoggedIn() {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            // Nếu đã đăng nhập, chuyển về trang chủ
            window.location.href = 'index.html';
        }
    }

    // Xử lý đăng nhập
    function handleLogin() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate input
        if (!email || !password) {
            showMessage('Vui lòng nhập đầy đủ email và mật khẩu!', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Email không hợp lệ!', 'error');
            return;
        }

        // Lấy danh sách users từ localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Tìm user với email và password khớp
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Đăng nhập thành công
            const loginData = {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                loginTime: new Date().toISOString()
            };

            // Lưu thông tin đăng nhập
            localStorage.setItem('currentUser', JSON.stringify(loginData));
            
            // Nếu chọn "Ghi nhớ đăng nhập"
            if (rememberCheckbox.checked) {
                localStorage.setItem('rememberLogin', 'true');
            }

            showMessage('Đăng nhập thành công! Đang chuyển hướng...', 'success');
            
            // Chuyển hướng sau 1.5 giây
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);

        } else {
            showMessage('Email hoặc mật khẩu không đúng!', 'error');
        }
    }

    // Validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Hiển thị thông báo
    function showMessage(message, type) {
        // Xóa thông báo cũ nếu có
        const existingMessage = document.querySelector('.auth-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Tạo thông báo mới
        const messageDiv = document.createElement('div');
        messageDiv.className = `auth-message ${type}`;
        messageDiv.innerHTML = `
            <span>${message}</span>
            <button class="close-message" onclick="this.parentElement.remove()">×</button>
        `;

        // Thêm vào đầu form
        loginForm.insertBefore(messageDiv, loginForm.firstChild);

        // Tự động ẩn sau 5 giây
        setTimeout(() => {
            if (messageDiv.parentElement) {
                messageDiv.remove();
            }
        }, 5000);
    }

    // Xử lý social login (demo)
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const provider = this.classList.contains('facebook') ? 'Facebook' : 'Google';
            showMessage(`Chức năng đăng nhập bằng ${provider} đang phát triển!`, 'info');
        });
    });

    // Load remembered email nếu có
    const rememberLogin = localStorage.getItem('rememberLogin');
    if (rememberLogin === 'true') {
        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        if (savedUsers.length > 0) {
            // Lấy user cuối cùng đăng nhập
            const lastUser = savedUsers[savedUsers.length - 1];
            emailInput.value = lastUser.email;
            rememberCheckbox.checked = true;
        }
    }
});

// CSS cho thông báo (thêm vào head)
const messageStyles = `
<style>
.auth-message {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: var(--radius-sm);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-sm);
    font-weight: 500;
}

.auth-message.success {
    background: #e8f5e8;
    color: #2e7d2e;
    border: 1px solid #4caf50;
}

.auth-message.error {
    background: #ffeaea;
    color: #d32f2f;
    border: 1px solid #f44336;
}

.auth-message.info {
    background: #e3f2fd;
    color: #1976d2;
    border: 1px solid #2196f3;
}

.close-message {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: inherit;
    padding: 0;
    margin-left: 1rem;
}

.close-message:hover {
    opacity: 0.7;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', messageStyles);
