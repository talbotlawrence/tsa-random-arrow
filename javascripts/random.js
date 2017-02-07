"use strict";

// var submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", function() {
window.addEventListener("click", function() {
	var container = document.getElementById("box");
	var left = `<img id="image" src="img/left.png" alt="Left Arrow!">`;
	var right = `<img id="image" src="img/right.png" alt="Right Arrow!">`;
	pickAPicture(left, right, container);
	// setTimeout("location.href = 'http://127.0.0.1:8080/'",200);
	// setInterval(function() {window.location.reload();}, 2000);
}, true);

function pickAPicture(first, second, html) {
	var randomNumber = Math.round(Math.random());			//this generates the numbers 0 or 1
	console.log("randomNumber is: ", randomNumber);
	if (randomNumber === 0) {
		html.innerHTML = first;
	} else {
		html.innerHTML = second;
	}
};

// window.location.reload();