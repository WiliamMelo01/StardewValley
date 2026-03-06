export function loadCodeFromStorage() {
    const storedCode = localStorage.getItem('code');

    if(storedCode){
        document.querySelector('.code-input').value = storedCode;
    }
}