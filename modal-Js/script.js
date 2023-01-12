window.addEventListener('DOMContentLoaded', () => {

    const openModalBtn = document.querySelector('#open')
        modal = document.querySelector('.container')
        closeBtn = document.querySelector('.close')
    
    
    openModalBtn.addEventListener('click', () => {
        openModalBtn.classList.add('hidden')
        modal.classList.remove('hidden')
        
    })

    function closeModal() {
        modal.classList.add('hidden')
        openModalBtn.classList.remove('hidden')
    }


    closeBtn.addEventListener('click', closeModal)

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape'){
            closeModal()
        }
        
    })

})





























