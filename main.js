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

//Call on functions via EventListeners for Modal
openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//end modal functions & letiable declarations 

// This will start the game
function start(){
    document.getElementById('start-button-container').onclick
    console.log("start");
}


