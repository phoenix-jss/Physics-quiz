var quiz = {
    questions : ["Q. Mathematically Numerical Aperture is define as:","Q. What can cause an error in this experiment?","Q. What is the principle of working of an Optical Fibre?","Q. On what factors the Numerical Aperture depends?","Q. With what angle a ray should enter an Optical Fibre for propagation?"],
    opt1 : ["N.A. =  W/√(4L2+W2)","Intensity of LASER.","Refraction of light.","Wavelength of Light.","θ = sin-1μ"],
    opt2 : ["N.A. = L/√(4L2-W2)","Bend in Optical Fibre.","Refraction of light.","Refractive index.","θ<=∝"],
    opt3 : [" N.A. = W/√(4L2-W2)","Length of Optical Fibre.","TIR.","Length of the Optical Fibre.","θ>∝"],
    opt4 : [" N.A. = L/√(4L2+W2) ","None of the Above.","None of the Above.","None of the above.","None of the Above."],
    answer : ["N.A. =  W/√(4L2+W2)","Bend in Optical Fibre.","TIR.","Refractive index.","θ<=∝"]
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
