const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}

const Part = (props) => {
	return (
		<div>
			<p>
				{props.part} {props.exercises}
			</p>
		</div>
	)
}

const Content = (props) => {
	const renderListOfParts = (parts) => {
		return parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />)
	}
	return (
		<div>
		{renderListOfParts(props.parts)}
		</div>
	)
}

const Total = (props) => {
	const sumExers = (data) => {
		return data.reduce((total, item) => total + item.exercises, 0)
	}
	return (
		<div>
			<h3>total of {sumExers(props.exercises)} exercises</h3>
		</div>
	)
}

const Course = (props) => {
	return (
		<>
      			<Header course={props.course.name} />
			<Content parts={props.course.parts}/>
      			<Total exercises={props.course.parts} />
		</>
	)
}

export default Course
