var numSqueares = 6;
var colours = generateRandomColours(numSqueares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDispay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
// var easyButton = document.querySelector("#easyBtn");
// var hardButton = document.querySelector("#hardBtn");

init();

function init(){
	//mode buttons event listeners
	setupMode();
	setupSquares();
	reset();
}

function setupMode(){
		for (var i = 0; i < modeBtns.length; i++) {
	modeBtns[i].addEventListener("click", function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent=== "Easy"?numSqueares=3:numSqueares=6;
		reset();
		});
	}
}

function setupSquares(){
 for (var i = 0; i < squares.length; i++) {
 //	squares[i].style.backgroundColor = colours[i];
 	//add click listeners to squares;
 	squares[i].addEventListener("click", function(){
 		var clickedColour = this.style.backgroundColor;
 	//	console.log(clickedColour, pickedColour);
 		if (clickedColour === pickedColour) {
 			messageDispay.textContent = "Correct"
 			resetButton.textContent = "Play Again?"
 			changeColours(clickedColour);
 			h1.style.backgroundColor = clickedColour;
 		}else{
 			this.style.backgroundColor = "#232323";
 			messageDispay.textContent = "Try Again";
 		}
 	});
 }	
}



function reset(){
	//generate new colour
 	colours = generateRandomColours(numSqueares);
 	//pick new random colour
 	pickedColour = pickColour();
 	//change display colour to match the new picked colour
 	colourDisplay.textContent = pickedColour;
 	resetButton.textContent = "New colours";
 	messageDispay.textContent = "";
 	//change colour of squares
 	for (var i = 0; i < squares.length; i++) {
 		squares[i].style.backgroundColor = colours[i];
 		if (colours[i]) {
 			squares[i].style.backgroundColor = colours[i];
 			squares[i].style.display = "block";
 		}else{
 			squares[i].style.display= "none"; 
 		}
 	}

 	h1.style.backgroundColor = "steelblue";
}

 //colourDisplay.textContent = pickedColour;

 
 function changeColours(color){
 	for (var i = 0; i < squares.length; i++) {
 		squares[i].style.backgroundColor = color;
 	}
 }

 function pickColour(){
 	var randomNum = Math.floor(Math.random() * colours.length);
 	return colours[randomNum];
 }

 function generateRandomColours(num){
 	//make an array
 	var arr = [];
 	//add random colours
 	for (var i = 0; i < num; i++) {
 		//get random colour
 		arr.push(randomColour())
 		//push to array
 		 	
 	}
 		//return the array
 	return arr;
 }



 function randomColour(){
 	//red 
 		var r = Math.floor(Math.random()* 256);
 	// green
 		var g = Math.floor(Math.random()* 256);
 	//blue
 		var b = Math.floor(Math.random()* 256);

 		return "rgb(" + r + ", " + g + ", " + b + ")";
 }


 resetButton.addEventListener("click", function(){
 	reset();
 });
 
