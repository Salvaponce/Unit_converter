import React, {useState} from "react";
import '../style/ConversionForm.css';
import { AiOutlineHeart, AiOutlineSwap } from "react-icons/ai";
const { v4: uuidv4 } = require('uuid');


function ConversionForm(props){

  const [input, setInput] = useState(0);
  const [choose, setChoose] = useState('');

  const changeHandle = e => {
    setInput(e.target.value);
  }

  const chooseHandle = e => {
    setChoose(e.target.value.split(" "));
  }

  const sendHandle = e => {
    e.preventDefault(); 
    const newConversion = {
      id: uuidv4(),
      text: `${input} ${choose[0]} -> ${calc(choose[0], input)} ${choose[1]}`
    }
    e.target.reset();
    setInput(0)
    props.onSubmit(newConversion);
  };

  const keyPressHandle = e => {
    if(!/[0-9]/.test(e.key)){
      e.preventDefault();
    }
    if(!choose){
      e.preventDefault();
    }
  };

  const calc = (choose, input) => {
    switch(choose){
      case 'km': return (input / 1.609344).toFixed(2);
      case 'miles': return (input * 1.609344).toFixed(2);;
      case 'm': return (input / 0.3048).toFixed(2);;
      case 'feet': return (input * 0.3048).toFixed(2);;
      case 'cm': return (input / 2.54).toFixed(2);;
      case 'inches': return (input * 2.54).toFixed(2);;
      default: return '';
    }
  };

  const changeConverter = e => {
    e.preventDefault();
    setChoose([choose[1], choose[0]]);
  };

  return (
    <form className="conversion-form" onSubmit={sendHandle}>

      <select className="grid-item" name="cars" id="cars" onChange={chooseHandle}>
      <option value=""></option>
      <option value='km miles'>km to miles</option>
      <option value="miles km">miles to km</option>
      <option value="m feet">m to feet</option>
      <option value="feet m">feet to m</option>
      <option value="cm inches">cm to inches</option>
      <option value="inches cm">inches to cm</option>
      </select>

      <button type="button" className="conversion-button" onClick={changeConverter}><AiOutlineSwap /></button>

      <input 
      className="conversion-input"
      type = 'text'
      name = 'texto'
      onKeyPress={keyPressHandle}
      onChange={changeHandle}
      />

      <h5 className="converter-words">{choose[0]}</h5>

      <button type="submit" className="conversion-button"><AiOutlineHeart /></button>

      <p></p>

      <h3 className="converter-words">{calc(choose[0], input)}</h3>

      <h5 className="converter-words">{choose ? choose[1] : ""}</h5>
      
    </form>
  );
}


export default ConversionForm;