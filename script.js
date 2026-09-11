
let foods = [
    ["Fresh Fruits", "images/fresh_fruits.jpg"],
    ["Green Smoothie", "images/green_smoothie.jpg"],
    ["Mixed Nuts", "images/mixed_nuts.jpg"],
    ["Oats Bowl", "images/oats_bowl.jpg"],
    ["Quinoa Salad", "images/quinoa_salad.jpg"],
    ["Wheat Bread", "images/wheat_bread.jpg"]
];

let cart = [];

let container = document.getElementById("foodContainer");

for (let i = 0; i < foods.length; i++) {

    let div = document.createElement("div");

    div.className = "food";

    div.innerHTML =
        "<img src='" + foods[i][1] + "'>" +
        "<h3>" + foods[i][0] + "</h3>" +
        "<button class='add-btn' data-food='" + foods[i][0] + "'>Add to Cart</button>";

    container.appendChild(div);
}

let buttons = document.querySelectorAll(".add-btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let foodName = button.getAttribute("data-food");

        cart.push(foodName);

        document.getElementById("cartCount").innerText = cart.length;

        alert(foodName + " added to cart");

    });

});


document.getElementById("cartButton").addEventListener("click", function() {

    if (cart.length == 0) {

        alert("Your cart is empty");

    } else {

        document.querySelector(".food-container").style.display = "none";

        document.querySelector("body > h2").style.display = "none";

        document.getElementById("orderPage").style.display = "block";


       

        let list = document.getElementById("cartItems");

        list.innerHTML = "";

        for (let i = 0; i < cart.length; i++) {

            let item = document.createElement("li");

            item.innerText = cart[i];

            list.appendChild(item);

        }

    }

});


document.getElementById("backButton").addEventListener("click", function() {

    document.getElementById("orderPage").style.display = "none";

    document.querySelector(".food-container").style.display = "flex";

    document.querySelector("body > h2").style.display = "block";

});

document.getElementById("orderForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let address = document.getElementById("address").value;


    if (name == "" || address == "") {

        alert("Please fill all the details");

    } else {

        alert("Order placed successfully!");

        cart = [];

        document.getElementById("cartCount").innerText = "0";

        document.getElementById("orderForm").reset();

        document.getElementById("orderPage").style.display = "none";

        document.querySelector(".food-container").style.display = "flex";

        document.querySelector("body > h2").style.display = "block";

    }

});
