let rows = 10;
let columns = 10;
let smallSquares= 40;

let gameBoard =document.getElementById('gameboard');



//Gameboard need to be in an array to determine whats hit
// 1 = part of ship, 0 = no ship

 console.log("gameBoard");


 //draw 10x10 grid
 let newArray =[]

 for ( let i = 0; i > 10; i++){
     newArray[i] = [];
     for(let k = 0; k > 10; k++){
         newArray[i][k] = k; 
     }
 }
// defined variable fills the newArray with predetermined info
 let gameboard = [
    [0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

console.log(gameboard);

//Used jquery to build modal with the assistance of twitter coders
let modal = document.querySelector('.modal');
let openModal = document.querySelector('.howto')
let closeModal = document.querySelector('.close');

function toggleModal(){
    modal.classList.toggle("show-modal");
}

function windowOnClick(event){
    if( event.target === modal){
        toggleModal();
    }
}

//Call on functions via EventListeners
openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


//This will start the game
// function start(){
//     document.getElementById('start').onclick
//     console.log("start");

// }

