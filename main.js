//Variables


//Ship Types
// Cruiser = 3
// Submarine = 2
// Destroyer = 1

// Originally I used getElementByClass, however doing so, elements were not calling correctly 
let modal = document.querySelector('.modal');
let openModal = document.querySelector('.howto');
let closeModal = document.querySelector('.close');

function toggleModal(){
    modal.classList.toggle("show-modal");
}

function windowOnClick(event){
    if( event.target === modal){
        toggleModal();
    }
}

//Call on functions via EventListeners for show instructions Modal
openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//end modal function




//On start button click, show gameboards
document.getElementById("startButton").addEventListener("click",function()
{
    let showBoard= document.getElementById("boardOne");
    if(showBoard.style.display=="none"){
        showBoard.style.display ="table";
    } else{
        showBoard.style.display="none";
    }

})

//Player 1 Cruiser 2/3 3/3 = Hit6
function hitTarget1(){
    let target= document.getElementsByClassName('hit');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 1 Ship has been hit!");
    }
}

function hitTarget2(){
    let target= document.getElementsByClassName('hit2');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 1 Ship has been hit!");
    }
}

//Player 1 Submarine
function hitTarget3(){
    let target= document.getElementsByClassName('hit3');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 1 Ship has been hit!");
    }
}
function hitTarget4(){
    let target= document.getElementsByClassName('hit4');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 1 Ship has been hit!");
    }
}

// Player 1 Destroyer
function hitTarget5(){
    let target= document.getElementsByClassName('hit5');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("You have sunk Player 1 Destroyer");
    }
}

//Hit Cruiser
function hitTarget6(){
    let target= document.getElementsByClassName('hit6');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 1 Ship has been hit!");
    }
}

//Hit Player 2 Submarine
function hitTarget7(){
    let target= document.getElementsByClassName('hit7');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 2 Ship has been hit!");
    }
}
function hitTarget8(){
    let target= document.getElementsByClassName('hit8');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 2 Ship has been hit!");
    }
}

//Hit PLayer 2 Cruiser
function hitTarget9(){
    let target= document.getElementsByClassName('hit9');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 2 Ship has been hit!");
    }
}
function hitTarget10(){
    let target= document.getElementsByClassName('hit10');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 2 Ship has been hit!");
    }
}
function hitTarget11(){
    let target= document.getElementsByClassName('hit11');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 2 Ship has been hit!");
    }
}

//Hit Player 2 Destroyer
function hitTarget12(){
    let target= document.getElementsByClassName('hit12');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("You have sunk Player 2 Destroyer");
    }
}


function hitDestroyer (){
        if(hitTarget11 === "red" & hitTarget10 === "red" & hitTarget9 === "red"){
        alert ("You have sunk Player 2 Cruiser");
        } else{
        alert("hit");

    }
}





