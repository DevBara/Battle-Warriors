//Variables


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
    let showBoard= document.getElementById("player-1-board");
    if(showBoard.style.display=="none"){
        showBoard.style.display ="table";
    } else{
        showBoard.style.display="none";
    }

})

document.getElementById("startButton").addEventListener("click",function()
{
    let showBoard= document.getElementById("player-2-board");
    if(showBoard.style.display=="none"){
        showBoard.style.display ="table";
    } else{
        showBoard.style.display="none";
    }

})
    // let a variable equal to start id, grab it
  
    // Once that is grab if styling says Hide button will show board





//Function that determines when the game is won


//Function that gives player ability to restart

