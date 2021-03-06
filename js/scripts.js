// JavaScript Document
"use strict";

function prefix() {
	//allow user to cycle through prefix flashcards
	var flashCardFront = document.getElementById('flashCardFront');
	flashCardFront.innerHTML = "prefix: super-";
	var flashCardBack = document.getElementById('flashCardBack');
	//flashCardBack.innerHTML = "meaning: above; sample word: superstar";
}

prefix();

function suffix() {
	//allow user to cycle through suffix flashcards
}

function readJSON() {
	//read json file and then get called by other function to display in html
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', './prefix_ver0002.json');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';
			document.getElementById('flashCardBack').innerHTML = output;
		}
	}
	request.send();
	
}
readJSON()

function randomJsonObj() {
	//grab random object from json
}

function nextFlashCard() {
	//allow user to see next flashcard
}

function prevFlashCard() {
	//allow user to see previous flashcard
}

function showFlashCardBack() {
	//allow user to see back of flashcard
}

function playerScore() {
	//show player score
	//increment player score
	//save score to leader board
}

function choose() {
	//checks if correct choice was made
	if(true) {
		//gives points and advances to next question if correct
		increasePoints();
	} else {
		//doesn't give points, advances to next prefix/suffix and takes away one life if incorrect
		wrongChoice();
	}
}

function nextQuestion() {
	request.open('GET', 'prefix_suffix_ver0002.json');
	//advances to next question
	//prefix
	
	//suffix
}

function increasePoints() {
	//increases players points when correct choice is made
	nextQuestion();
}

function wrongChoice() {
	//doesn't give points, advances to next prefix/suffix and takes away one life if incorrect
	nextQuestion();
}

function playGame() {
	//start game
}

function newGame() {
	//create new game
}

function saveGame() {
	//save game in localStorage
}

playerScore();
document.getElementById('choice1').addEventListener('click', choose);
// //listens for choice1 button to be clicked and then calls choose() function
document.getElementById('choice2').addEventListener('click', choose);
// //listens for choice2 button to be clicked and then calls choose() function
document.getElementById('choice3').addEventListener('click', choose);
// //listens for choice3 button to be clicked and then calls choose() function
document.getElementById('choice4').addEventListener('click', choose);
// //listens for choice4 button to be clicked and then calls choose() function
document.getElementById('playGame').addEventListener('click', playGame);
// //listens for playGame button to be clicked and then calls playGame() function
document.getElementById('newGame').addEventListener('click', newGame);
// //listens for newGame button to be clicked and then calls newGame() function
document.getElementById('saveGame').addEventListener('click', saveGame);
// //listens for saveGame button to be clicked and then calls saveGame() function
document.getElementById('prefix').addEventListener('click', prefix);
// //listens for prefix button to be clicked and then calls prefix() function
document.getElementById('suffix').addEventListener('click', suffix);
// //listens for suffix button to be clicked and then calls suffix() function