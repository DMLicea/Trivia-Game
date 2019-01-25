function an1() {
   var radios = document.getElementsByName("choice");
   var i = 0, len = question1.length;
   var checked = false;
   var userAnswer;
   
   for( ; i < len; i++ ) {
      if(question1[i].checked) {
        checked = true;
        userAnswer = question1[i].value;
      }
   } 
   // didn't answer
   if(!checked) {
      unAn++;
      $("#unAn").text(unAn);
    }
    // Correct answer
    if(userAnswer === "0") {
       coAn++;
       $("#coAn").text(coAn);
    }
    // Incorrect answer
    else {
       wrAn++;
       $("#wrAn").text(wrAn);
    }
   }