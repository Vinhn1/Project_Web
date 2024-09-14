let animationElements = document.querySelectorAll('.show-on-scroll');

function isElInWindow(element){

  // 1 item
  let rect = element.getClientRects()[0];
  let heightScreen = window.innerHeight;

  // check xem element co ben trong man hinh kh
  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    // ben trong
    element.classList.add("start");
  } else {
    // ben ngoai
    element.classList.remove("start");
  }
}


function checkAnimation(){

    animationElements.forEach(el =>{
        isElInWindow(el);
    })
  
}



window.onscroll = checkAnimation