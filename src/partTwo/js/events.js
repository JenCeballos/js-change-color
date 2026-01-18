import { changeStyles } from './partTwo.js';

export const createClickEvent = () => {
    const button = document.getElementById('btn-change');
    if (button) {
        button.addEventListener('click', changeStyles);
    }
};

createClickEvent();