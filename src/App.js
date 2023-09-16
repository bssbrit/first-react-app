import Header from "./components/Header";
import "./App.css";
import BtnPannel from "./components/BtnPannel";
import Numberdisplay from "./components/Numberdisplay";
import { useState } from "react";
function App({ funcao }) {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState(0);
  const [operator, setOperator] = useState("");
  const [previousOperator, setpreviousOperator] = useState("");
  const handleNumberclick = (num) => {
    let tamanho = currentInput.length;
    if (currentInput.charAt(tamanho - 1) === "." && num === ".") return;
    setCurrentInput(currentInput + num);
  };
  const calculate = (previousOperator, previousInput, currentInputNumero) => {
    switch (previousOperator) {
      case "+":
        setPreviousInput(previousInput + currentInputNumero);
        setCurrentInput(" ");

        break;
      case "-":
        setPreviousInput(previousInput - currentInputNumero);
        setCurrentInput(" ");

        break;
      case "x":
        setPreviousInput(previousInput * currentInputNumero);
        setCurrentInput(" ");

        break;
      case "/":
        setPreviousInput(previousInput / currentInputNumero);
        setCurrentInput(" ");

        break;

      default:
        console.log("Invalid Operator");
    }
  };
  const handleOperator = (operator) => {
    let currentInputNumero = Number(currentInput);

    if (previousInput !== 0) {
      console.log(previousOperator);
      calculate(previousOperator, previousInput, currentInputNumero);
    } else {
      setPreviousInput(Number(currentInput));
      setCurrentInput(" ");
    }
    setOperator(operator);
    setpreviousOperator(operator);
    console.log(previousOperator);
  };

  return (
    <div className="App">
      <Header />
      <Numberdisplay
        numeroAtual={currentInput}
        numeroAnterior={previousInput}
        operator={operator}
      ></Numberdisplay>
      <BtnPannel funcao={handleNumberclick} Operatorfuncao={handleOperator} />
    </div>
  );
}

export default App;
