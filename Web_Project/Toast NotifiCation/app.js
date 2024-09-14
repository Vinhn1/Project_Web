var btnSuccess =  document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');


btnSuccess.addEventListener('click', function(){
    createToast("success");
});

btnWarning.addEventListener("click", function () {
  createToast("warning");
});

btnError.addEventListener("click", function () {
  createToast("error");
});



function createToast(status){
  let templateInner = '';

    switch(status){
        case 'success':
            templateInner = ` <i class="fa-solid fa-circle-check"></i>
           <span>This is a Success message !</span>`;
            break;
        case 'warning':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
          <span>This is a warning message !</span>`;
            break;
        case 'error':
            templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
           <span>This is a error message !</span>`;
            break;
    }
        
  //  <div class="toast success">
  //         <i class="fa-solid fa-circle-check"></i>
  //         <span>This is a Success message !</span>
  //         <span class="countdown"></span>
  //     </div>

  //     <div class="toast warning">
  //         <i class="fa-solid fa-circle-exclamation"></i>
  //         <span>This is a Success message !</span>
  //         <span class="countdown warning"></span>
  //     </div>

  //      <div class="toast error">
  //        <i class="fa-solid fa-triangle-exclamation"></i>
  //         <span>This is a Success message !</span>
  //         <span class="countdown error"></span>
  //     </div>

  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = `${templateInner}
           <span class="countdown"></span>`;

  var toastList = document.getElementById("toasts");
  toastList.appendChild(toast);

  setTimeout(function(){
     toast.style.animation = "slide_hide 2s ease forwards";
  }, 3000)

   setTimeout(function () {
     toast.remove();
   }, 5000);
}

