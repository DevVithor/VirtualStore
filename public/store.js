const items = [
  {
    id: 0,
    name: "shirt",
    img: "assets/shirt.jpg",
    amount: 0
  },
  {
    id: 1,
    name: "shoes",
    img: "assets/shoes.jpg",
    amount: 0
  },
  {
    id: 2,
    name: "short",
    img: "assets/short.jpg",
    amount: 0
  },
]

StartStore = () => {
  var containerProducts = document.getElementById("products");
  items.map((val) => {
    containerProducts.innerHTML +=
      `

    <div class="products-single">
      <img src="` +
      val.img +
      `" />
      <p>` +
      val.name +
      `</p>
      <a key="` +
      val.id +
      `" href="#">adicionar ao carrinho!<a/>
    </div>


      `;
  });
};

StartStore();

updateCart = () => {
  var containerCart = document.getElementById("cart");
  containerCart.innerHTML = "";
    items.map((val) => {
      if(val.amount > 0){
      containerCart.innerHTML +=
        `

      <p>`+val.name+` | amount: `+val.amount+` </p> 
      <hr>

      `;
      }
    });
}

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    items[key].amount++;
    updateCart();
    return false;
  })
}
