/* TD: 
3. Spread Cart to page width
4. Center AddToCart Buttons 
5. Click Cart Icon to Toggle Cart Display 
*/
const IDfromFileNameRegex = /food\/([^\/]+)\.jpg$/;

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
 
function renderCart() { //For Table 
cartTable = document.getElementById('cartTable')
// console.log(headerRow)
cartTable.innerHTML = ''; //Empty Table before re-rendering;
//Set initial header
cartTable.innerHTML += 
    ` 
    <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
    </tr>
    `;

cart.forEach(item => { //Create Row for each item in cart 
    const itemRow = cartTable.insertRow(-1);
    itemRow.className = 'cartTable-row'; //TD: Make styling. Can make individual styles for each cell

    newCell = itemRow.insertCell(-1); //Name
    newCell.innerText = item.name;

    newCell = itemRow.insertCell(-1); //Price
    newCell.innerText = '$'+item.price.toFixed(2);
    
    newCell = itemRow.insertCell(-1); //Quantity
    newCell.innerHTML = `<input type="number" width="10px" value="${item.quantity}" min="0" max="1000" onchange="updateQuantity('${item.id}', parseInt(this.value))"></input>`

    newCell = itemRow.insertCell(-1); //Remove Button
    newCell.innerHTML = `<button class ="cartTable-remove-button" onclick="removeFromCart('${item.id}')">Remove</button>`
});

totalCell = cartTable.insertRow(-1).insertCell(0);
totalCell.innerText = 'Total: $' + calculateTotal()
totalCell.className = 'cartTotalCell'
totalCell.setAttribute('colspan',4)

}

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
        removeFromCart(id); //delete item from cart
    }
    renderCart();
}

function calculateTotal() { //Return numeric total
    return cart.reduce((total,item) => total + (item.price*item.quantity),0).toFixed(2);
}


renderCart();

//Adding Stuff to Test
addToCart('appetizer1'); 
// addToCart('appetizer2'); 
// addToCart('appetizer3'); 
addToCart('burger1'); 
// addToCart('burger2'); 
// addToCart('burger3'); 
addToCart('salad1'); 
// addToCart('salad2'); 
// addToCart('salad3'); 

//////////////////////////////////////////////////////
const itemDivs = document.querySelectorAll('.container > div')
itemDivs.forEach(menuItem => { 
    const btn = document.createElement('button'); 
    btn.className = "addToCartButton";
    btn.innerText = "Add To Cart"
    const itemID = menuItem.children[0].src.match(IDfromFileNameRegex)[1] 
        //menuItem.children[0] is the food image that btn comes after
        //.src.match(...) grabs the food ID. The image filenames must correspond with the foodData id's. 
    btn.addEventListener('click', function () {
        addToCart(itemID)
   });
    menuItem.appendChild(btn) //Add as last child
})
/////////////////////////////////////////////////////

cartIcon = document.getElementById('cartIcon')
cartIcon.addEventListener('click', () => {
    const tab = document.getElementById('tab');

    if (tab.style.display != 'none') {
        tab.style.display = 'none';
    } else {
        tab.style.display = 'block'
    }

})