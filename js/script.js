
  var allProducts = document.querySelectorAll(".cart-icon");
  var content = document.querySelector("#content");
  var showPrice = document.getElementById("showprice");
  var clearBtn = document.getElementById("clear");
  var searchInput = document.getElementById("search-input");

  var totalPrice = 0;
  var selectedProducts = []
   
  for (var i = 0; i < allProducts.length; i++) {
    allProducts[i].onclick = function () {
      var productBox = this.parentElement;
      var productName = productBox.querySelector(".product").textContent;
      var price = +productBox.querySelector("h4").getAttribute("price");

      totalPrice += price;
      selectedProducts.push({ name: productName, price: price });

      content.innerHTML += productName + " &nbsp;&nbsp;";
    };
  }

  
  showPrice.onclick = function () {
    if (selectedProducts.length === 0) {
      alert("لم يتم اختيار اي منتج");
      return;
    }

    if (totalPrice > 400) {
      alert("تم تطبيق خصم 20% على طلبك!");
      totalPrice -=800; 
    }

    alert("إجمالي السعر: " + totalPrice.toFixed(2) + "جنيه");
  };

  
  clearBtn.onclick = function () {
    totalPrice = 0;
    selectedProducts = [];
    content.innerHTML = "";
  };

  
  searchInput.oninput = function () {
    var searchValue = searchInput.value.toLowerCase().trim();
    var found = false;
    var containers = document.querySelectorAll(".container-1 div, .container-2 div");


    for (var m = 0; m < containers.length; m++) {
      var box = containers[m];
      var name = box.querySelector(".product").textContent.toLowerCase();

      
if (name.includes(searchValue)) {
        box.style.display = "block";
        found = true;
      } else {
        box.style.display = "none";
      }
    }

    if (searchValue !== "" && !found) {
      content.innerHTML = "Not Found";
    }

    if (searchValue === "") {
      content.innerHTML = "";
      for (var a = 0; a < containers.length; a++) {
        containers[a].style.display = "block";
      }
    }
  };