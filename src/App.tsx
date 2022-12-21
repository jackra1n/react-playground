import Sidebar from "./layout/Sidebar"

const MainPage = (props: any) => {
  return (
    <>
      <Sidebar/>
      <div className="App">
        <h1 className="title">Library</h1>
        {props.children}
      </div>
    </>
  )
}

export default MainPage
