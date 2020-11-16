

const buttons = document.getElementsByTagName('button');
const screenText = document.getElementById('text');

let equalPressed = false;

// Listen on all buttons
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', () => {
        if(button.innerText !== "C") {
            if(button.innerText !== "=") {
                if (equalPressed) {
                    screenText.innerText = "";
                    screenText.innerText = screenText.innerText.concat(button.innerText);
                    equalPressed = false;
                }else {
                    screenText.innerText = screenText.innerText.concat(button.innerText);
                }
            }
        }
        else {
            screenText.innerText = "";
        }

        if (button.innerText === "=") {
            screenText.innerText = eval(screenText.innerText);
            equalPressed = true;
        }
    })
}