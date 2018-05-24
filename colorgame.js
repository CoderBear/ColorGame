var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(6);
	// pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	
	messageDisplay.textContent = "";
	resetButton.textContent = "NEW COLOR";
	h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;
resetButton.textContent = "NEW COLOR";

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