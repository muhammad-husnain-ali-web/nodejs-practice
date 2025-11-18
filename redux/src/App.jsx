import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount  } from './redux/counter/CounterSlice'
import Navbar from './components/Navbar'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())} >-</button>
        Curren count is {count}
        <button onClick={() => dispatch(increment())} >+</button>
        <br/>
        <button onClick={() => dispatch(decrementByAmount(2))} >-2</button>
        Curren count is {count}
        <button onClick={() => dispatch(incrementByAmount(2))} >+2</button>

      </div>
    </>
  )
}

export default App
