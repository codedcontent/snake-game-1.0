

// get the snake
const snake = document.getElementById("snake");
const container = document.getElementById("container");
const food = document.getElementById("food");
const score = document.getElementById("score");

function randomFood() {
    const randomPositionY = Math.floor(Math.random() * (700 - 20));
    const randomPositionX = Math.floor(Math.random() * (1000 - 20));
    food.style.top = `${randomPositionY}px`;
    food.style.left = `${randomPositionX}px`;
}

randomFood();

const moveSnake = (key) => {
    const maxWidth = getComputedStyle(container).width.replace("px", "");
    const maxHeight = getComputedStyle(container).height.replace("px", "");
    // console.log("Sanke", getComputedStyle(snake).left, getComputedStyle(snake).top);
    if(key === "s") {
        let position =  getComputedStyle(snake).top.replace("px", "");
        if (position < maxHeight - 20) {
            position = parseInt(position) + 10;
        }
        snake.style.top = `${position}px`;
    }else if(key === "w") {
        let position =  getComputedStyle(snake).top.replace("px", "");
        if (position > 10) {
            position = parseInt(position) - 10;
        }
        snake.style.top = `${position}px`;
    }else if(key === "a") {
        let position =  getComputedStyle(snake).left.replace("px", "");
        if (position > 0) {
            position = parseInt(position) - 10;
        }
        snake.style.left = `${position}px`;
    }else if(key === "d") {
        let position =  getComputedStyle(snake).left.replace("px", "");
        if (position < maxWidth - 30) {
            position = parseInt(position) + 10;
        }
        snake.style.left = `${position}px`;
    }
}

let collision = false;
// Funtion to change food location
function changeFoodLocation() {
    const randomPositionY = Math.floor(Math.random() * (700 - 20));
    const randomPositionX = Math.floor(Math.random() * (1000 - 20));
    food.style.top = `${randomPositionY}px`;
    food.style.left = `${randomPositionX}px`;
    collision = false;
}

let gameScore = 0;
window.addEventListener("keypress", (event) => {
    moveSnake(event.key);
    let foodPositionX = getComputedStyle(food).left.replace("px", "");
    let foodPositionY = getComputedStyle(food).top.replace("px", "");
    let snakePositionX = getComputedStyle(snake).left.replace("px", "");
    let snakePositionY = getComputedStyle(snake).top.replace("px", "");
    console.log("snake postion Y ", snakePositionY, "Food postion Y ", foodPositionY);
    console.log("snake postion X ", snakePositionX, "Food postion X ", foodPositionX);
    // console.log(getRange((parseInt(snakePositionY)), (parseInt(snakePositionY) + 10)).includes(parseInt(foodPositionY)));console.log(foodPositionY);

    // For the y axis -> check if the food is within the snakes range
    if(getRange((parseInt(snakePositionY)), (parseInt(snakePositionY) + 10)).includes(parseInt(foodPositionY))) {
        if(getRange((parseInt(snakePositionX)), (parseInt(snakePositionX) + 10)).includes(parseInt(foodPositionX))) {
            console.log(foodPositionY, foodPositionX);
            console.log(snakePositionY, snakePositionX);
            gameScore++;
            score.innerText = gameScore;
            changeFoodLocation();
        }
    }

    // For the x axis -> check if the food is within the snakes x axis


    // if(snakePositionX >= foodPositionX - 20) {
    //     if(snakePositionY >= foodPositionY) {
    //         collision = true;
    //     }
    // }
    // if(collision) {
    //     gameScore++;
    //     score.innerText = gameScore;
    //     changeFoodLocation();
    // }
    // foodPositionX = getComputedStyle(food).left.replace("px", "");
    // foodPositionY = getComputedStyle(food).top.replace("px", "");
    // snakePositionX = getComputedStyle(snake).left.replace("px", "");
    // snakePositionY = getComputedStyle(snake).top.replace("px", "");
    // console.log("snake postion Y ", snakePositionY, "Food postion Y ", foodPositionY);
    // console.log("snake postion X ", snakePositionX, "Food postion X ", foodPositionX);
});


function getRange(start, stop) {
    console.log(start, stop);
    let rangeList = [];
    for(let i = start; i <= stop; i++) {
        rangeList.push(i);
        // console.log(i);
    }
    return rangeList;
}