function quantityOfItemInc() {
  var quantityitem = document.getElementById("quantity").value;
  quantityitem++;

  if (quantityitem > 1) {
    document.querySelector(".minus-btn").removeAttribute("disabled");
    document.querySelector(".minus-btn").classList.remove("disabled");
  }

  document.getElementById("quantity").value = quantityitem;
}


document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
function quantityOfItemDec() {

  quantityitem = document.getElementById("quantity").value;
  quantityitem--;

  if (quantityitem == 1) {
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
  }

  document.getElementById("quantity").value = quantityitem;
}
