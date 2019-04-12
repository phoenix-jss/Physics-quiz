var quiz = {
    questions : ["Are u fucked up in life?","No. of days in a week?","No of mounths in a year?","Captian of indian cricket team?","Who played guddu in Mirzapur?"],
    options : [["Yes","No","Not Sure","Hapily fucked up"],["2","7","5","6"],["8","10","12","11"],["MS Dhoni","V Kholi","Rohit Sharma","S Raina"],["Ali faizal","Srk","Salman","Varun"]],
    answer : ["Hapily fucked up","7","12","V Kholi","Ali faizal"]
};
var score = 0;
var index =0;


if (index===0) {
    var element = document.getElementById("question");
    element.innerHTML= quiz.questions[0];
    var opt1 = document.getElementById("op1");
    opt1.innerHTML = quiz.options[0][0];
    var opt2 = document.getElementById("op2");
    opt2.innerHTML = quiz.options[0][1];
    var opt3 = document.getElementById("op3");
    opt3.innerHTML = quiz.options[0][2];
    var opt4 = document.getElementById("op4");
    opt4.innerHTML = quiz.options[0][3];

}

else if (index===1) {
    var element = document.getElementById("question");
    element.innerHTML= quiz.questions[1];
    var opt1 = document.getElementById("op1");
    opt1.innerHTML = quiz.options[1][0];
    var opt2 = document.getElementById("op2");
    opt2.innerHTML = quiz.options[1][1];
    var opt3 = document.getElementById("op3");
    opt3.innerHTML = quiz.options[1][2];
    var opt4 = document.getElementById("op4");
    opt4.innerHTML = quiz.options[1][3];

}

else if (index===2) {
    var element = document.getElementById("question");
    element.innerHTML= quiz.questions[2];
    var opt1 = document.getElementById("op1");
    opt1.innerHTML = quiz.options[2][0];
    var opt2 = document.getElementById("op2");
    opt2.innerHTML = quiz.options[2][1];
    var opt3 = document.getElementById("op3");
    opt3.innerHTML = quiz.options[2][2];
    var opt4 = document.getElementById("op4");
    opt4.innerHTML = quiz.options[2][3];

}

else if (index===3) {
    var element = document.getElementById("question");
    element.innerHTML= quiz.questions[3];
    var opt1 = document.getElementById("op1");
    opt1.innerHTML = quiz.options[3][0];
    var opt2 = document.getElementById("op2");
    opt2.innerHTML = quiz.options[3][1];
    var opt3 = document.getElementById("op3");
    opt3.innerHTML = quiz.options[3][2];
    var opt4 = document.getElementById("op4");
    opt.innerHTML = quiz.options[3][3];

}

else if (index===4) {
    var element = document.getElementById("question");
    element.innerHTML= quiz.questions[4];
    var opt1 = document.getElementById("op1");
    opt1.innerHTML = quiz.options[4][0];
    var opt2 = document.getElementById("op2");
    opt2.innerHTML = quiz.options[4][1];
    var opt3 = document.getElementById("op3");
    opt3.innerHTML = quiz.options[4][2];
    var opt4 = document.getElementById("op4");
    opt4.innerHTML = quiz.options[4][3];

}
function next(){
    index++;
}
function pre(){
    index--;
}