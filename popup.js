document.getElementById("submitButton").addEventListener("click", () => {
    // Get the value of the input field
    const operation = document.getElementById("operation").value;
    const userInput1 = document.getElementById("userInput1").value;
    const userInput2 = document.getElementById("userInput2").value;

    if (operation == "divide" && parseFloat(userInput2) == 0){
        document.getElementById("output").textContent = `Cannot divide by zero`;
        return;
    }

    if (operation == "root" && parseFloat(userInput2) == 0){
        document.getElementById("output").textContent = `Cannot take zeroth root`;
        return;
    }

    // Convert the input to a number
    if (userInput1 == "pi"){
        val1 = Math.PI;
    }else if (userInput1 == "e"){
        val1 = Math.E;   
    }else{
        val1 = parseFloat(userInput1);
    }
    if (userInput2 == "pi"){
        val2 = Math.PI;
    }else if (userInput2 == "e"){
        val2 = Math.E;   
    }else{
        val2 = parseFloat(userInput2);
    }

    // Perform the operation
    const sum = val1 + val2;
    const difference = val1 - val2;
    const product = val1 * val2;
    const quotient = val1 / val2;

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
        case "exponent":
            document.getElementById("output").textContent = `Answer: ${Math.pow(val1, val2)}`;
            break
        case "root":
            document.getElementById("output").textContent = `Answer: ${Math.pow(val1, 1/val2)}`;
            break;
        case "log":
            document.getElementById("output").textContent = `Answer: ${Math.log(val1)/Math.log(val2)}`;
            break;
        default:
            document.getElementById("output").textContent = `Invalid Operation`;
            break;
    }
  
    // You can also use the userInput variable to perform other actions, like saving it
  });