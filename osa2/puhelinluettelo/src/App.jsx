import { useState } from 'react'

const Filter = (props) => {
	return (
		<>
			<input value={props.nameq} name="nameq" onChange={e => {
				props.setNameq(e.target.value)
				console.log(e.target.value)
			}}/>
		</>
	)
}

const Adder = (props) => {
	return (
		<>
		<form onSubmit={props.handleInput}>
			<div>
				name: <input name="name" />
			</div>
			<div>
				number: <input name="number" />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
		</>
	)
}

const Persons = (props) => {
	return (
		<>
		{props.renderPersonList()}
		</>
	)
}

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: "04014311431" },
		{ name: 'Hilda vee', number: "2032432" }
	]) 
	const [newName, setNewName] = useState('')
	const checkName = (checkedName) => {
		var perkele = false
		persons.forEach((person) => {
			if (person.name == checkedName) {
				perkele = true
			}
		})
		return perkele
	}
	const handleInput = (event) => {
		event.preventDefault();
		if(!checkName(event.target.name.value)) {
			setNewName(event.target.name.value)
			const newPersons = [...persons]
			const allnames = [newPersons.map((person) => person.name)]
			setPersons(newPersons.concat({name: event.target.name.value, number: event.target.number.value}))
		} else {
			alert(event.target.name.value + " has already been added");
		}
	}
	const renderPersonList = () => {
		return persons
			.filter(person => person.name.toLowerCase().includes(nameq.toLowerCase()))
			.map(person => <p key={persons.indexOf(person)}>{person.name} {person.number}</p>)
	}
	const [nameq, setNameq] = useState("arto hellas")
	return (
	<div>
		<h2>Phonebook</h2>
		<Filter nameq={nameq} setNameq={setNameq} />
		<h2>Add a new</h2>
		<Adder handleInput={handleInput} /> 
		<h2>Numbers</h2>
		<Persons renderPersonList={renderPersonList} />
	</div>
	)
}

export default App
