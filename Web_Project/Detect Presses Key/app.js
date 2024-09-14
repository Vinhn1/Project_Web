var eKey = document.querySelector('.card.key p:last-child');
var eLocation = document.querySelector(".card.location p:last-child");
var eWhich = document.querySelector(".card.which p:last-child");
var eCode = document.querySelector(".card.code p:last-child");


var result = document.querySelector(".result");
var alert = document.querySelector(".alert");
var box = document.querySelector(".box");

// keydown
document.addEventListener('keydown', e =>{
    // Thay đổi các THÔNG TIN (innerText)
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    result.innerText = e.which;


    // Ẩn hiện Press any key
    alert.classList.add('hide')
    box.classList.remove("hide");
})