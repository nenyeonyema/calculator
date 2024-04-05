window.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('calculate');
    const nums = document.querySelectorAll('.numbers'); // This returns an array all elements with the class name numbers
    // Now we loop through the returned arrary of buttons, in which we want each event to act when it is clicked
    // The event is a response(a function call to perform on the values of those buttons) when we click on a target
    nums.forEach((numButton) => {
        numButton.addEventListener('click', (event) => {
            if (userInput.innerText === '0') {
                userInput.innerText = '';
            }
            
            userInput.innerText += event.target.innerText.trim(); // We append to the input the values of the clicked button which is acting based on the clicked event// 
            
        });
    });
    const operations = document.querySelectorAll('.key-calc');
    console.log(operations)
        operations.forEach((operation) => {
            operation.addEventListener('click', (event) => {
                console.log(operation);
                userInput.innerText += event.target.innerText.trim();
            });
    });
    const delButton = document.getElementById('key-del');
    console.log(delButton)
    delButton.addEventListener('click', (event) => {
        if (userInput.innerText.length === 1) {
            userInput.innerText = '0';
        }
        else {
            userInput.innerText = userInput.innerText.toString().slice(0, -1);
        }
    });
    const clearAll = document.getElementById('key-ac');
    console.log(clearAll);
    clearAll.addEventListener('click', (event) => {
        userInput.innerText = '0';
    });
    const equalSign = document.getElementById('equalsign');
    equalSign.addEventListener('click', (event) => {
        let lastChar = userInput.innerText.slice(-1);
        let firstChar = userInput.innerText.slice(0, 1);
        let inputValue = true;
        operations.forEach((item) => {
            if (item.innerText === lastChar || item.innerText === firstChar) {
                inputValue = false;
            }
        });
        if (!inputValue) {
            alert("Error!, Invalid input");
            console.log("Error!, Invalid input");
        }
        else {
            userInput.innerText = eval(userInput.innerText);
        }
        
    });
});
