console.log("Hello World");


//declaring Globel Varibales
let time=60;
let score=0;
let hitRandom;

//making Bubbles
const makeBub=()=>{
let clutter=``;
for(let i=0; i<168; i++){
   let ran= Math.floor(Math.random()*10)
  clutter+=`<div class="bubble">${ran}</div>`
}
document.querySelector(`.pbtm`).innerHTML=clutter;
}

//making The Timer Section
document.getElementById("timer").textContent=time;
const timer=()=>{
  let timerInt=  setInterval(()=>{
        if(time>0){
        time--;
        document.getElementById("timer").textContent=time;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(`.pbtm`).innerHTML=`<h1>Game Over</h1>
            <h3>Score:${score}</h3> <button class="btn" onclick="reset()">Restart</button>`;
        }
    },1000)
}

//getting New Hit Value
const getnewHit=()=>{
    hitRandom= Math.floor(Math.random()*10);
    document.getElementById("hit").textContent=hitRandom;
}

//score
const incScore=()=>{
    score+=10;
    document.getElementById("score").textContent=score;
}

//getting The Click Value
const ClickVal=()=>{
    document.querySelector(`.pbtm`).addEventListener("click",(info)=>{
        let clickedVal=Number(info.target.textContent);
        if (clickedVal==hitRandom) {
            incScore();
            makeBub();
            getnewHit();
        }
    })
}

//resetting The Game
const reset=()=>{
    time=60;
    score=0;
    ClickVal()
    getnewHit();
    timer();
    makeBub();
}

//initialising The game
const playGame=()=>{
ClickVal();
getnewHit();
timer();
makeBub();
//closing The Welcome Screen
let temp=document.querySelector(".temp");
temp.style.display = "none"
}