const Part = (props) => {
    return (
      <div>
        <p>{props.name} {props.exercises}</p>
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
      </div>
    )}
  
  const Content = (props) => {
    return(
      <div>
        {props.parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
      ))}
      </div>
    )
  }
  
  const Total = (props) => {
  
    console.log(props.parts)
    const sum = props.parts.reduce(
      (total, part) => total + part.exercises, 0
    );
    
    console.log(sum);
  
    return (
      <div>
        <b>total of {sum} exercises</b>
      </div>
    )}
  
  const Course = (props) => {
    return (
      <div>
        <Header name = {props.course.name}/>
        <Content parts = {props.course.parts}/>
        <Total parts = {props.course.parts}/>
      </div>
    )
  }

export default Course