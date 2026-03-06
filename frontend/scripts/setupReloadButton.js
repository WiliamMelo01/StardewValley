import { fetchpdatedCode } from "./fetchUpdatedCode.js";

export function setupReloadButton() {
    const reloadButton = document.querySelector('.reload');
    reloadButton.addEventListener('click', () => {
        fetchpdatedCode();
    });
}