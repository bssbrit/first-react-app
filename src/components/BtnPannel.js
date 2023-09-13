import Btn from "./DigitBtn"
import OperatorBtn from "./OperatorBtn";
import { useState } from "react";


const BtnPannel = () => {
  let [numero, selecionarN] = useState(0);

  function handleClick(x) {
    console.log(x)
    
     selecionarN(numero + x);
     console.log(numero)
     document.querySelector('.painel').textContent += x
  }
   
  return (
    <div>
      <Btn value = '7' onClick={() => handleClick("7")}/>
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
      <OperatorBtn operator = 'RESET' />
      <OperatorBtn operator = '='/>
    </div>
  )
}

export default BtnPannel
 