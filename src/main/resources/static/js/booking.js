document.addEventListener("DOMContentLoaded", () => {

  const numTicketsInput = document.getElementById("num-tickets");
  const totalAmountInput = document.getElementById("total-amount");

  
  const rawTicketPrice = 79000; 

  function formatCurrency(amount) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(amount);
  }

  // Hàm tính toán và cập nhật tổng tiền
  function calculateTotal() {
    let numberOfTickets = parseInt(numTicketsInput.value);

    // Kiểm tra nếu số lượng không hợp lệ, đặt lại về 1
    if (isNaN(numberOfTickets) || numberOfTickets < 1) {
      numTicketsInput.value = 1;
      numberOfTickets = 1;
    }

    const totalAmount = numberOfTickets * rawTicketPrice;
    totalAmountInput.value = formatCurrency(totalAmount);
  }

  // Gắn sự kiện 'input' để cập nhật tổng tiền ngay lập tức khi số lượng vé thay đổi
  numTicketsInput.addEventListener("input", calculateTotal);

  // Gọi hàm tính toán lần đầu để thiết lập tổng tiền ban đầu
  calculateTotal();
});

