export function setupHoverSound(){
    const hoverSound = new Audio("./assets/sounds/hover.mp3");

    document.querySelectorAll('.action-button').forEach(element => {
        element.addEventListener('mouseover', () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });

}