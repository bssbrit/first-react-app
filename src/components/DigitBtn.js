const DigitBtn = ({ value, onClick }) => {
  return (
    <button className="numberBtn" value={value} onClick={onClick}>
      <p>{value}</p>
    </button>
  );
};

export default DigitBtn;
