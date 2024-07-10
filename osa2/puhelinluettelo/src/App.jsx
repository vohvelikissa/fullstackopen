import { useState } from 'react'

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
		return persons.map(person => <p key={persons.indexOf(person)}>{person.name} {person.number}</p>)
	}
	const [nameq, setNameq] = useState("arto hellas")
	return (
	<div>
		<h2>Phonebook</h2>
		<input value={nameq} name="nameq" onChange={e => {
			setNameq(e.target.value)
			console.log(e.target.value)
		}}/>
		<h2>Add a new</h2>
		<form onSubmit={handleInput}>
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
		<h2>Numbers</h2>
		{renderPersonList()}
	</div>
	)
}

export default App
