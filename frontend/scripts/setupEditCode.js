export function setupEditCode() {

    const editCodeButtons = document.querySelector('.edit-button');

    editCodeButtons.addEventListener("click", ()  => {

        const codeInput = document.querySelector('.code-input'); 
        codeInput.value = "";
        codeInput.readOnly = false;
        codeInput.focus();

        codeInput.addEventListener("keydown", (key) => {
            if(key.code == "Enter"){
                handleEditCode(codeInput);
            }
        });

    });

}

function handleEditCode(input) {

    const code = input.value.trim();

    console.log(code);

    if(code.length != 10){
        alert("O código deve conter exatamente 10 caracteres.");
    }

    fetch("http://localhost:3000/code", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ code })
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 200){
            let success = new Audio("./assets/sounds/copied.mp3");
            success.play();

            let message = document.querySelector(".message");
            message.textContent = `Código editado com sucesso!`;
            message.style.display = "block";
            input.readOnly = true;
            localStorage.setItem("code", code);

            setTimeout(() => {
                message.style.display = "none";
            }, 3000);

        } else {
            alert("Erro ao atualizar o código: " + data.message);
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
        alert("Ocorreu um erro ao atualizar o código.");
    });

}