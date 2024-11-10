let gameSeq = [];
let userSeq = [];
let btn = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let h4 = document.querySelector("h4");

// Start the game on any key press
document.addEventListener("keypress", () => {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

// Function to flash a button
function btnFlash(button) {
    button.classList.add("flash");
    setTimeout(() => {
        button.classList.remove("flash");
    }, 250);
}

// Function to proceed to the next level
function levelUp() {
    userSeq=[];
    level++;
    h4.innerText = `Level ${level}`;

    // Select a random color and add to game sequence
    let idx = Math.floor(Math.random() * btn.length);
    let randColor = btn[idx];
    gameSeq.push(randColor);
       console.log(gameSeq);
    // Find the button by class name and flash it
    let randButton = document.querySelector(`.${randColor}`);
    if (randButton) {
        btnFlash(randButton);
    } else {
        console.error(`Button with class '${randColor}' not found.`);
    }
}

let allbtns=document.querySelectorAll(".btn");


function checkButton(index){

    if(userSeq[index]== gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            if(userSeq.length == gameSeq.length){
                setTimeout(levelUp,500);
            }
        }
    }else{
        h4.innerHTML=`Game Over Your Score <b>${level}<b>!Press any key to Restart`;
document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
    document.querySelector("body").style.backgroundColor="#edf756"; 
},150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkButton(userSeq.length-1);
}

for(let btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
