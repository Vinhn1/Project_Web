var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var form = document.querySelector("form");



function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;

}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = '';
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();

        if(!input.value){
            isEmptyError = true;
            showError(input, `Khong duoc de trong`);
        }else{
            showSuccess(input);
        }
    });
   return isEmptyError;
}

function checkEmailError(input){
      const regaxEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        input.value = input.value.trim();

        let isEmailError = !regaxEmail.test(input.value);
        if(regaxEmail.test(input.value)){
            showSuccess(input);
        }else{
            showError(input, 'Email Invalid')
        }
        return isEmailError;
}

function checkLengthError(input, min, max){
        input.value = input.value.trim();

        if(input.value.length < min){
            showError(input, `Phai co it nhat ${min} ky tu`);
            return true;
        }

        if(input.value.length > max ){
            showError(input, `Khong duoc qua ${max} ky tu`);
            return true;
        }

        showSuccess(input);
        return false;

}

function checkMatchPassword(passwordInput, cfPasswordInput)
{
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput, `Mat Khau Khong Trung Khop`);
        return true;
    }

    return false;

}

form.addEventListener('submit', function(e){
    e.preventDefault()
    
      let isUsernameLengthError = checkLengthError(username, 3, 10);
      let isPasswordLengthError = checkLengthError(password, 3, 10);

    let isEmptyError = checkEmptyError([
      username,
      email,
      password,
      confirmPassword,
    ]);

   let isEmailError = checkEmailError(email);
   let isMatchError = checkMatchPassword(password, confirmPassword);

   if(isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMatchError){
    // Khong lam gi ca
   }else{
    // call API...
   }
})