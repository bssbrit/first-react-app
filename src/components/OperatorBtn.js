const OperatorBtn = ({ operator, onClick }) => {
  return (
    <button className="digitBtn" onClick={onClick}>
      <p>{operator}</p>
    </button>
  );
};

export default OperatorBtn;
