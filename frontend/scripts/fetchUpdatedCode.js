export function fetchpdatedCode(code, updates) {

    fetch('http://localhost:3000/code')
        .then(response => response.json())
        .then(data => {
            if(data.status === 200){
                const updatedCode = data.code;
                document.querySelector('.code-input').value = updatedCode;
            }
        })
}