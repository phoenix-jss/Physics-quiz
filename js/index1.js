var quiz = {
    questions : ["On which principle it is based on?","On which of the following factors does specific resistance depends upon?","What is the unit of specific resistance?","What is the least count for screw gauge?","What is the correct expression for percentage error?"],
    opt1 : ["refraction","length","ohm","0.001mm","(Standard Value - Observed Value)/ Standard Value X100"],
    opt2 : ["reflection","temp","mho","0.01mm","Standard Value/Observed Value"],
    opt3 : ["KVL","nature of material","henry","0.0001mm","Observed Value/Standard Value X100"],
    opt4 : ["Wheat stone bridge","all of the above","ohm-m","0mm","None ot these"],
    answer : ["Wheat stone bridge","temp","ohm-m","0.01mm","(Standard Value - Observed Value)/ Standard Value X100"]
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
    document.getElementById("next").innerHTML = "<a href='/results.html' style='color:black;'>Submit Quiz</a>";
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
