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
function hitTarget(){
    let target= document.getElementsByClassName('hit');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Hit!");
    }
}

function hitTarget1(){
    let target= document.getElementsByClassName('hit1');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Hit!");
    }
}

function hitTarget2(){
    let target= document.getElementsByClassName('hit2');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Hit!");
    }
}
function hitTarget3(){
    let target= document.getElementsByClassName('hit3');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Hit!");
    }
}
function hitTarget4(){
    let target= document.getElementsByClassName('hit4');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Hit!");
    }
}
function hitTarget5(){
    let target= document.getElementsByClassName('hit5');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 2 Ship has been hit!");
    }
}
function hitTarget6(){
    let target= document.getElementsByClassName('hit6');
    for(let item of target){
        item.style.backgroundColor="red";
        alert("Player 2 Ship has been hit!");
    }
}
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

// function winGame{

// }
        

    // function hideStart(){

    //     document.getElementById('startContainer').classList.add('show');
    //     document.getElementById('how').classList.add('hide');
    //     document.getElementById('rematchButton').classList.add('hide');
    // }
