// Register JavaScript với localStorage
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const birthDateInput = document.getElementById('birthDate');
    const agreeTermsCheckbox = document.getElementById('agreeTerms');
    const newsletterCheckbox = document.getElementById('newsletter');

    // Xử lý submit form đăng ký
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleRegister();
    });

    // Xử lý đăng ký
    function handleRegister() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const birthDate = birthDateInput.value;
        const agreeTerms = agreeTermsCheckbox.checked;
        const newsletter = newsletterCheckbox.checked;

        // Validate input
        const validation = validateForm({
            firstName,
            lastName,
            email,
            phone,
            password,
            confirmPassword,
            birthDate,
            agreeTerms
        });

        if (!validation.isValid) {
            showMessage(validation.message, 'error');
            return;
        }

        // Kiểm tra email đã tồn tại chưa
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const emailExists = users.find(user => user.email === email);

        if (emailExists) {
            showMessage('Email này đã được đăng ký! Vui lòng sử dụng email khác.', 'error');
            return;
        }

        // Tạo user mới
        const newUser = {
            id: generateUserId(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password, // Trong thực tế nên hash password
            birthDate: birthDate,
            newsletter: newsletter,
            createdAt: new Date().toISOString(),
            isActive: true
        };

        // Lưu user vào localStorage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        showMessage('Đăng ký thành công! Đang chuyển đến trang đăng nhập...', 'success');

        // Chuyển hướng đến trang đăng nhập sau 2 giây
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }

    // Validate form
    function validateForm(data) {
        const { firstName, lastName, email, phone, password, confirmPassword, birthDate, agreeTerms } = data;

        if (!firstName || !lastName) {
            return { isValid: false, message: 'Vui lòng nhập đầy đủ họ tên!' };
        }

        if (!email) {
            return { isValid: false, message: 'Vui lòng nhập email!' };
        }

        if (!isValidEmail(email)) {
            return { isValid: false, message: 'Email không hợp lệ!' };
        }

        if (!phone) {
            return { isValid: false, message: 'Vui lòng nhập số điện thoại!' };
        }

        if (!isValidPhone(phone)) {
            return { isValid: false, message: 'Số điện thoại không hợp lệ!' };
        }

        if (!password) {
            return { isValid: false, message: 'Vui lòng nhập mật khẩu!' };
        }

        if (password.length < 6) {
            return { isValid: false, message: 'Mật khẩu phải có ít nhất 6 ký tự!' };
        }

        if (password !== confirmPassword) {
            return { isValid: false, message: 'Mật khẩu xác nhận không khớp!' };
        }

        if (!birthDate) {
            return { isValid: false, message: 'Vui lòng chọn ngày sinh!' };
        }

        if (!isValidAge(birthDate)) {
            return { isValid: false, message: 'Bạn phải đủ 13 tuổi để đăng ký!' };
        }

        if (!agreeTerms) {
            return { isValid: false, message: 'Vui lòng đồng ý với điều khoản dịch vụ!' };
        }

        return { isValid: true, message: 'Valid' };
    }

    // Validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate phone (Vietnam format)
    function isValidPhone(phone) {
        const phoneRegex = /^(\+84|84|0)[0-9]{9,10}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    // Validate age (must be at least 13 years old)
    function isValidAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        const age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        
        return age >= 13;
    }

    // Generate unique user ID
    function generateUserId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
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
        registerForm.insertBefore(messageDiv, registerForm.firstChild);

        // Tự động ẩn sau 6 giây
        setTimeout(() => {
            if (messageDiv.parentElement) {
                messageDiv.remove();
            }
        }, 6000);
    }

    // Xử lý social register (demo)
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const provider = this.classList.contains('facebook') ? 'Facebook' : 'Google';
            showMessage(`Chức năng đăng ký bằng ${provider} đang phát triển!`, 'info');
        });
    });

    // Real-time validation
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strengthIndicator = document.getElementById('password-strength');
        
        if (!strengthIndicator) {
            const indicator = document.createElement('div');
            indicator.id = 'password-strength';
            indicator.className = 'password-strength';
            this.parentElement.appendChild(indicator);
        }
        
        updatePasswordStrength(password);
    });

    confirmPasswordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const confirmPassword = this.value;
        
        if (confirmPassword && password !== confirmPassword) {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = '#e0e0e0';
        }
    });

    // Password strength indicator
    function updatePasswordStrength(password) {
        const indicator = document.getElementById('password-strength');
        if (!indicator) return;

        let strength = 0;
        let message = '';
        let color = '';

        if (password.length >= 6) strength++;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;

        switch (strength) {
            case 0:
            case 1:
                message = 'Yếu';
                color = '#f44336';
                break;
            case 2:
                message = 'Trung bình';
                color = '#ff9800';
                break;
            case 3:
                message = 'Khá';
                color = '#2196f3';
                break;
            case 4:
            case 5:
                message = 'Mạnh';
                color = '#4caf50';
                break;
        }

        indicator.innerHTML = `<small style="color: ${color}">Độ mạnh mật khẩu: ${message}</small>`;
    }
});

// CSS cho password strength và thông báo (thêm vào head)
const registerStyles = `
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

.password-strength {
    margin-top: 0.25rem;
}

.password-strength small {
    font-size: var(--font-size-xs);
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', registerStyles);
