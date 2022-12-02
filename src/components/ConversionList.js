import React, {useState} from "react";
import '../style/ConversionList.css';
import Conversion from './Conversion';

function ConversionList(){

  const [conversions, setConversion] = useState([])
  
  const removeConversion = id => {   
    const actConversions = conversions.filter(conversion => conversion.id !== id);
    setConversion(actConversions);
    localStorage.removeItem(id);
  }

  return(
    <>
      <div className="conversion-list-contenedor">
        {
          Object.entries(window.localStorage).map(([k,v]) => 
          <Conversion 
          key={k}
          id = {k}
          text={JSON.parse(v).text}
          removeConversion = {removeConversion}/>)
        }
      </div>
    </>
    );
}

export default ConversionList;