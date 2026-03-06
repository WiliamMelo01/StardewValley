export function playSoundtrack(){

document.addEventListener("mouseover", () => {
    const audio = new Audio("./assets/sounds/ConcernedApe - Stardew Valley OST - 01 Stardew Valley Overture.mp3");
    audio.loop = true;
    audio.volume = 0.05; 
    audio.currentTime = 10

    audio.play();
});
} 