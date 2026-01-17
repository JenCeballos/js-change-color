import { changeStyles } from './partTwo.js';

const button = document.getElementById('btn-change');

if (button) {
  button.addEventListener('click', changeStyles);
}