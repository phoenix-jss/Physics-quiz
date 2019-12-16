var quiz = {
    questions : ["Q. Formula of magnetic field intensity is F=2(3.14)nI/(r.10^x), where ‘x’ is","Q. According to tangent law the magnetic field intensity(F) is","Q. The value of current should be adjusted such that deflection in galvanometer lies between","Q. What is the magnetic field outside a solenoid?","Q. Which, among the following qualities, is not affected by the magnetic field?"],
    opt1 : ["5","H tanθ","65-70","Infinity","Moving charge"],
    opt2 : ["6","H/tanθ","70-75","Half the value of the field inside","Change in magnetic flux"],
    opt3 : ["7","H cotθ","80-85","Double the value of the field inside","Current flowing in a conductor"],
    opt4 : ["8","H/cotθ","90-95","Zero","Stationary charge"],
    answer : ["7","H tanθ","70-75","Zero","Stationary charge"]
};

var i = 0;

var score = 0;

var ans;

var options = document.forms[0];
document.getElementById("score").innerHTML = 0;
document.getElementById("question").innerHTML = quiz.questions[i];
document.getElementById("op1").innerHTML = quiz.opt1[i];
document.getElementById("op2").innerHTML = quiz.opt2[i];
document.getElementById("op3").innerHTML = quiz.opt3[i];
document.getElementById("op4").innerHTML = quiz.opt4[i];

function changeContent(){
  if(i>=4){
    document.getElementById("score").innerHTML = score;
    document.getElementById("question").innerHTML = quiz.questions[i];
    document.getElementById("op1").innerHTML = quiz.opt1[i];
    document.getElementById("op2").innerHTML = quiz.opt2[i];
    document.getElementById("op3").innerHTML = quiz.opt3[i];
    document.getElementById("op4").innerHTML = quiz.opt4[i];
    document.getElementById("next").innerHTML = "<a href='../results.html' style='color:black;'>Submit Quiz</a>";
  }
  else{
    document.getElementById("score").innerHTML = score;
    document.getElementById("question").innerHTML = quiz.questions[i];
    document.getElementById("op1").innerHTML = quiz.opt1[i];
    document.getElementById("op2").innerHTML = quiz.opt2[i];
    document.getElementById("op3").innerHTML = quiz.opt3[i];
    document.getElementById("op4").innerHTML = quiz.opt4[i];
  }
}

function next(){
  i++;
  jQuery("input:radio").attr('disabled',false);
  jQuery('input:radio').prop('checked', false);
  changeContent();
}

function checkAnswer(event){
    if(quiz.opt1[i]==quiz.answer[i]){
      ans = 1;
    }
    else if(quiz.opt2[i]==quiz.answer[i]){
          ans = 2;
    }
    else if(quiz.opt3[i]==quiz.answer[i]){
          ans = 3;
    }
    else if(quiz.opt4[i]==quiz.answer[i]){
          ans = 4;
    }

    var whichinput = document.getElementsByName("option");
    var len = whichinput.length;
    var checkedinputno;
    var checkedinput;

    for(var b=0; b<len ; b++){
      if(whichinput[b].checked){
        checkedinputno = b;
        checkedinput = whichinput[b];
      }
    }

    if((checkedinputno+1) == ans){
      scoreUpdate();
    }
    jQuery("input:radio").attr('disabled',true);
}

function scoreUpdate(){
  score++;
  document.getElementById("score").innerHTML = score;


}
