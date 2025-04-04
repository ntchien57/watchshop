document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll khi click vào menu
    document.querySelectorAll(".nav-link").forEach(function (navLink) {
        navLink.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                window.scrollTo({
                    top: document.querySelector(hash).offsetTop - 100, // Trừ đi chiều cao navbar
                    behavior: "smooth",
                });
            }
        });
    });

    // Highlight menu khi cuộn trang
    window.addEventListener("scroll", function () {
        var scrollPos = document.documentElement.scrollTop + 110; // Bù trừ navbar
        var windowBottom = window.scrollY + window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight;

        // Xóa active cũ
        document.querySelectorAll(".nav-item").forEach(function (navItem) {
            navItem.classList.remove("active");
        });

        document.querySelectorAll(".nav-link").forEach(function (navLink) {
            var section = document.querySelector(navLink.getAttribute("href"));
            if (
                section.offsetTop <= scrollPos &&
                section.offsetTop + section.offsetHeight > scrollPos
            ) {
                navLink.parentElement.classList.add("active");
            }
        });

        // Nếu đã cuộn đến cuối trang, active luôn "Contact"
        if (windowBottom >= documentHeight) {
            document.querySelectorAll(".nav-item").forEach(function (navItem) {
                navItem.classList.remove("active");
            });
            document.querySelector('.nav-link[href="#contact"]').parentElement.classList.add("active");
        }
    });
});


$(document).ready(function () {
    $('#contact-form').submit(function (event) {
        // Lấy giá trị các trường
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Kiểm tra họ tên: không chứa ký tự số
        var namePattern = /^[A-Za-z\s]+$/;
        if(name === ''){
            alert("Họ tên là bắt buộc.");
            event.preventDefault(); // Ngừng gửi form
            return false;
        }else if (!namePattern.test(name)) {
            alert("Họ tên không được chứa ký tự số.");
            event.preventDefault(); // Ngừng gửi form
            return false;
        }

        // Kiểm tra email: phải có định dạng hợp lệ
        if (email === "") {
            alert("Email là bắt buộc.");
            event.preventDefault(); // Ngừng gửi form
            return false;
        }

        // Kiểm tra nội dung: phải có ít nhất 20 ký tự và không trống
        if (message === "") {
            alert("Nội dung tin nhắn không được để trống.");
            event.preventDefault(); // Ngừng gửi form
            return false;
        } else if (message.length < 20) {
            alert("Nội dung tin nhắn phải có ít nhất 20 ký tự.");
            event.preventDefault(); // Ngừng gửi form
            return false;
        }

        alert("Gửi form thành công");
        return true;

    });

    $('#modalForm').submit(function (event) {
        // Lấy các giá trị từ form
        var fullname = $('#fullname').val();
        var phone = $('#phone').val();
        var email = $('#emailModal').val();
        var services = $('input[name="services[]"]:checked').length;
        var notes = $('#notes').val();

        // Kiểm tra họ tên không được trống
        if (fullname === '') {
            alert("Vui lòng nhập họ tên.");
            event.preventDefault(); // Ngừng gửi form
            return false;
        }

        // Kiểm tra số điện thoại không được trống
        if (phone === '') {
            alert("Vui lòng nhập số điện thoại.");
            event.preventDefault(); // Ngừng gửi form
            return false;
        }

        // Kiểm tra email có định dạng hợp lệ
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Email không hợp lệ.");
            event.preventDefault(); // Ngừng gửi form
            return false;
        }

        // Kiểm tra ít nhất một checkbox được chọn
        if (services === 0) {
            alert("Vui lòng chọn ít nhất một gói dịch vụ.");
            event.preventDefault(); // Ngừng gửi form
            return false;
        }

        // Kiểm tra yêu cầu khác có dữ liệu
        if (notes === '') {
            alert("Vui lòng nhập yêu cầu khác (nếu có).");
            event.preventDefault(); // Ngừng gửi form
            return false;
        }

        alert("Gửi đăng ký thành công");
        return true; // Nếu tất cả hợp lệ, form sẽ được gửi
    });

    $("#formRegister").on("submit", function(event) {
        var isValid = true;

        // Kiểm tra Họ và tên
        var fullname = $("#fullname").val();
        if (fullname === "") {
            isValid = false;
            alert("Họ và tên không được để trống.");
        }

        // Kiểm tra Email
        var email = $("#email").val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email === "") {
            isValid = false;
            alert("Email không được để trống.");
        } else if (!email.match(emailPattern)) {
            isValid = false;
            alert("Email không hợp lệ.");
        }

        // Kiểm tra mật khẩu
        var password = $("#password").val();
        if (password === "") {
            isValid = false;
            alert("Mật khẩu không được để trống.");
        } else if (password.length < 8) {
            isValid = false;
            alert("Mật khẩu phải có ít nhất 8 ký tự.");
        }

        // Kiểm tra Xác nhận mật khẩu
        var confirm_password = $("#confirm_password").val();
        if (confirm_password === "") {
            isValid = false;
            alert("Xác nhận mật khẩu không được để trống.");
        } else if (password !== confirm_password) {
            isValid = false;
            alert("Mật khẩu và xác nhận mật khẩu không khớp.");
        }

        // Nếu có lỗi, ngừng submit form
        if (!isValid) {
            event.preventDefault();
        }else{
            alert("Đăng ký thành công");
            return true;
        }
    });
});

