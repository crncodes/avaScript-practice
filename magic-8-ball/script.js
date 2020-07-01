//jquery wrapper//
$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["Why are you asking me?", "I don't know!", "Yes!", "No.", "Maybe(mwahaha)."];
$("#answer").hide();

magic8Ball.pickAnswer = function (question)
{
	$("#8ball").effect("shake");		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var randomAnswerArray = randomNumber * this.listOfAnswers.length;
	var roundAnswer = Math.floor(randomAnswerArray);
	var randomAnswer = this.listOfAnswers[roundAnswer];
	//display answer

$("#answer").text( randomAnswer );

console.log(question);	console.log(randomAnswer);
};
//prompt for question
var clickButton = function (){
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout (
		function () {
	var question = prompt("Ask me a yes/no question.")
	magic8Ball.pickAnswer(question)
		},500);

};
$("#questionButton").click( clickButton );
//magic8Ball.pickAnswer("Can I really do this?");
});
