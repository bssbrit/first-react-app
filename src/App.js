import Header from "./components/Header";
import "./App.css";
import BtnPannel from "./components/BtnPannel";
import Numberdisplay from "./components/Numberdisplay";
import { useState } from "react";
function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState(0);
  const [operator, setOperator] = useState("");

  const handleNumberclick = (num) => {
    let tamanho = currentInput.length;
    if (currentInput.charAt(tamanho - 1) === "." && num === ".") return;
    setCurrentInput(currentInput + num);
  };

  const calculate = (previousOperator, previousInput, currentInputNumero) => {
    switch (previousOperator) {
      case "+":
        return previousInput + currentInputNumero;

      case "-":
        return previousInput - currentInputNumero;

      case "x":
        return previousInput * currentInputNumero;

      case "/":
        return previousInput / currentInputNumero;

      default:
        console.log("Invalid Operator");
    }
  };
  const handleOperator = (operador) => {
    let currentInputNumero = Number(currentInput);
    if (previousInput === 0) {
      setPreviousInput(currentInputNumero);
      setCurrentInput(" ");
      setOperator(operador);
    } else if (operator === " ") {
      setOperator(operador);
    } else if (previousInput !== null) {
      let resultado = calculate(operator, previousInput, currentInputNumero);
      setPreviousInput(resultado);
      setCurrentInput(" ");
      setOperator(operador);
    }
  };
  const DelEqualReset = (option) => {
    let currentInputNumero = Number(currentInput);
    switch (option) {
      case "=":
        let resultado = calculate(operator, previousInput, currentInputNumero);
        setPreviousInput(resultado);
        setCurrentInput(" ");
        setOperator(" ");

        break;
      case "DEL":
        const stringWithoutLastChar = currentInput.slice(0, -1);
        console.log(stringWithoutLastChar);
        setCurrentInput(stringWithoutLastChar);

        break;
      case "RESET":
        setPreviousInput(0);
        setCurrentInput(" ");
        setOperator(" ");

        break;

      default:
        console.log("Option");
    }
  };
  return (
    <div className="App">
      <Header />
      <Numberdisplay
        numeroAtual={currentInput}
        numeroAnterior={previousInput}
        operator={operator}
      ></Numberdisplay>
      <BtnPannel
        funcao={handleNumberclick}
        Operatorfuncao={handleOperator}
        DelEqualReset={DelEqualReset}
      />
    </div>
  );
}

export default App;
