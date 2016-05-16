alert("Welcome to my Hangman RPG! Press any key to begin. The rules are exactly like hangman. Will you save the world or be consumed by darkness instead?")


var wrongChoice = [];

var rightChoice = ["_ ","_ ","_ ","_ "];

document.getElementById('right').innerHTML = rightChoice.join("");

var i = 0;
var j = 0;


document.onkeyup = function(event) {
	
	
	var health = 200;
	var health2 = 400;
	var incorrect; var correct;
	var keypress = String.fromCharCode(event.keyCode).toLowerCase();
	
	
	if(keypress == "f") {
		j += .25;
		health2 = (health2 - j*health2);
		new Audio('swordAttack.mp3').play();
		rightChoice[0] = "f";
		document.getElementById('right').innerHTML = rightChoice.join("");
		document.getElementById('health1').style.width = health2 + "px";
	}

	if(keypress == "i") {
		j += .25;
		health2 = (health2 - j*health2);
		new Audio('swordAttack.mp3').play();
		rightChoice[1] = "i";
		document.getElementById('right').innerHTML = rightChoice.join("");
		document.getElementById('health1').style.width = health2 + "px";
	}

	if(keypress == "r") {
		j += .25;
		health2 = (health2 - j*health2);
		new Audio('swordAttack.mp3').play();
		rightChoice[2] = "r";
		document.getElementById('right').innerHTML = rightChoice.join("");
		document.getElementById('health1').style.width = health2 + "px";
	}

	if(keypress == "e") {
		j += .25;
		health2 = (health2 - j*health2);
		new Audio('swordAttack.mp3').play();
		rightChoice[3] = "e";
		document.getElementById('right').innerHTML = rightChoice.join("");
		document.getElementById('health1').style.width = health2 + "px";
	}
	
	if (keypress != "f" && keypress != "i" && keypress != "r" && keypress != "e"){
		i += .25;
		health = (health - i*health);
		new Audio('dragonAttack.mp3').play();
		wrongChoice.push(keypress);
		document.getElementById('wrong').innerHTML += (keypress + " ");
		document.getElementById('health2').style.width = health + "px";
	}

	if(i==1){
		var stop = document.getElementById('themeMusic');
		stop.pause();
		new Audio('gameOver.mp3').play();
		alert("Game Over!");
	}

	if(j==1){
		var stop = document.getElementById('themeMusic');
		stop.pause();
		new Audio('victory.mp3').play();
		alert("You Win!");
	}
}

