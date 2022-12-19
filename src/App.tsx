import Layout from "./layout/Layout"

const MainPage = (props: any) => {
  return (
    <>
      <Layout/>
      <div className="App">
        <h1>Library</h1>
        {props.children}
      </div>
    </>
  )
}

export default MainPage
