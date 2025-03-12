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

function createFoodList() {
  var foodList = [
    { name: "Pizza", image: "images/pizza.png" },
    { name: "Burger", image: "images/burger.png" },
    { name: "Pasta", image: "images/pasta.png" },
    { name: "Salad", image: "images/salad.png" },
    { name: "Sushi", image: "images/sushi.png" },
    { name: "Pasta", image: "images/pasta.png" },
    { name: "Pasta", image: "images/pasta.png" },
    { name: "Pasta", image: "images/pasta.png" },
  ];

  var foodContainer = document.createElement("div");
  foodContainer.style.display = "flex";
  foodContainer.style.flexWrap = "wrap"; // Allow wrapping to next row
  foodContainer.style.justifyContent = "center"; // Center items

  for (var i = 0; i < foodList.length; i++) {
    var food = foodList[i];
    var foodItem = document.createElement("div");
    foodItem.style.margin = "10px"; // Add some margin for spacing

    foodItem.innerHTML = `<img src="${food.image}" alt="${food.name}">`;
    foodItem.innerHTML += `<p>${food.name}</p>`;
    foodContainer.appendChild(foodItem);
  }

  document.body.appendChild(foodContainer);
}

var cart = [];

function addToCart(food) {
  cart.push(food);
  var cartItem = document.createElement("div");
  cartItem.innerHTML = `<img src="${food.image}" alt="${food.name}">`;
  cartItem.innerHTML += `<p>${food.name}</p>`;
  document.body.appendChild(cartItem);
}
createFoodList();
