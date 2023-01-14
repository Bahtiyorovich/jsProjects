const textArea = document.querySelector('.text-area')
    fileName = document.querySelector('.file-name')
    fileFormat = document.querySelector('.box select')
    saveBtn = document.querySelector('.save-btn')

//select
fileFormat.addEventListener('change', () => {
    let selectedOption = fileFormat.options[fileFormat.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
})

//saveBtn: Fileni 
function saveFile() {
    const blob = new Blob([textArea.value], {type: fileFormat.value});
    const fileUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = fileName.value;
    link.href = fileUrl
    link.click();
}


saveBtn.addEventListener('click', saveFile)























