

// get the hold of the required elements
const snake = document.getElementById("snake");
const container = document.getElementById("container");
const food = document.getElementById("food");
const score = document.getElementById("score");


// Start of the foods posion at a random area
function randomFood() {
    const randomPositionY = Math.floor(Math.random() * (700 - 20));
    const randomPositionX = Math.floor(Math.random() * (1000 - 20));
    food.style.top = `${randomPositionY}px`;
    food.style.left = `${randomPositionX}px`;
}

randomFood();

// Make the snake move based on the key bindings - w, a, s ,d
const moveSnake = (key) => {
    // The maxWidth an minWidth are used as constrains to prevent the snake from going out of the game board
    const maxWidth = getComputedStyle(container).width.replace("px", "");
    const maxHeight = getComputedStyle(container).height.replace("px", "");
    if(key === "s") {
        // make snake move down
        let position =  getComputedStyle(snake).top.replace("px", "");
        if (position < maxHeight - 20) {
            position = parseInt(position) + 10;
        }
        snake.style.top = `${position}px`;
    }else if(key === "w") {
        // make snake move up
        let position =  getComputedStyle(snake).top.replace("px", "");
        if (position > 10) {
            position = parseInt(position) - 10;
        }
        snake.style.top = `${position}px`;
    }else if(key === "a") {
        // make snake move left
        let position =  getComputedStyle(snake).left.replace("px", "");
        if (position > 0) {
            position = parseInt(position) - 10;
        }
        snake.style.left = `${position}px`;
    }else if(key === "d") {
        // make snake move right
        let position =  getComputedStyle(snake).left.replace("px", "");
        if (position < maxWidth - 30) {
            position = parseInt(position) + 10;
        }
        snake.style.left = `${position}px`;
    }
}

// Funtion to change food location
function changeFoodLocation() {
    // Whenever this funtion is called the food appears in a different location on the game board
    const randomPositionY = Math.floor(Math.random() * (700 - 20));
    const randomPositionX = Math.floor(Math.random() * (1000 - 20));
    food.style.top = `${randomPositionY}px`;
    food.style.left = `${randomPositionX}px`;
}

// Temporarily store the game score for incremental purposes
let gameScore = 0;
// Listen for keyboard clicks
window.addEventListener("keypress", (event) => {
    // MAke the snake move based on the key pressed
    moveSnake(event.key);
    // Get the snake and food x, y parameters
    let foodPositionX = getComputedStyle(food).left.replace("px", "");
    let foodPositionY = getComputedStyle(food).top.replace("px", "");
    let snakePositionX = getComputedStyle(snake).left.replace("px", "");
    let snakePositionY = getComputedStyle(snake).top.replace("px", "");

    // For the y axis -> check if the food is within the snakes vertical range
    if(getRange((parseInt(snakePositionY)), (parseInt(snakePositionY) + 10)).includes(parseInt(foodPositionY))) {
        // For the x axis -> check if the food is within the snakes range horizontal range
        if(getRange((parseInt(snakePositionX)), (parseInt(snakePositionX) + 10)).includes(parseInt(foodPositionX))) {
            // If the above conditions are satisfied it means the snake has eaten the food
            // Increment the game score
            gameScore++;
            // set the game score
            score.innerText = gameScore;
            // Change the foods location
            changeFoodLocation();
        }
    }
});

// Javascript does not have a range function so I created one that servers the need for getting a range of values
function getRange(start, stop) {
    let rangeList = [];
    for(let i = start; i <= stop; i++) {
        rangeList.push(i);
    }
    return rangeList;
}