import "./App.css";

const MainPage = (props: any) => {
  return (
    <div className="App">
      <h1>Bufferoverflow</h1>
      {props.children}
    </div>
  )
}

export default MainPage
