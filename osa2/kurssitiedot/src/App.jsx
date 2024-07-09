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
	return (
		<div>
			<p>total of {props.exercises1 + props.exercises2 + props.exercises3} exercises</p>
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

const App = () => {
	const course = {
		name: 'Half Stack application development',
		id: 1,
  		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2,
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3,
			},
			{
				name: 'last night I fucked your mom',
				exercises: 68,
				id: 3,
			}
		]
	}

  	return (
    		<div>
			<Course course={course} />
    		</div>
  	)
}

export default App
