const questions=[
    {
        ques:"Which language is 100% object oriented programming Language? ",
        ans:[
            {  opt:"Java", correct:"true"},
            {  opt:"Python", correct:"false"},
            {  opt:"C", correct:"false"},
            {  opt:"Cpp", correct:"false"}
            
        ]

    },
    {
        ques:"Who is the Finance Minister of India? ",
        ans:[
            {  opt:"Rajnath Singh", correct:"false"},
            {  opt:"Nirmala Sitharam", correct:"true"},
            {  opt:"Narendra Modi", correct:"false"},
            {  opt:"Amit Shah", correct:"false"}
            
        ]

    },
    {
        ques:"Which river is the longest in the world ",
        ans:[
            {  opt:"Mississippi", correct:"false"},
            {  opt:"Nile", correct:"true"},
            {  opt:"Amazon", correct:"false"},
            {  opt:"Yangtze", correct:"false"}
            
        ]

    },
    {
        ques:"Which organ in the human body is responsible for the secretion of bile ",
        ans:[
            {  opt:"Liver", correct:"true"},
            {  opt:"Kidneys", correct:"false"},
            {  opt:"Gall bladder", correct:"false"},
            {  opt:"Stomach", correct:"false"}
            
        ]

    }, 
    {
        ques:"In what year did the first man land on the moon? ",
        ans:[
            {  opt:"1961", correct:"false"},
            {  opt:"1983", correct:"false"},
            {  opt:"1975", correct:"false"},
            {  opt:"1969", correct:"true"}
            
        ]

    }
];
const qe=document.getElementById("ques");
const answer=document.getElementById("ans");
const nex=document.getElementById("next");
let i=0;
let score=0;
function start() {
    const ba = document.createElement("button");
    ba.innerHTML = "Let's play a quiz";
    ba.classList.add("bu");
    qe.appendChild(ba); // Add the button to the DOM
    nex.style.display="none";
    ba.addEventListener("click", startQuiz);

}

function startQuiz(){
    i=0;
    score=0;
    
    showQues();
}
function showQues(){
    reset();
    let curr=questions[i];
    let quesno=i+1;
    qe.innerHTML=quesno+".  "+curr.ques;
    curr.ans.forEach(ans=>{
        const btn= document.createElement("button");
        btn.innerHTML=ans.opt;
        btn.classList.add("b");
        answer.appendChild(btn);
        if(ans.correct){
            btn.dataset.correct=ans.correct;
        }
        else{
            btn.dataset.correct=false;
        }
        btn.addEventListener("click",select);
    })

}
function reset(){
    nex.style.display="none";
    while(answer.firstChild){
        answer.removeChild(answer.firstChild);
    }
}
function select(e){
const selectedbtn=e.target;
const iscorrect=selectedbtn.dataset.correct==="true";
if(iscorrect){
    selectedbtn.classList.add("correct");
    score++;
}
else{
    selectedbtn.classList.add("incorrect");

}
Array.from(answer.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled="true";
})
nex.style.display="block";
}
function showscore(){
    reset();
    qe.innerHTML=`your total score is ${score} out of ${questions.length}!`;
    nex.innerHTML="play again";
  
    nex.style.display="block";
}
function handlenextbtn(){
    i++;
    if(i<questions.length){
        showQues();
    }
    else{
        showscore();
    }
}
nex.addEventListener("click",()=>{
    if(i<questions.length){
        handlenextbtn();
    }
    else{
        startQuiz();
    }
})
start();
