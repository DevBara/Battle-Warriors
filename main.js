//Variables


$(document).ready(function(){
    $(".one").on({
        
        click:function(){
            $(this).css("background-color","red");
        }
    });

});

//
$("td").click(function(){
    $(this).change();
  });    
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

<<<<<<< HEAD
//Show Player 1 Board
document.getElementById("startButton").addEventListener("click",function()
{
    let showBoard= document.getElementById("boardOne");
=======
//On start button click, show gameboards
document.getElementById("startButton").addEventListener("click",function()
{
    let showBoard= document.getElementById("player-1-board");
>>>>>>> 2a1a44cb77ebfefe4be7016ea2b489773edd7ca2
    if(showBoard.style.display=="none"){
        showBoard.style.display ="table";
    } else{
        showBoard.style.display="none";
<<<<<<< HEAD
        document.getElementById('startContainer').classList.add('show');
    }
=======
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
>>>>>>> 2a1a44cb77ebfefe4be7016ea2b489773edd7ca2

})
//Player 2 Board
document.getElementById("startButton").addEventListener("click",function()
{
    let showBoard= document.getElementById("boardTwo");
    if(showBoard.style.display=="none"){
        showBoard.style.display ="table";
    } else{
        showBoard.style.display="none";
    }

})

//Hide buttons on start click
function hideStart(){
    
    // document.getElementById('startContainer').classList.add('show');
    document.getElementById('how').classList.add('hide');
    document.getElementById('rematchButton').classList.add('hide');
    break;
}
