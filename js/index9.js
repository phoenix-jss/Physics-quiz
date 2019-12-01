var quiz = {
    questions : ["Formula of focal length of the combination of two lenses is :","Name the points which gives unit angular magnification :","Name the points which gives unit linear magnification :","How many Cardinal Points are there in optical systems?","What is the formula for lateral magnification?"],
    opt1 : ["(1/f1+1/f2-x/f1f2)","principal points","principal points","2","(length of image/length of object)"],
    opt2 : ["(1/f1+1/f2+x/f1f2)","nodal points","nodal points","4","(length of object/length of image)"],
    opt3 : ["(1/f1-1/f2-x/f1f2)","focal points","focal points","6","(distance of image from focus/distance of object from focus)"],
    opt4 : ["(1/f1-1/f2-x/f1f2)","points at infinity","points at infinity","8","(distance of object from focus/distance of image from focus)"],
    answer : ["(1/f1+1/f2-x/f1f2)","nodal points","principal points","6","(length of image/length of object)"]
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
