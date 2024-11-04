document.getElementById("submitButton").addEventListener("click", () => {
    // Get the value of the input field
    const operation = document.getElementById("operation").value;
    const userInput1 = document.getElementById("userInput1").value;
    const userInput2 = document.getElementById("userInput2").value;
  
    // Perform the operation
    const sum = parseFloat(userInput1) + parseFloat(userInput2);
    const difference = parseFloat(userInput1) - parseFloat(userInput2);
    const product = parseFloat(userInput1) * parseFloat(userInput2);
    const quotient = parseFloat(userInput1) / parseFloat(userInput2);

    // Display the entered text (or perform another action with it)
    switch(operation){
        case "add":
            document.getElementById("output").textContent = `Answer: ${sum}`;
            break;
        case "subtract":
            document.getElementById("output").textContent = `Answer: ${difference}`;
            break;
        case "multiply":
            document.getElementById("output").textContent = `Answer: ${product}`;
            break;
        case "divide":
            document.getElementById("output").textContent = `Answer: ${quotient}`;
            break;
        default:
            document.getElementById("output").textContent = `Invalid Operation`;
            break;
    }
  
    // You can also use the userInput variable to perform other actions, like saving it
  });