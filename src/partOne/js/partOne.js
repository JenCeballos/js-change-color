export function changeColor() {
  const body = document.getElementById('background');
  if (!body) return;

  if (body.style.backgroundColor !== 'darkblue') {
    body.style.backgroundColor = 'darkblue';
  } else {
    body.style.backgroundColor = 'red';
  }
}

export function changeText() {
  const textElement = document.getElementById('text');
  if (!textElement) return;

  const currentText = textElement.innerHTML.trim().toLowerCase();
  
  if (currentText !== 'darkblue') {
    textElement.innerHTML = 'darkblue';
  } else {
    textElement.innerHTML = 'red';
  }
}

export function changeStyles() {
  const body = document.getElementById('background');
  const text = document.getElementById('text');
  
  if (body) body.style.backgroundColor = 'darkblue';
  if (text) text.innerHTML = 'darkblue';
}