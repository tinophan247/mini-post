import { Route, Routes } from "react-router-dom"
import Dashboard from "./component/Dashboard"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
