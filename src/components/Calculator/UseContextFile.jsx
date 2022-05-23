import React,{useContext} from 'react'
import { counterContext } from './ContextFile'

const useContextFile = () => {
    const {value,IncreaseCount,decrement} = useContext(counterContext)
  return (
    <div>
        <button onClick={IncreaseCount}>Inc</button>
        <button onClick={decrement}>Dec</button>
        <span>{value}</span>

    </div>
  )
}

export default useContextFile