export function setupCopyCodeButton() {
    const copyButton = document.querySelector('.copy-button');

    copyButton.addEventListener('click', () => {

        let code = document.querySelector('.code-input').value.toUpperCase();

        navigator.clipboard.writeText(code).then(() => {
            let copiedSound = new Audio("./assets/sounds/copied.mp3");
            copiedSound.play();
            
            let message = document.querySelector(".message");
            message.textContent = `Código copiado para a área de transferência!`;
            message.style.display = "block";

            setTimeout(() => {
                message.style.display = "none";
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy code: ', err);
        });

    });

}