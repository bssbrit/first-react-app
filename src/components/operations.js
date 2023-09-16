const handleOperatorClick = (op) => {
  setPreviousInput(currentInput);
  setCurrentInput("");
  switch (op) {
    case "+":
    case "-":
    case "*":
    case "/":
      setOperator(op);
      break;
    default:
      // Handle unexpected operators here (optional)
      console.error("Invalid operator: " + op);
      break;
  }
};

const calculate = () => {
  switch (operator) {
    case "+":
      previousInput + currentInput;

    case "-":
      previousInput - currentInput;
    case "x":
      previousInput * currentInput;
    case "/":
      previousInput / currentInput;
    default:
      // Handle unexpected operators here (optional)
      console.error("something's wrong");
      break;
  }
};
