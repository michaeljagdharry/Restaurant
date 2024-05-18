
///////////////////////////////////////////////////////
//Cart Functionality
///////////////////////////////////////////////////////

shoppingCart = []

var menuItems = document.querySelectorAll(".container > img");
for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
}



























///////////////////////////////////////////////////////
//Event Handlers
///////////////////////////////////////////////////////

function leftRight(event, leftFunc, rightFunc) {
    // Get the width of the image
    var imageWidth = this.offsetWidth;
    // Get the position of the click relative to the left edge of the image
    var clickPosition = event.pageX - this.getBoundingClientRect().left;
    // Calculate the click position as a percentage of the image width
    var clickPercentage = (clickPosition / imageWidth) * 100;
    // Decide which function to call based on the click position
    if (clickPercentage < 50) {
        leftFunc();
    } else {
        rightFunc();
    }
};

///////////////////////////////////////////////////////
//Food Data
///////////////////////////////////////////////////////

foodData = [
    {name: "appetizer1", price: 5},
    {name: "appetizer2", price: 3},
    {name: "appetizer3", price: 4},
    {name: "burger1", price: 10},
    {name: "burger2", price: 12},
    {name: "burger3", price: 14},
    {name: "salad1", price: 6},
    {name: "salad2", price: 5},
    {name: "salad3", price: 7}
]


//Way to add eventlistener to each image
menuItems.forEach(x => x.addEventListener("mouse", function logID() {
    console.log(x.getAttribute('id'))
    }
))

menuItems.forEach(x => x.removeEventListener("click", logID))

foodNameRegex = /\w+(?=\.jpg)/

// for(let i = 0; i < menuItems.length; i++) {
//     foodName = menuItems[i].src.match(foodNameRegex);
//     menuItems[i].addEventListener('hover', updateCart)
// }

//Work on one item to generalize to multiple items 

