var quiz = {
    questions : ["What does a polarimeter measure?","Polarimeter works on the principle of which of the following?","What is the effect of the I on the specific optical rotation (α), if I gets double?","Which of these is a comparatively insignificant factor affecting the magnitude of specific optical rotation?","What can be said with certainty if a compound has α= -9.25°?"],
    opt1 : ["Polarity of the substance","polarisation of light","α gets double","Concentration of the substance of interest","The compound has the (S) configuration"],
    opt2 : ["Angle of rotation of an optical active compound","change of the electrical conductivity of solution with composition","α gets halved","Purity of the sample","The compound has the (R) configuration"],
    opt3 : ["Concentration of the substance","change of angle of refraction with composition","α gets four times","Temperature of the measurement","The compound is not a meso form"],
    opt4 : ["pH of the substance","change of electrical conductivity of solution with temperature","α eight times","Length of the sample tube","The compound possesses only one stereogenic center"],
    answer : ["Angle of rotation of an optical active compound","polarisation of light","α gets double","Temperature of the measurement","The compound is not a meso form"]
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
  if(i==4){
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
