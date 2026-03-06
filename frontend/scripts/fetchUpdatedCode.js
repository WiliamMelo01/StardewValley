export function fetchpdatedCode(code, updates) {

    fetch('https://stardewvalley.onrender.com/code')
        .then(response => response.json())
        .then(data => {
            if(data.status === 200){
                const updatedCode = data.code;
                document.querySelector('.code-input').value = updatedCode;
            }
        })
}