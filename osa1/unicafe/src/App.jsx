import { useState } from 'react'

const Statistics = (props) => {
	if(props.all == 0) {
		return (
			<div>
				<h1>statistics</h1>
				<p>No feedback given</p>
			</div>
		)
	}
	return (
		<div>
	  		<h1>statistics</h1>
	  		<p>good {props.good}</p>
	  		<p>neutral {props.neutral}</p>
	  		<p>bad {props.bad}</p>
			<p>all {props.all}</p>
			<p>average {props.average}</p>
			<p>positive {props.positive}</p>
		</div>
	)
}

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
			<Statistics 
				good={good}
				bad={bad}
				neutral={neutral}
				all={all}
				average={average}
				positive={positive}
			/>
	  	</div>
  	)
}

export default App
