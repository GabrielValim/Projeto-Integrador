const listaOpenModalButton = document.querySelectorAll("#open-modal");
const listaCloseModalButton = document.querySelectorAll("#close-modal");
const listaModal = document.querySelectorAll("#modal");
const listaFade = document.querySelectorAll("#fade");


for (let i = 0; i < listaOpenModalButton.length; i++) {
    
    const openModalButton = listaOpenModalButton[i];
    const closeModalButton = listaCloseModalButton[i];
    const fade = listaFade[i];
    const modal = listaModal[i];

    [openModalButton, closeModalButton, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    } )

    
    const toggleModal = () => {
        [modal, fade].forEach((el) => el.classList.toggle("hide"))
} 

}


