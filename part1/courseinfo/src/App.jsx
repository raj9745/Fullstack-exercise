
// const App = () => {
//   const course = 'Half Stack application development'
//    const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
      
//     </>
//   )
   
// }


// const Header = (props) =>{
//  console.log('Header prop:', props.course)
//   return (
//       <h1>{props.course}</h1>
//   )
// }

// const Part = (props) => {
//   return(
//     <p>{props.name} {props.exercises}</p>
//   )
// }

// const  Content = (props)=>{
//  console.log('What are my props?', props)
//   return (
//     <div>
//       <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//   )
// }

// export default App
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