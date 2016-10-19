
var correct = '';
var count = 0;
var health = 200;
var health2 = 400;
var e = 0;
var j = 0;

var wrongChoice = [];

var rightChoice = ["_ ","_ ","_ ","_ "];

document.getElementById('right').innerHTML = rightChoice.join("");

$.get('/choice', function(data){
	//console.log(data);
	correct = data.word.toString();
});

document.onkeyup = function(event) {
	count = 0;
	var keypress = String.fromCharCode(event.keyCode).toLowerCase();
	
	for(i=0; i<4; i++){

		if(keypress == correct.charAt(i)){
			count += 1;
			j += .25;
			health2 = (health2 - j*health2);
			new Audio('swordAttack.mp3').play();
			rightChoice[i] = keypress;
			document.getElementById('right').innerHTML = rightChoice.join("");
			document.getElementById('health1').style.width = health2 + "px";
		}
	}

if(count == 0){
	e += .20;
	health = (health - e*health);
	new Audio('dragonAttack.mp3').play();
	wrongChoice.push(keypress);
	document.getElementById('wrong').innerHTML += (keypress + " ");
	document.getElementById('health2').style.width = health + "px";
}

if(e==1){
		alert('Sorry, the correct word was ' + '"' + correct + '"');
		var stop = document.getElementById('themeMusic');
		stop.pause();
		document.onkeyup = null;
		location.replace('gameOver.html');
		
	}

if(j==1){
		var stop = document.getElementById('themeMusic');
		stop.pause();
		document.onkeyup = null;
		location.replace('victory.html');
	}
}


