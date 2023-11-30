const Persons = (props) => {

    function filterItems(query) {
        const filteredPersons = []
        const filtered = props.getnames.filter((el) => el.toLowerCase().includes(query.toLowerCase()))
        for (var i = 0; i < props.persons.length; i++) {
            if (filtered.includes(props.persons[i].name)) {
              const person = {name: props.persons[i].name, number: props.persons[i].number}
              filteredPersons.push(person)
            }
        }
        return filteredPersons
      }
    

    
    return (
        filterItems(props.cacca).map((person) => (
            <p>{person.name} {person.number}</p>
            ))
    )


}  

    export default Persons