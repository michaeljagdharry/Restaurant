const foodData = [ //Quantity=1 so this holds when adding to cart initially
    {id: "appetizer1", name: "Fries", price: 5, quantity: 1},
    {id: "appetizer2", name: "Mac & Cheese", price: 3, quantity: 1},
    {id: "appetizer3", name: "Cucumber Roll", price: 4, quantity: 1},
    {id: "burger1", name: "Single Cheeseburger", price: 10, quantity: 1},
    {id: "burger2", name: "Double Cheeseburger", price: 12, quantity: 1},
    {id: "burger3", name: "Triple Cheeseburger", price: 1, quantity: 1},
    {id: "salad1", name: "Caesar Salad", price: 6, quantity: 1},
    {id: "salad2", name: "Cucumber Salad", price: 5, quantity: 1},
    {id: "salad3", name: "Chicken Salad", price: 7, quantity: 1}
];

cart = [];


function renderCart() {
        const cartItemsDiv = document.getElementById('cart-items');
        cartItemsDiv.innerHTML = '';
        cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <span>Quantity: <input type="number" width="10px" value="${item.quantity}" min="0" max="1000" onchange="updateQuantity('${item.id}', parseInt(this.value))"></span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `
        cartItemsDiv.appendChild(itemDiv);
    });
    document.getElementById('cart-total').innerText = calculateTotal();
}

// function renderCart() {}


function addToCart(id) {
    const itemIndex = cart.findIndex(item => item.id === id); // Find cart object with id
    if (itemIndex == -1) { //If absent
        cart.push(foodData.filter(x => x.id === id)[0]) //Add object from foodData with id
    } else {
        cart[itemIndex].quantity++; //Otherwise increment existing quantity
    }
    renderCart();
}

function removeFromCart(id) { //Self-explanatory
    cart = cart.filter(x => x.id !== id);
    renderCart();
}

function updateQuantity(id, quantity) {
    const itemIndex = cart.findIndex(item => item.id === id); //Get index of item in card with id
    if (itemIndex != -1 && quantity > 0) { //If item exists with positive quantity
        cart[itemIndex].quantity = quantity; //Update quantity
    } else if (itemIndex != -1 && quantity == 0) { //Otherwise if item exists with zero quantity
        removeFromCart(id); //delete item with id from cart
    }
    renderCart();
}

function calculateTotal() { //Return numeric total
    return cart.reduce((total,item) => total + (item.price*item.quantity),0).toFixed(2);
}


renderCart();

addToCart('appetizer1'); 
addToCart('appetizer2'); 
addToCart('appetizer3'); 
addToCart('burger1'); 
addToCart('burger2'); 
addToCart('burger3'); 
addToCart('salad1'); 
addToCart('salad2'); 
addToCart('salad3'); 











///////////////////////////////////////////////////////
//Click Left and Right of Image Functionality
///////////////////////////////////////////////////////

// document.addEventListener('click', function(event) {
//     food = event.target;
//     // console.log(`mouseX:${event.pageX}\nmouseY:${event.pageY}`)
//     // console.log(`Window Width:${window.innerWidth}\nWindow Height:${window.innerHeight}`)

//     x = event.pageX; y = event.pageY;
//     X1 = food.getBoundingClientRect().left;
//     X2 = food.getBoundingClientRect().right;

//     if (X1 < x && x < (X2+X1)/2) //Left Function
//         console.log(food.src + ': left')
//     else //Right Function
//         console.log(food.src + ': right')

//     const regex = /food\/([^\/]+)\.jpg$/;

//     if(food.src != undefined) {
//     const match = food.src.match(regex)[1];
//     console.log(foodData[match]['price'])
//     }

// })

///////////////////////////////////////////////////////
//Connecting Food Images to their Prices
///////////////////////////////////////////////////////



























///////////////////////////////////////////////////////
//Cart Functionality
///////////////////////////////////////////////////////



































///////////////////////////////////////////////////////
//Food Data
///////////////////////////////////////////////////////


//Way to add eventlistener to each image
// menuItems.forEach(x => x.addEventListener("mouse", function logID() {
//     console.log(x.getAttribute('id'))
//     }
// ))

// menuItems.forEach(x => x.removeEventListener("click", logID))

foodNameRegex = /\w+(?=\.jpg)/

// for(let i = 0; i < menuItems.length; i++) {
//     foodName = menuItems[i].src.match(foodNameRegex);
//     menuItems[i].addEventListener('hover', updateCart)
// }

//Work on one item to generalize to multiple items 

