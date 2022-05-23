import React,{createContext,useState} from 'react'

export const counterContext = createContext(null)
function ContextProvider(props) {
    const [value,setValue] = useState(0);
    function IncreaseCount(){
        setValue(value+1)
    }
    function decrement(){
        setValue(value-1)
    }
  return (
    <div>
        <counterContext.Provider value={{value, IncreaseCount,decrement}}>
        {props.children}
        </counterContext.Provider>
        
    </div>
  )
}

export default ContextProvider