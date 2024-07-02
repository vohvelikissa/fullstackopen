import { useState } from 'react'

const App = () => {
	const [good, setGood] = useState(0)
  	const [neutral, setNeutral] = useState(0)
  	const [bad, setBad] = useState(0)
	const [all, setAll] = useState(0)
	const [average, setAverage] = useState(0)
	const [positive, setPositive] = useState(0)
  	return (
		<div>
	  		<h1>Give feedback</h1>
	  		<button onClick={() => {
				setGood(good + 1)
				setAll(all + 1)
				setAverage(((good * 1) + (bad * -1))/all)
				setPositive((good/all)*100)
			}}>good</button>
	  		<button onClick={() => {
				setNeutral(neutral + 1)
				setAll(all + 1)
				setAverage(((good * 1) + (bad * -1))/all)
				setPositive((good/all)*100)
			}}>neutral</button>
	  		<button onClick={() => {
				setBad(bad + 1)
				setAll(all + 1)
				setAverage(((good * 1) + (bad * -1))/all)
				setPositive((good/all)*100)
			}}>bad</button>
	  		<h1>statistics</h1>
	  		<p>good {good}</p>
	  		<p>neutral {neutral}</p>
	  		<p>bad {bad}</p>
			<p>all {all}</p>
			<p>average {average}</p>
			<p>positive {positive}</p>
	  	</div>
  	)
}

export default App
