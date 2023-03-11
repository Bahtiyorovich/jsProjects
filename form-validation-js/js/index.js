const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');
const button = document.getElementById('button');

// form submit:
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

 
function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordcheck = passwordCheck.value.trim();

    // UserName Validation
    if(usernameValue === ''){
        //show error
        // add error class
        setErrorFor(username, 'Username cannot be blank')
    }else {
        //add succcess class
        setSuccessFor(username)
    }

    //Email Validation
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    //Password Validation
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    } else if(passwordValue.length < 8){
        setErrorFor(password, 'Password must be at least 8 characters long')
    }
    else {
        setSuccessFor(password);
    }

    // Password Check Validation
    if(passwordcheck === ''){
        setErrorFor(passwordCheck, 'Password cannot be blank');
    } 
    else if(passwordcheck !== passwordValue){
        setErrorFor(passwordcheck, 'make sure the password is entered correctly')
    }
    else if(passwordcheck.length < 8){
        setErrorFor(passwordCheck, 'Password must be at least 8 characters long')
    }
    else {
        setSuccessFor(passwordCheck);
    }
}

// setErrorFor();
function setErrorFor(input, message){
    const form = input.parentElement;
    const small = form.querySelector('small')

    // add error message inside small
    small.innerText = message;
    form.className = ' form error'
}

function setSuccessFor(input){
    const form = input.parentElement;
    form.className = 'form success'
}

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}







































































