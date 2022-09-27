import "./App.css";

const MainPage = (props: any) => {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {props.children}
    </div>
  )
}

export default MainPage
