var btnOpen = document.querySelector(".open_modal_btn");
var modal = document.querySelector(".modal");
var iconClose = document.querySelector(".modal_header i");
var btnClose = document.querySelector(".modal_footer");

function toggleModal(e){
    console.log(e.target);
    modal.classList.toggle('hide')
}

// Mở Modal
btnOpen.addEventListener('click', toggleModal)

// Đóng modal
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)