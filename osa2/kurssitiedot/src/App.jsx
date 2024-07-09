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
	return (
		<div>
			<Part part={props.part1} exercises={props.exercises1} />
			<Part part={props.part2} exercises={props.exercises2} />
			<Part part={props.part3} exercises={props.exercises3} />
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
		</div>
	)
}

const Course = (props) => {
	return (
		<>
      			<Header course={props.course.name} />
			<Content part1={props.course.parts[0].name} exercises1={props.course.parts[0].exercises} part2={props.course.parts[1].name} exercises2={props.course.parts[1].exercises} part3={props.course.parts[2].name} exercises3={props.course.parts[2].exercises} />
      			<Total exercises1={props.course.parts[0].exercises} exercises2={props.course.parts[1].exercises} exercises3={props.course.parts[2].exercises} />
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
