import React,{useState} from 'react';

const useSelect = (stateInicial,opciones) => {
   
    //state custom hook
    const [state, actualizarState] = useState(stateInicial)

    const SelectNoticias = () =>(

        <select className='browser-default' onChange={e => actualizarState(e.target.value)}> 
            
            {opciones.map(opcion =>(
                
                <option key={opcion.value} value={opcion.value} >
                    {opcion.label}
                </option>
            ))}

        </select>

    );

    return[state,SelectNoticias];
}
 
export default useSelect;