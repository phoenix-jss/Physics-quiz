var quiz = {
    questions : ["Which solution is used in copper voltameter?","Which acid is used to increase the conductivity of copper sulphate solution?","What deflection do we make in TG?","Reduction factor is given by","Give expression of tangent law."],
    opt1 : ["Copper(ll) chloride","Sulphuric acid","60°","K= rH/μn","F= tanθ/H"],
    opt2 : ["Copper sulphate","Hydrochloric acid","30°","K= μr/2n","F= tan(θ+H)"],
    opt3 : ["Cupric hydroxide","Nitric acid","45°","K= H/rn","F= H tanθ"],
    opt4 : ["Cupric oxide","Chloric acid","90°","K= 2rH/ μn","F= H/tanθ"],
    answer : ["Copper sulphate","Copper sulphate","45°","K= 2rH/ μn","F= H tanθ"]
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
  document.getElementById("score").innerHTML = score;
  document.getElementById("question").innerHTML = quiz.questions[i];
  document.getElementById("op1").innerHTML = quiz.opt1[i];
  document.getElementById("op2").innerHTML = quiz.opt2[i];
  document.getElementById("op3").innerHTML = quiz.opt3[i];
  document.getElementById("op4").innerHTML = quiz.opt4[i];
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
