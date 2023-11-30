import { useState } from 'react'
import Filter from './Filter.js'
import Persons from './Persons.js'
import PersonForm from './PersonForm.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  function getNames() {
    const names = []
    let i = 0
    do {
        names.push(persons[i].name)
        i++
    } while (i < persons.length)
    return names
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const person = {name: newName, number: newNumber}
    const copy = [...persons]
    const names = getNames()

    if (names.includes(person.name)) {
      alert(`${person.name} is already in the phonebook`)
    }

    else {    copy.push(person)
      setPersons(copy)
      setNewName("")
      setNewNumber("")
    }
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} change={handleNewFilter}/>
      <h2>Add a new number</h2>
      <PersonForm  name={newName} changeName={handleNewName} number={newNumber} changeNum={handleNewNumber} submit={handleSubmit}/>
      <h2>Numbers</h2>
      <Persons getnames={getNames()} persons={persons} cacca={newFilter}/>
    </div>
  )

}

export default App