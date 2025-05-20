document.addEventListener("DOMContentLoaded", () => {
    // State variables
    let numberBank = [];
    let oddNumbers = [];
    let evenNumbers = [];

    // Select elements
    const inputField = document.getElementById("number-input");
    const addButton = document.getElementById("add-number");
    const sortOneButton = document.getElementById("sort-one");
    const sortAllButton = document.getElementById("sort-all");
    const numberBankDiv = document.getElementById("number-bank");
    const oddNumbersDiv = document.getElementById("odd-numbers");
    const evenNumbersDiv = document.getElementById("even-numbers");

    // Add number to bank
    addButton.addEventListener("click", () => {
        const num = parseInt(inputField.value, 10);
        if (!isNaN(num)) {
            numberBank.push(num);
            inputField.value = ""; // Clear input field
            updateDisplay();
        }
    });

    // Sort first number
    sortOneButton.addEventListener("click", () => {
        if (numberBank.length > 0) {
            const num = numberBank.shift();
            if (num % 2 === 0) {
                evenNumbers.push(num);
            } else {
                oddNumbers.push(num);
            }
            updateDisplay();
        }
    });

    // Sort all numbers
    sortAllButton.addEventListener("click", () => {
        while (numberBank.length > 0) {
            const num = numberBank.shift();
            if (num % 2 === 0) {
                evenNumbers.push(num);
            } else {
                oddNumbers.push(num);
            }
        }
        updateDisplay();
    });

    // Update display
    function updateDisplay() {
        numberBankDiv.innerText = "Number Bank: " + numberBank.join(", ");
        oddNumbersDiv.innerText = "Odd Numbers: " + oddNumbers.join(", ");
        evenNumbersDiv.innerText = "Even Numbers: " + evenNumbers.join(", ");
    }

    // Initial display update
    updateDisplay();
});
