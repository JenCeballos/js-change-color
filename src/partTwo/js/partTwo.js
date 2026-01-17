export function changeColor() {
  const body = document.getElementById('background');
  if (!body) return;

  const currentColor = body.style.backgroundColor;

  if (currentColor === 'red' || currentColor === 'rgb(255, 0, 0)') {
    body.style.backgroundColor = 'darkblue';
  } else {
    body.style.backgroundColor = 'red';
  }
}

export function changeText() {
  const textElement = document.getElementById('text');
  if (!textElement) return;

  const currentText = textElement.innerHTML.trim().toLowerCase();

  if (currentText === 'red') {
    textElement.innerHTML = 'darkblue';
  } else {
    textElement.innerHTML = 'red';
  }
}

export function changeStyles() {
  changeColor();
  changeText();
}