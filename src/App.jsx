import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Hero from './components/Hero'
import Home from './components/Home'
import { decrement, increment, random } from '../lib/slice/counterSlice'

function App() {
  let randomNum = Math.random() * 100 | 0
  const dispatch = useDispatch()
  const {value} = useSelector(state => state.counter)
  return (
    <div className="App">
      <Home />
      <Hero />

      <h3>{value}</h3>
      <button onClick={() => {dispatch(increment())}}>+</button>
      <button onClick={() => {dispatch(decrement())}}>-</button>
      <button onClick={() => {dispatch(random(randomNum))}}>random</button>
    </div>
  )
}

export default App
