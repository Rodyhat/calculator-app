document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    let currentInput = ""; // Holds the current input string
    let operator = null;   // Tracks the last operator
    let result = null;     // Holds the computed result

    // Handle button clicks
    document.querySelectorAll(".buttons button, .second button").forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                // Clear the display
                currentInput = "";
                result = null;
                operator = null;
                display.innerText = "";
            } else if (value === "=") {
                // Calculate the result
                try {
                    currentInput = currentInput.replace("^", "**"); // Handle power operator
                    result = eval(currentInput); // Evaluate the expression
                    display.innerText = result;
                    currentInput = result.toString(); // Update input for further calculations
                } catch (error) {
                    display.innerText = "Error";
                }
            } else {
                // Update the display
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });
});
