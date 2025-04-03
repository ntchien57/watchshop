
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
