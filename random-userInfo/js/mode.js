const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')


//LocalStorage:
const modeLocal = localStorage.getItem('mode')
if(modeLocal){
    body.classList.toggle('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}

// dark-light-btn:
function toggleButton(){
    body.classList.toggle('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
}

darkBtn.addEventListener('click', () => {
    toggleButton();
    localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click', () => {
    toggleButton();
    localStorage.setItem('mode', 'dark-mode')
})























