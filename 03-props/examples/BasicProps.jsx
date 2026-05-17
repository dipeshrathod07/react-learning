

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function BasicProps() {
  return (
    <div>
      <Welcome name="Dipesh" />
      <Welcome name="React Learner" />
      <Welcome name="Frontend Developer" />
    </div>
  )
}

export default BasicProps