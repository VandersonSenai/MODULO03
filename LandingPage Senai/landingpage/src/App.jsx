import './App.css'
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <>
      <NavBar/>
        <Outlet style={{}}/> 
    </>
  )
}

export default App
