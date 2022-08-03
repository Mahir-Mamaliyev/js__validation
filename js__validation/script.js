const formEl = document.getElementById('form')
const usernameEl = document.getElementById('username')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const confirmPasswordEl = document.getElementById('password2')

// regular funksiyalardan yazacayiq
function showError(input,message) {
    const formControl = input.parentElement

    // formControl.classList.add('error')  /* мы можем и так написать */

    formControl.className = 'form-control error'

    const small = formControl.querySelector('small')
    small.innerText = message
}

// showError(emailEl, 'emaili duzgun daxil et')
// showError(passwordEl, 'passwordu duzgun daxil et')
// showError(emailEl, 'emaili duzgun daxil et')


function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}


function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //regular expression

    if(re.test(email.value.trim())) {
        showSuccess(email)
    }
    else {
        showError(email,'Emaili duzgun daxil edin')
    }
}

// checkEmail(email)

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim()==='') {
            showError(input,`${getFieldName(input)} sahesi teleb olunur`)
        }
        else {
            showSuccess(input)
        }
    });
}

// checkRequired([usernameEl,emailEl,passwordEl,confirmPasswordEl])

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkLength(input,min,max) {
    if(input.value.length < min) {
        showError(input,`${getFieldName(input)} en azi ${min} simvoldan ibaret olmalidir`)
    }
    else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} en coxu ${max} simvoldan ibaret olmalidir`)
    }
    else {
        showSuccess(input)
    }
}

function checkPasswordMatch(passwordInput,confirmPasswordInput) {
    if(passwordInput.value!==confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Shifreler uygun deyil')
    }
}

formEl.addEventListener('submit', qaydalariTetbiqEt)

function qaydalariTetbiqEt(e) {
    e.preventDefault()
    checkRequired([usernameEl,emailEl,passwordEl,confirmPasswordEl])
    checkLength(usernameEl,5,17)
    checkEmail(emailEl)
    checkLength(passwordEl,7,17)
    checkPasswordMatch(passwordEl,confirmPasswordEl)
}

// checkLength(usernameEl,5,18)
// console.log(getFieldName(usernameEl))