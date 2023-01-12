"use strict"

let string = '';
const inputItem = document.querySelector('form');
const openCloseBtn = document.querySelector('.open-close');
const numberBtns = document.querySelectorAll('.btn');

numberBtns.forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            inputItem['number-value'].value = string;
        } 
        else if(e.target.innerHTML == 'AC' || e.target.innerHTML == 'C'){
            string = ''
            inputItem['number-value'].value = string;
        }
        else {
            string = string + e.target.innerHTML;
            inputItem['number-value'].value = string
        }
    })
})
 
