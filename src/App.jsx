
import HomePage from './components/pages/Home'
import MainCard from './components/pages/MainCard'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <Routes>
      
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/maincard" element={<MainCard/>}></Route>
      


    </Routes>
    
  )
}

export default App
