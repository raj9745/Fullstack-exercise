const Header = (props) => {
  // If this logs undefined, your file is 100% not saving or compiling.
  console.log('Header received:', props.courseName)
  return <h1>{props.courseName}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  console.log('Content received:', props.courseParts)
  return (
    <div>
      <Part name={props.courseParts[0].name} exercises={props.courseParts[0].exercises} />
      <Part name={props.courseParts[1].name} exercises={props.courseParts[1].exercises} />
      <Part name={props.courseParts[2].name} exercises={props.courseParts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.courseParts[0].exercises + props.courseParts[1].exercises + props.courseParts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  // We explicitly name new prop keys here to bypass any old typos cached by Vite
  return (
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}

export default App