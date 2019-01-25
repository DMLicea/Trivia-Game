$(document).ready(function() {
})

//start screen

$("#theQuestions").hide();
$("#howdIDo").hide();

var myQuestions = [

    {question : "question goes here",
    answers: ["choice 1 goes here", "choice 2 goes here", "choice 3 goes here", "choice 4 goes here"],
    correctAnswer: "arraynumberfromabove"}

]

// variables re: answers have to start at 0

var unAn = 0;
var coAn = 0;
var wrAn = 0;

function submitAnswers() {

    var radios = document.getElementsByName("choice");
    var i = 0, len = radios.length;
    var checked = false;
    var userAnswer;
    
    for( ; i < len; i++ ) {
       if(radios[i].checked) {
         checked = true;
         userAnswer = radios[i].value;
       }
    } 
    // didn't answer
    if(!checked) {
      unAn++;
      $("#unAn").text(unAn);
    }
    // Correct answer
    if(userAnswer === "correct") {
       coAn++;
       $("#coAn").text(coAn);
    }
    // Incorrect answer
    else {
       wrAn++;
       $("#wrAn").text(wrAn);
    }
}






// start with a timer that can count down from thirty to zero
// make it a button


$("#startB").on("click", function() {

    $("#startB").hide();

    $("#theQuestions").show();

//variables

    var timer = 3;

    var secs = document.getElementById("sec");
    
//setInterval is a method that calls a function

    setInterval(countdown, 1000);

function stopTimer() {
        clearTimeout(setInterval);
      }
    
//make the function 'countdown'

function countdown() {

      if (timer == 0) {

        stopTimer();
        secs.innerHTML = 0;
        gameOver();
    
      } 
      
      else {

        secs.innerHTML = timer;
        timer--;
      }

    }


 function gameOver() {
    submitAnswers();
    $("#theQuestions").hide();
    $("#howdIDo").show();

    }
    

});

//out of time 



//restart 

$("#restart").on("click", function() {

    location.reload();

});

//questions




// 8 questions
// choices
// end screen (correct, incorrect, unanswered)