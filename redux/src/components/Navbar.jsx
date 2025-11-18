import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { multiply, multiplyByAmount, divide, divideByAmount } from '../redux/counter/CounterSlice'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(multiplyByAmount(5))} >*5</button>
                I am a Navbar and counter is {count}
            <button onClick={() => dispatch(divideByAmount(5))} >/5</button>
            <b />
            <button onClick={() => dispatch(multiply())} >*</button>
                I am a Navbar and counter is {count}
            <button onClick={() => dispatch(divide())} >/</button>
        </div>
  )
}

export default Navbar
