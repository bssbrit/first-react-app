import Header from './components/Header';
import './App.css';
import BtnPannel from './components/BtnPannel';

function App() {
 
 
  return (
    <div className="App" >
      
     <Header />
     <div >
      <h1 className='painel'></h1>
      <p className='numeroAnterior'>  </p>
     </div>
     <BtnPannel />
    </div>
  );
}

export default App;
