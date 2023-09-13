
const DigitBtn = ({value, onClick}) => {
/*   const getValue = (value) => {
    let numero = document.querySelector('.painel').textContent
    
    if(numero.charAt(0) === '0' && value.value === '0' ) {
      console.log("please don't do that")
    } else {
     document.querySelector('.painel').textContent += value.value
     console.log(value)
  }
  } */
  return (
    <button className='numberBtn' onClick={onClick }>
      <p>{value}</p>
    </button>
  )
}

export default DigitBtn
 