
// SignUp Form:
const signUpForm = document.querySelector('.form-submit')


// LocalStorageni tekshirish:
const array = JSON.parse(localStorage.getItem('array'))
    ? JSON.parse(localStorage.getItem('array'))
    : []
    

( array.length > 0 )
    ? array.forEach(item => console.log(item))
    : console.log('Empty...')


// if(array.length > 0){
//     array.forEach(item => {
//         console.log(item)
//     })
// }else {
//     console.log('Empty..')
// }

// setItem:



