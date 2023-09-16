import Btn from "./DigitBtn";
import OperatorBtn from "./OperatorBtn";

const BtnPannel = ({ funcao, Operatorfuncao }) => {
  return (
    <div>
      <Btn value="7" onClick={() => funcao("7")} />
      <Btn value="8" onClick={() => funcao("8")} />
      <Btn value="9" onClick={() => funcao("9")} />
      <OperatorBtn operator="DEL" />
      <Btn value="4" onClick={() => funcao("4")} />
      <Btn value="5" onClick={() => funcao("5")} />
      <Btn value="6" onClick={() => funcao("6")} />
      <Btn value="+" onClick={() => Operatorfuncao("+")} />
      <Btn value="1" onClick={() => funcao("1")} />
      <Btn value="2" onClick={() => funcao("2")} />
      <Btn value="3" onClick={() => funcao("3")} />
      <OperatorBtn operator="-" onClick={() => Operatorfuncao("-")} />
      <Btn value="." onClick={() => funcao(".")} />
      <Btn value="0" onClick={() => funcao("0")} />
      <OperatorBtn operator="/" onClick={() => Operatorfuncao("/")} />
      <OperatorBtn operator="x" onClick={() => Operatorfuncao("x")} />
      <OperatorBtn operator="RESET" />
      <OperatorBtn operator="=" />
    </div>
  );
};

export default BtnPannel;
