/////////////////////////////////////////////////////
//Click Left and Right of Image Functionality
/////////////////////////////////////////////////////

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

    ;

    if(food.src != undefined) {
    const match = food.src.match(regex)[1];
    console.log(foodData[match]['price'])
    }

})