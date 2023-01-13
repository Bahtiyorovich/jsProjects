
const passLengthSlider = document.querySelector('.pass-length input')
    countSlider = document.querySelector('.details span')
    passwordInput = document.querySelector('.input-box input')
    generateBtn = document.querySelector('.generate-btn')
    options = document.querySelectorAll('.option input')
    passIndicator = document.querySelector('.pass-indicator .indicator')
    copyIcon = document.querySelector('.input-box span')



// character
const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '^!$%&|[](){}:;.,-+*#@<>~',
}

// generatePassword 
const generatePassword = () => {
    let staticPassword = "";
    randomPassword = '',
    excludeDuplicate = false,
    passLength = passLengthSlider.value,

    options.forEach((option) => {
        if(option.checked){
            if(option.id !== 'exp-duplicate' && option.id !== "spaces") {
                staticPassword += characters[option.id]
            }else if(option.id !== 'spaces'){
                staticPassword += `  ${staticPassword}  `
            }else {
                excludeDuplicate = true
            }
        }
    })

    for( let i = 0; i < passLength; i++){
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate){
            !randomPassword.includes(randomChar) || randomChar == " " 
            ? randomPassword += randomChar
            : i-- 
        } else {
            randomPassword += randomChar
        }
    }
    
    passwordInput.value = randomPassword
}

// passIndicator;

const updatePassIndicator = () => {
    passIndicator.id = passLengthSlider.value <= 8 
    ? "weak": passLengthSlider.value <= 20 ? "medium": "strong" 
}


// passSlider ni o'zgartiradigan funksiya
const updateSlider = () => {
    countSlider.innerText = passLengthSlider.value
    generatePassword();
    updatePassIndicator();
}
updateSlider();

// copy qilish:
const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value)
    copyIcon.innerText = 'check'
    setTimeout(() => {
        copyIcon.innerText = 'copy_all'
    }, 1500)
}

// pass Slider:
copyIcon.addEventListener('click', copyPassword)
passLengthSlider.addEventListener('input', updateSlider)
generateBtn.addEventListener('click', generatePassword)



































































































