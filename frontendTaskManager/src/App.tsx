import { Card } from "./components/Card"
import { NavBar } from "./components/NavBar"
import { SideBar } from "./components/SideBar"
// import { LogoutIcon } from "./icons/LogoutIcon"
function App() {


  return (
    <>
      <NavBar />
      <div className='bg-white flex flex-wrap'>
        <SideBar />
        <Card id={123} title="Trial" date={new Date} status={false} description="Hey There how are you all" />
      </div>
    </>
  )
}

export default App
