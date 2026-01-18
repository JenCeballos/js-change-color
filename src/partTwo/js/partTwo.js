export const changeColor = () => {
    const background = document.getElementById('background');
    if (background.style.backgroundColor === "red" || background.style.backgroundColor === "rgb(255, 0, 0)") {
        background.style.backgroundColor = "darkblue";
    } else {
        background.style.backgroundColor = "red";
    }
};

export const changeText = () => {
    const textElement = document.getElementById('text');
    if (textElement.innerHTML === "red") {
        textElement.innerHTML = "darkblue";
    } else {
        textElement.innerHTML = "red";
    }
};

export const changeStyles = () => {
    changeColor();
    changeText();
};