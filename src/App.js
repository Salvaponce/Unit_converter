import './App.css';
import ConversionForm from './components/ConversionForm';
import ConversionList from './components/ConversionList';
import { AiOutlineSwap } from "react-icons/ai";

import {useState} from 'react';

function App() {

  const [conversions, setConversion] = useState([]);  

  const submitHandle = conversion => {
    if(conversion.text.trim()){
      conversion.text = conversion.text.trim();
      const actConversions = [conversion, ...conversions];
      setConversion(actConversions);
      
      localStorage.setItem(conversion.id, JSON.stringify(conversion));   
    }
  }


  return (
    <div className="App">

      <div className='logo-contenedor'>
        <AiOutlineSwap className="title"/>
        <h1 className="title">unit converter</h1>
      </div>  

      <br />

      <div className='converter-principal'>
        <div className='converter'>
          <h1 className='converter-title'>convert</h1>
        <ConversionForm onSubmit={submitHandle}/> 
        </div>   
        
        <div className="conversion-list-contenedor">        
          <h3 className='second-title'>Saved</h3>
          <ConversionList />
        </div>
      </div >
    </div>
  );
}

export default App;
