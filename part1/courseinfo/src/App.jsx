//collecting feedback from users and display the results.
import { useState } from 'react'


const Statistics = ({ good, neutral, bad, average, positive }) => {
  const total = good + neutral + bad;
 //to calculate the average value of the feedback from the total feedbaks
  if(total=== 0){
    average =0;
  } else{
    average = (good *1 +neutral *0 +bad * -1) /total
  }

//calculating the percentage of positive feedback from the total feeback
  if(total ===0){
    positive =0
  } else{
    positive = (good/total)*100
  }
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}


const App = () => {
 // calulate the number of good, neutral and bad feedbacks
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  // display no feedback given if the total feedback is 0, else display the Statistic of the feedbacks
  if (total ===0){
    return (
    <>
    <div>
     <h1>give feedback</h1>
     
      <button onClick = {()=>setGood(good+1)}>good</button>
      <button onClick = {()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick = {()=>setBad(bad+1)}>bad</button>
    </div>
    <h1>Statistics</h1>
   <p>No feedback given</p>
    </>
    
  )
  } else{
    return (
    <>
    <div>
     <h1>give feedback</h1>
     
      <button onClick = {()=>setGood(good+1)}>good</button>
      <button onClick = {()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick = {()=>setBad(bad+1)}>bad</button>
    </div>
    <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </>
    
  )
  }
    
  

  
  
}

export default App