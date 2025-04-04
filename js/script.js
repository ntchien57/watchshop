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
});

