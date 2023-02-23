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

function myfunction(){
  var input = document.getElementById("quantity")
  if(quantity.value<1){
      window.alert("Cart could not be empty")
  }
  else{
      location.href = "billing.html"
  }
}