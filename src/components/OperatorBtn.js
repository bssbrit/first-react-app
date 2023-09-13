
const OperatorBtn = ({operator}) => {
 const chooseOperator = () => {
  let numero = document.querySelector('.painel').textContent 
  console.log(numero)
  document.querySelector('.numeroAnterior').textContent = numero
 }
  return (
    <button className='digitBtn' onClick={() => chooseOperator(operator)} >
      <p>{operator}</p>
    </button>
  )
}

export default OperatorBtn
