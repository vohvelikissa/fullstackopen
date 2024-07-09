import Course from './Course.jsx'
const App = () => {
	const renderListOfCourses = (courses) => {
		return courses.map(course => <Course key={course.id} course={course} />)
	}
	const courses = [
		{
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
	]

  	return (
    		<div>
		{renderListOfCourses(courses)}
    		</div>
  	)
}

export default App
