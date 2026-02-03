let cart = [];

/* ADD TO CART WITH ANIMATION */
function addToCart(item, price, btn){
  cart.push({item, price});
  displayCart();

  btn.classList.add("added");
  btn.innerText = "Added ✓";

  setTimeout(() => {
    btn.classList.remove("added");
    btn.innerText = "Add to Cart";
  }, 1000);
}

/* DISPLAY CART */
function displayCart(){
  let cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";

  cart.forEach((c, i) => {
    cartDiv.innerHTML += `<p>${i+1}. ${c.item} - ₱${c.price}</p>`;
  });
}

/* CHECKOUT */
function checkout(){
  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  let total = 0;
  let receiptItems = document.getElementById("receiptItems");
  receiptItems.innerHTML = "";

  cart.forEach(c => {
    total += c.price;
    receiptItems.innerHTML += `<p>${c.item} - ₱${c.price}</p>`;
  });

  document.getElementById("totalAmount").innerText = "TOTAL: ₱" + total;
  document.getElementById("receipt").style.display = "block";
}

/* SCROLL REVEAL ANIMATION */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(section => {
    let top = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if(top < windowHeight - 100){
      section.classList.add("active");
    }
  });
});
