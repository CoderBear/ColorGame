var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	resetButton.textContent = "New Colors";
	setupModeButtons();
	setupSquares();
	// colorDisplay.textContent = pickedColor;
}

function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	// colorDisplay.textContent = pickedColor;
	// change colors of squares
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";

	for(var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		if(colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	colorDisplay.textContent = pickedColor;
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		// chnage each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random colors to array
	for(var i = 0; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColor()); 
	}
	// return that array
	return arr;
}

function randomColor() {
	// pick a red from 0-255
	var red = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var green = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}