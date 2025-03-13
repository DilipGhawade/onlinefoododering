/* write a login function email and password the default password is 123 and email is dilip@gmail.com if user enter the same details then login is successful ohter show the error messge the id for email is email and for password is password
 */

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "dilip@gmail.com" && password == "123") {
    alert("Login successful");
  } else {
    alert("Invalid email or password");
  }
}
let foodList = [
  {
    name: "Pizza",
    image: "images/pizza.png",
    description: "The pizza is the best option for eat",
  },
  {
    name: "Burger",
    image: "images/burger.png",
    description: "The pizza is the best option for eat",
  },
  {
    name: "Pasta",
    image: "images/pasta.png",
    description: "The pizza is the best option for eat",
  },
  {
    name: "Salad",
    image: "images/salad.png",
    description: "The pizza is the best option for eat",
  },
  {
    name: "Sushi",
    image: "images/sushi.png",
    description: "The pizza is the best option for eat",
  },
];
function createFoodList() {
  //   if (htmlPage == "index.html") {

  var foodContainer = document.createElement("div");
  foodContainer.style.display = "flex";
  foodContainer.style.flexWrap = "wrap"; // Allow wrapping to next row
  foodContainer.style.justifyContent = "center"; // Center items

  for (var i = 0; i < foodList.length; i++) {
    var food = foodList[i];
    var foodItem = document.createElement("div");
    foodItem.style.margin = "10px"; // Add some margin for spacing
    foodItem.onclick = (function (f) {
      return function () {
        addToCart(f, "cart.html");
      };
    })(food);

    foodItem.innerHTML = `<img src="${food.image}" alt="${food.name}" style="width: 50px; height: 50px;">`;
    foodItem.innerHTML += `<h2>${food.name}</h2>`;
    foodItem.innerHTML += `<p>${food.description}</p>`;
    foodContainer.appendChild(foodItem);
  }

  document.body.appendChild(foodContainer);
  //   }
}
var cart = [];

function addToCart(food, htmlPage) {
  //   if (htmlPage == "cart.html") {
  console.log(`add to card clicked and the food is ${food.name}`);

  //   if (localStorage.getItem("cart")) {
  //     cart = JSON.parse(localStorage.getItem("cart"));
  //   }
  cart.push(food);
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
  // window.location.href = htmlPage;
  //   }
}

function showCartList() {
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  console.log("show cart list is called and the cart list is ", cart);

  var cartContainer = document.createElement("div");
  cartContainer.style.display = "flex";
  cartContainer.style.flexWrap = "wrap"; // Allow wrapping to next row
  cartContainer.style.justifyContent = "center"; // Center items
  //   if (cart.length == 0) {
  //     var cartItem = document.createElement("div");
  //     cartItem.innerHTML = `<h2>Cart is empty</h2>`;
  //     cartContainer.appendChild(cartItem);
  //   } else {
  for (var i = 0; i < cart.length; i++) {
    var food = cart[i];
    var cartItem = document.createElement("div");
    cartItem.style.margin = "10px"; // Add some margin for spacing
    cartItem.innerHTML = `<img src="${food.image}" alt="${food.name}" style="width: 50px; height: 50px;">`;
    cartItem.innerHTML += `<p>${food.name}</p>`;
    cartContainer.appendChild(cartItem);
  }

  document.body.appendChild(cartContainer);
  //   }
}

function serchItem() {
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", serchItem);
  const searchValue = searchInput.value.toLowerCase();
  console.log("search value ", searchValue);

  const filteredItems = foodList.filter((element) =>
    element.name.toLowerCase().includes(searchValue)
  );

  // Clear the food list container
  const foodContainer = document.getElementById("food");
  foodContainer.innerHTML = "";

  filteredItems.forEach((element) => {
    const foodItem = document.createElement("div");
    foodItem.innerHTML = `<img src="${element.image}" alt="${element.name}" style="width: 50px; height: 50px;">`;
    foodItem.innerHTML += `<h2>${element.name}</h2>`;
    foodItem.innerHTML += `<p>${element.description}</p>`;
    foodContainer.appendChild(foodItem);
  });
}

// function addToCart(food) {
//   console.log(`add to card clicked and the food is ${food.name}`);

//   cart.push(food);
//   console.log(cart);
//   var cartItem = document.createElement("div");
//   cartItem.innerHTML = `<img src="${food.image}" alt="${food.name}" style="width: 50px; height: 50px;">`;
//   cartItem.innerHTML += `<p>${food.name}</p>`;
//   document.body.appendChild(cartItem);
// }
// createFoodList("index.html");
