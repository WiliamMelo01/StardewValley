import { loadCodeFromStorage } from "./loadCodeFromStorage.js";
import { setupCopyCodeButton } from "./setupCopyCodeButtons.js";
import { setupEditCode } from "./setupEditCode.js";
import { setupHoverSound } from "./setupHoverSound.js";
import { setupReloadButton } from "./setupReloadButton.js";
import { playSoundtrack } from "./soundtrack.js";

document.addEventListener('DOMContentLoaded', () => {

    loadCodeFromStorage();
    setupReloadButton();
    setupEditCode();    
    setupCopyCodeButton();
    
    playSoundtrack();
    setupHoverSound();
});