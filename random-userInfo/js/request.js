    
    // api
    const API = 'https://randomuser.me/api/?results=9'
    
    // for loader
    const overlay = document.getElementById('overlay')
    
    function loaderToggle(toggle){
        toggle === true 
        ? overlay.classList.remove('hidden') 
        : overlay.classList.add('hidden')
    }
    
    
    // Request Promise:
   const getData = (resurs) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState < 4 ){
                loaderToggle(true)
            } else if (request.readyState == 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data.results)
                loaderToggle(false)
            } else if (request.readyState == 4 && request.status !== 200){
                reject('Error')
                loaderToggle(false)
            }
        } )

        request.open('GET', resurs)
        request.send()
    })
   }

const reload = () => {
    getData(API)
     .then((res) => updateUI(res))
     .catch((err) => console.log(err))
}


document.addEventListener('DOMContentLoaded', reload)    













