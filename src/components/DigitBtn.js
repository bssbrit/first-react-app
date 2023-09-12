
const DigitBtn = ({value}) => {
  const getValue = () => {
    console.log({value})
  }
  return (
    <button className='numberBtn' onClick={getValue}>
      <p>{value}</p>
    </button>
  )
}

export default DigitBtn
 