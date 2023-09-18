const OperatorBtn = ({ operator, onClick, classe }) => {
  return (
    <button className={classe} id="equal" onClick={onClick}>
      <p>{operator}</p>
    </button>
  );
};

export default OperatorBtn;
