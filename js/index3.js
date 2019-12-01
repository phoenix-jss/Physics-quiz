var quiz = {
    questions : ["Which one of the following is the mathematical adaptation of Stefan’s Law?","Which form does the equation of the slope of Stefan’s Law have?","In this experiment,The graph of Stefan’s Law is plotted between :"," In this experiment, R0= ?","What could lead to an error in this experiment?"],
    opt1 : ["E=σ(T-T0)","y=mx+c","Log10P on X-axis & Log10T on Y-axis","Rg/3","High Current"],
    opt2 : ["E=σ(T2-T02)","y=4ax2","P on X-axis & T on Y-axis"," Rg","Steady Current"],
    opt3 : ["E=σ(T3-T03)"," xy=1","Log10P on Y-axis & Log10T on X-axis","Rg/3.9","External Pressure"],
    opt4 : ["E=σ(T4-T04)","  x2+y2=1","P on Y-axis & T on X-axis"," Rg/2","External Temperature"],
    answer : ["E=σ(T4-T04)","y=mx+c","Log10P on Y-axis & Log10T on X-axis","Rg/3.9"," High Current"]
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
