console.log("Hello");
// Select all buttons and the totalPrice element
const buttons = document.querySelectorAll("button");
const totalPriceElement = document.getElementById("totalPrice");
// Initialize total price
let totalPrice = 0;
// Function to update total price
function updateTotalPrice(price) {
  totalPrice += price;
  totalPriceElement.textContent = totalPrice.toFixed(1);
}
// Add click event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the price from the data-price attribute
    const price = parseFloat(this.getAttribute("data-price"));
    // Update total price
    updateTotalPrice(price);
    // Show an alert with the selected pizza size
    alert(`You selected ${this.textContent.trim()} pizza for $${price}`); //trim function removes unneccesary whitespace
  });
});
