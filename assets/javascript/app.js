//incomplete. could only get the results page to read accurately in certain situations, not all

$(document).ready(function() {
})

//start screen

$("#theQuestions").hide();
$("#howdIDo").hide();

var myQuestions = [
    {question1 : $('#question1 h1').text(),
    answers: ["correct", "wrongA", "wrongB", "wrongC"],
    correctAnswer: 0},
    {question2 : $('#question2 h1').text(),
    answers: ["wrongB", "wrongA", "correct", "wrongC"],
    correctAnswer: 2},
    {question3 : $('#question3 h1').text(),
    answers: ["wrongC", "wrongA", "wrongB", "correct"],
    correctAnswer: 3},
    {question4 : $('#question4 h1').text(),
    answers: ["wrongB", "wrongA", "correct", "wrongC"],
    correctAnswer: 2},
    {question5 : $('#question5 h1').text(),
    answers: ["wrongA", "correct", "wrongB", "wrongC"],
    correctAnswer: 1},
    {question6 : $('#question6 h1').text(),
    answers: ["wrongC", "wrongA", "wrongB", "correct"],
    correctAnswer: 3},
    {question7 : $('#question7 h1').text(),
    answers: ["correct", "wrongA", "wrongB", "wrongC"],
    correctAnswer: 0},
    {question8 : $('#question8 h1').text(),
    answers: ["wrongB", "wrongA", "correct", "wrongC"],
    correctAnswer: 2},
    {question9 : $('#question9 h1').text(),
    answers: ["correct", "wrongA", "wrongB", "wrongC"],
    correctAnswer: 0},
    {question10 : $('#question10 h1').text(),
    answers: ["wrongB", "wrongA", "wrongc", "correct"],
    correctAnswer: 3},
];

console.log(myQuestions);

// variables re: answers have to start at 0

var unAn = 0;
var coAn = 0;
var wrAn = 0;


// start with a timer that can count down from thirty to zero
// make it a button


$("#startB").on("click", function() {

    $("#startB").hide();

    $("#theQuestions").show();

//variables

    var timer = 30;

    var secs = document.getElementById("sec");
    
//setInterval is a method that calls a function

    var timeHandler = setInterval(countdown, 1000);

function stopTimer() {
        clearTimeout(timeHandler);
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
    console.log('game over');
    submitAnswers();
    $("#theQuestions").hide();
    $("#howdIDo").show();
    }

    function an1() {
        var question1 = document.getElementsByName("choice");
        var i = 0, len = question1.length;
        var checked = false;
        var userAnswer;
            
        for( ; i < len; i++ ) {
            if(question1[i].checked) {
            checked = true;
            userAnswer = question1[i].value;
               }
            } 
        // correct
    
        if(userAnswer === "correct1") {
            coAn++;
            $("#coAn").text(coAn);
             }
        //didnt Answer
        if(!checked) {
            unAn++;
            $("#unAn").text(unAn);
             }
             
        // Incorrect answer
         else {
            wrAn++;
            $("#wrAn").text(wrAn);
            }
            
        }
    
    function an2() {
        var question2 = document.getElementsByName("choice2");
        var i = 0, len = question2.length;
        var checked = false;
        var userAnswer;
                
            for( ; i < len; i++ ) {
            if(question2[i].checked) {
                checked = true;
                userAnswer = question2[i].value;
                }
                } 
    
            // Correct answer
            if(userAnswer === "correct2") {
                coAn++;
                $("#coAn").text(coAn);
                }
            // didn't answer
            if(!checked) {
                unAn++;
                $("#unAn").text(unAn);
                }
                 
            // Incorrect answer
            else {
            wrAn++;
            $("#wrAn").text(wrAn);
            }
            }
            function an3() {
                var question3 = document.getElementsByName("choice3");
                var i = 0, len = question3.length;
                var checked = false;
                var userAnswer;
                    
                for( ; i < len; i++ ) {
                    if(question3[i].checked) {
                    checked = true;
                    userAnswer = question3[i].value;
                       }
                    } 
                // correct
            
                if(userAnswer === "correct3") {
                    coAn++;
                    $("#coAn").text(coAn);
                     }
                //didnt Answer
                if(!checked) {
                    unAn++;
                    $("#unAn").text(unAn);
                     }
                     
                // Incorrect answer
                 else {
                    wrAn++;
                    $("#wrAn").text(wrAn);
                    }
                    
                }
            
        function an4() {
            var question4 = document.getElementsByName("choice4");
            var i = 0, len = question4.length;
            var checked = false;
            var userAnswer;
                        
            for( ; i < len; i++ ) {
            if(question4[i].checked) {
                checked = true;
                userAnswer = question4[i].value;
                }
                } 
            
             // Correct answer
            if(userAnswer === "correct4") {
            coAn++;
            $("#coAn").text(coAn);
            }
            // didn't answer
            if(!checked) {
            unAn++;
            $("#unAn").text(unAn);
            }
                         
            // Incorrect answer
            else {
            wrAn++;
            $("#wrAn").text(wrAn);
            }
            }
    
        function an5() {
            var question5 = document.getElementsByName("choice5");
            var i = 0, len = question5.length;
            var checked = false;
            var userAnswer;
                    
            for( ; i < len; i++ ) {
            if(question5[i].checked) {
            checked = true;
            userAnswer = question5[i].value;
            }
            } 
            // correct
            
            if(userAnswer === "correct5") {
            coAn++;
            $("#coAn").text(coAn);
            }
            //didnt Answer
            if(!checked) {
            unAn++;
            $("#unAn").text(unAn);
            }
                     
            // Incorrect answer
            else {
            wrAn++;
            $("#wrAn").text(wrAn);
            }
                    
            }
            
        function an6() {
            var question6 = document.getElementsByName("choice6");
            var i = 0, len = question6.length;
            var checked = false;
            var userAnswer;
                        
            for( ; i < len; i++ ) {
            if(question6[i].checked) {
            checked = true;
            userAnswer = question6[i].value;
            }
            } 
            
            // Correct answer
            if(userAnswer === "correct6") {
            coAn++;
            $("#coAn").text(coAn);
            }
            // didn't answer
            if(!checked) {
            unAn++;
            $("#unAn").text(unAn);
            }
                         
            // Incorrect answer
            else {
            wrAn++;
            $("#wrAn").text(wrAn);
            }
            }
    
        function an7() {
    
            var question7 = document.getElementsByName("choice7");
            var i = 0, len = question7.length;
            var checked = false;
            var userAnswer;
                            
            for( ; i < len; i++ ) {
                if(question7[i].checked) {
                checked = true;
                userAnswer = question7[i].value;
                }
                } 
                // correct
                    
                if(userAnswer === "correct7") {
                coAn++;
                $("#coAn").text(coAn);
                }
                
                //didnt Answer
    
                if(!checked) {
                unAn++;
                $("#unAn").text(unAn);
                }
                             
                // Incorrect answer
                else {
                wrAn++;
                $("#wrAn").text(wrAn);
                }
                            
                }
                    
        function an8() {
            var question8 = document.getElementsByName("choice8");
            var i = 0, len = question8.length;
            var checked = false;
            var userAnswer;
                                
            for( ; i < len; i++ ) {
                if(question8[i].checked) {
                    checked = true;
                    userAnswer = question8[i].value;
                    }
                    } 
                    
            // Correct answer
            if(userAnswer === "correct8") {
            coAn++;
            $("#coAn").text(coAn);
            }
    
            // didn't answer
            if(!checked) {
            unAn++;
            $("#unAn").text(unAn);
            }
                                 
            // Incorrect answer
            else {
            wrAn++;
            $("#wrAn").text(wrAn);
            }
            }
    
    function submitAnswers() {
        an1();
        an2();
        an3();
        an4();
        an5();
        an6();
        an7();
        an8();
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