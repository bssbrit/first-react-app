import Btn from "./DigitBtn"
import OperatorBtn from "./OperatorBtn";
// funções de operações
function soma(x, y) {
  return x + y;
}

function subtraction(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

function operate(x, y, operator) {
  //talvez fazer um if
  switch (operator) {
    case "+":
      return Math.round(soma(x, y) * 10) / 10;
      break;
    case "-":
      return Math.round(subtraction(x, y) * 10) / 10;
      break;
    case "x":
      return Math.round(multiply(x, y) * 10) / 10;
      break;
    case "/":
      return Math.round(division(x, y) * 10) / 10;
      break;
    //default:
    //return "Tu digitou certo, Bruno?";
  }
}


const BtnPannel = () => {
  return (
    <div>
      <Btn value = '7'  />
      <Btn value = '8'/>
      <Btn value = '9'/>
      <OperatorBtn operator = 'DEL'/>
      <Btn value = '4'/>
      <Btn value = '5'/>
      <Btn value = '6'/>
      <Btn value = '+'/>
      <Btn value = '1'/>
      <Btn value = '2'/>
      <Btn value = '3'/>
      <OperatorBtn operator = '-'/>
      <Btn value = '.'/>
      <Btn value = '0'/>
      <OperatorBtn operator = '/'/>
      <OperatorBtn operator = 'x'/>
      <OperatorBtn operator = 'RESET'/>
      <OperatorBtn operator = '='/>
    </div>
  )
}

export default BtnPannel
 