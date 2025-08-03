document.addEventListener("DOMContentLoaded", () => {
        // Xử lý sự kiện click của các nút giờ chiếu
        document.querySelectorAll(".showtime-btn").forEach((btn) => {
          btn.addEventListener("click", function () {
            // Loại bỏ class 'selected' khỏi tất cả các nút giờ chiếu trong cùng một thẻ phim
            const movieCard = btn.closest(".movie-card");
            if (movieCard) {
              movieCard.querySelectorAll(".showtime-btn").forEach(b => b.classList.remove("selected"));
            }
            btn.classList.add("selected");
          });
        });

        // Xử lý sự kiện click của các nút đặt vé (đã đổi tên từ book-btn)
        document.querySelectorAll(".book-ticket-btn").forEach((bookBtn) => {
          bookBtn.addEventListener("click", function () {
            const movieCard = this.closest(".movie-card"); // 'this' tham chiếu đến nút đặt vé được nhấp
            const movieTitle = movieCard.querySelector("h3").textContent.trim(); // Lấy tiêu đề trực tiếp
            const selectedShowtimeBtn = movieCard.querySelector(".showtime-btn.selected");

            if (!selectedShowtimeBtn) {
              alert("Vui lòng chọn giờ chiếu trước khi đặt vé.");
              return;
            }

            const selectedShowtime = selectedShowtimeBtn.getAttribute("data-showtime");

            window.location.href = `/booking?movie=${encodeURIComponent(movieTitle)}&showtime=${encodeURIComponent(selectedShowtime)}`;
          });
        });
      });

      window.addEventListener("pageshow", function (event) {
    if (event.persisted || (window.performance && performance.navigation.type === 2)) {
      // Nếu trình duyệt sử dụng cache để hiển thị lại trang
      location.reload();
    }
  });