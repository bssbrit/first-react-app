const OperatorBtn = ({ operator, onClick, secondClass }) => {
  return (
    <button className="digitBtn" id="equal" onClick={onClick}>
      <p>{operator}</p>
    </button>
  );
};

export default OperatorBtn;
