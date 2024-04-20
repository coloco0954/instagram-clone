const inputPassword = document.querySelector('#password');
const showText = document.querySelector('#show-text');

inputPassword.addEventListener('keyup', () => {
    if(inputPassword.value.length >= 1){
        showText.classList.remove('hidden')
    } else {
        showText.classList.add('hidden');
    }
})

showText.addEventListener('click', () => {
    if(inputPassword.type == "password"){
        inputPassword.type = "text";
        showText.textContent = "Ocultar";
    } else {
        inputPassword.type = "password";
        showText.textContent = "Mostrar";
    }
})