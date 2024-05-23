const foodData = {
    "appetizer1": {price: 5},
    "appetizer2": {price: 3},
    "appetizer3": {price: 4},
    "burger1": {price: 10},
    "burger2": {price: 12},
    "burger3": {price: 14},
    "salad1": {price: 6},
    "salad2": {price: 5},
    "salad3": {price: 7}
}

///////////////////////////////////////////////////////
//Click Left and Right of Image Functionality
///////////////////////////////////////////////////////

document.addEventListener('click', function(event) {
    food = event.target;
    // console.log(`mouseX:${event.pageX}\nmouseY:${event.pageY}`)
    // console.log(`Window Width:${window.innerWidth}\nWindow Height:${window.innerHeight}`)

    x = event.pageX; y = event.pageY;
    X1 = food.getBoundingClientRect().left;
    X2 = food.getBoundingClientRect().right;

    if (X1 < x && x < (X2+X1)/2) //Left Function
        console.log(food.src + ': left')
    else //Right Function
        console.log(food.src + ': right')

    const regex = /food\/([^\/]+)\.jpg$/;

    if(food.src != undefined) {
    const match = food.src.match(regex)[1];
    console.log(foodData[match]['price'])
    }

})

///////////////////////////////////////////////////////
//Connecting Food Images to their Prices
///////////////////////////////////////////////////////


























///////////////////////////////////////////////////////
//Cart Functionality
///////////////////////////////////////////////////////

































shoppingCart = []
var menuItems = document.querySelectorAll(".container > img");
for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
}


///////////////////////////////////////////////////////
//Food Data
///////////////////////////////////////////////////////


//Way to add eventlistener to each image
menuItems.forEach(x => x.addEventListener("mouse", function logID() {
    console.log(x.getAttribute('id'))
    }
))

// menuItems.forEach(x => x.removeEventListener("click", logID))

foodNameRegex = /\w+(?=\.jpg)/

// for(let i = 0; i < menuItems.length; i++) {
//     foodName = menuItems[i].src.match(foodNameRegex);
//     menuItems[i].addEventListener('hover', updateCart)
// }

//Work on one item to generalize to multiple items 

