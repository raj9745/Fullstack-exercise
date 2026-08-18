import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  let average;
  if(total=== 0){
    average =0;
  } else{
    average = (good *1 +neutral *0 +bad * -1) /total
  }

  let positive;
  if(total ===0){
    positive =0
  } else{
    positive = (good/total)*100
  }
  return (
    <>
    <div>
     <h1>give feedback</h1>
     
      <button onClick = {()=>setGood(good+1)}>good</button>
      <button onClick = {()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick = {()=>setBad(bad+1)}>bad</button>
     
    </div>

    <div>
     <h1>Statistics</h1>
     <p>Good: {good}</p>
     <p>Neutral: {neutral}</p>
     <p>Bad: {bad}</p>
     <p>Average: {average}</p>
     <p>positive: {positive}%</p>
    
    </div>
    </>
    
  )
}

export default App