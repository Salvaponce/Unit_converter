import React from "react";
import '../style/Conversion.css'
import { AiFillCloseCircle } from "react-icons/ai";


function Conversion({id, text, removeConversion}) {
  return (
    <div className='converter-contenedor'>
      <div className="converter-text">
        {text}
      </div>
      <div className="converter-icon" onClick={() => removeConversion(id)}>
        <AiFillCloseCircle className = "converter-icon"/>
      </div>
    </div>
  );
}

export default Conversion;