var express = require('express');
var app = express();
var randomWords = require('random-words');
var port = process.env.PORT || 3000;
var path = require('path');
app.use(express.static('public'));
app.set('view engine', 'html');


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/choice', function(req, res){
	
	function pick(){
		var choice = randomWords();

		if(choice.length == 4){
			//console.log(choice);
			res.json({word: choice});
		}
		else{
			pick();
		}
	}

	pick();
	
})

app.get('/win', function(req, res){
	res.sendFile(__dirname + '/public/victory.html');
})

app.get('/lose', function(req, res){
	res.sendFile(__dirname + '/public/gameOver.html');
})

app.listen(port);