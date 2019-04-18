var quiz = {
    questions : ["Are u fucked up in life?","No. of days in a week?","No of mounths in a year?","Captian of indian cricket team?","Who played guddu in Mirzapur?"],
    opt1 : ["Yes","2","8","MS Dhoni"],
    opt2 : ["No","7","10","V Kholi"],
    opt3 : ["Not Sure","5","12","Rohit Sharma"],
    opt4 : ["Hapily fucked up","6","11","S Raina"],
    answer : ["Hapily fucked up","7","12","V Kholi","Ali faizal"]
};

var i = 0;

var score = 0;

document.getElementById("score").innerHTML = 0;
document.getElementById("question").innerHTML = quiz.questions[i];
document.getElementById("op1").innerHTML = quiz.opt1[i];
document.getElementById("op2").innerHTML = quiz.opt2[i];
document.getElementById("op3").innerHTML = quiz.opt3[i];
document.getElementById("op4").innerHTML = quiz.opt4[i];

function changeContent(){
  document.getElementById("score").innerHTML = 0;
  document.getElementById("question").innerHTML = quiz.questions[i];
  document.getElementById("op1").innerHTML = quiz.opt1[i];
  document.getElementById("op2").innerHTML = quiz.opt2[i];
  document.getElementById("op3").innerHTML = quiz.opt3[i];
  document.getElementById("op4").innerHTML = quiz.opt4[i];
}

function next(){
  i++;
  changeContent();
}
// function prev(){
//   i--;
//   changeContent();
// }

function checkAnswer(){

}
