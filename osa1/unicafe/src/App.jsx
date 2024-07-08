import { useState } from 'react'

const Button = ({text, onClick}) => {
	return (
		<>
			<button onClick={()=>onClick}>{text}</button>
		</>
	)
}

const StatisticsLine = (props) => {
	return (
		<tr>
			<td>{props.text}</td>
			<td>{props.value}</td>
		</tr>
	)
}

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
		<>
	  		<h1>statistics</h1>
			<table>
				<tbody>
					<StatisticsLine text="good" value={props.good} />
					<StatisticsLine text="neutral" value={props.neutral} />
					<StatisticsLine text="bad" value={props.bad} />
					<StatisticsLine text="all" value={props.all} />
					<StatisticsLine text="average" value={props.average} />
					<StatisticsLine text="positive" value={props.positive} />
				</tbody>
			</table>
		</>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
  	const [neutral, setNeutral] = useState(0)
  	const [bad, setBad] = useState(0)
	const [all, setAll] = useState(0)
	const [average, setAverage] = useState(0)
	const [positive, setPositive] = useState(0)

	const handleGoodClick = () => setGood(good + 1)
	const handleNeutralClick = () => setNeutral(neutral + 1)
	const handleBadClick = () => setBad(bad + 1)

  	return (
		<>
	  		<h1>Give feedback</h1>
			<Button text="good" onClick={handleGoodClick} />
			<Button text="neutral" onClick={handleNeutralClick} />
			<Button text="bad" onClick={handleBadClick} />
			<Statistics 
				good={good}
				bad={bad}
				neutral={neutral}
				all={all}
				average={average}
				positive={positive}
			/>
	  	</>
  	)
}

export default App
