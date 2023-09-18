import Btn from "./DigitBtn";
import OperatorBtn from "./OperatorBtn";

const BtnPannel = ({ funcao, Operatorfuncao, DelEqualReset }) => {
  return (
    <div className="buttonsPannel">
      <div className="numbersOperators">
        <Btn value="7" onClick={() => funcao("7")} />
        <Btn value="8" onClick={() => funcao("8")} />
        <Btn value="9" onClick={() => funcao("9")} />
        <OperatorBtn
          classe="digitBtn"
          operator="DEL"
          onClick={() => DelEqualReset("DEL")}
        />
        <Btn value="4" onClick={() => funcao("4")} />
        <Btn value="5" onClick={() => funcao("5")} />
        <Btn value="6" onClick={() => funcao("6")} />
        <Btn value="+" classe="digitBtn" onClick={() => Operatorfuncao("+")} />
        <Btn value="1" onClick={() => funcao("1")} />
        <Btn value="2" onClick={() => funcao("2")} />
        <Btn value="3" onClick={() => funcao("3")} />
        <OperatorBtn operator="-" onClick={() => Operatorfuncao("-")} />
        <Btn value="." onClick={() => funcao(".")} />
        <Btn value="0" onClick={() => funcao("0")} />
        <OperatorBtn
          classe="digitBtn"
          operator="/"
          onClick={() => Operatorfuncao("/")}
        />
        <OperatorBtn
          classe="digitBtn"
          operator="x"
          onClick={() => Operatorfuncao("x")}
        />
      </div>
      <div className="resetEqual">
        <OperatorBtn
          classe="digitBtn"
          operator="RESET"
          onClick={() => DelEqualReset("RESET")}
        />
        <OperatorBtn
          classe="equal"
          operator="="
          onClick={() => DelEqualReset("=")}
        />
      </div>
    </div>
  );
};

export default BtnPannel;
