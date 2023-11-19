import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <div>
      <p>{props.text} {props.value}</p>
      </div>
  )
}

const Statistics = (props) => {

  const clicks = props.pos + props.neu + props.neg
  const average = (props.pos + props.neg*(-1))/clicks
  const positive = (props.pos/clicks)*100 + " %"

  if (clicks==0) {
    return(
    <div>
      <p>No feedback given</p>
    </div>)
  } else {
    return(
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value={props.pos}/>
        <StatisticLine text="neutral" value={props.neu}/>
        <StatisticLine text="bad" value={props.neg}/>
        <StatisticLine text="all" value={clicks}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
      </div>)
  }
}

const Button = (props) => {
 return(
    <div><button onClick={props.handler}>{props.name}</button></div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    const newValue = good + 1
    setGood(newValue)
  }

  const setToNeutral = () => {
    const newValue = neutral + 1
    setNeutral(newValue)
  }

  const setToBad = () => {
    const newValue = bad + 1
    setBad(newValue)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <div style={{ display: 'flex' }}>
      <Button name="good" handler={setToGood}/><Button name="neutral" handler={setToNeutral}/><Button name="bad" handler={setToBad}/>
      </div>
      <Statistics pos={good} neu={neutral} neg={bad}/>
    </div>
  )
}

export default App