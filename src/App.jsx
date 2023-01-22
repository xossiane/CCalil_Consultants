import { useState } from 'react'
import './App.css'

import Header from './components/organisms/NavBar'
import Button from './components/atoms/Button'


function App() {

  return (
    <div className="App">
      
       <Header />       
       <p>hey</p>
       <Button>Contratar Serviço</Button>
       <Button mt="mt">Enviar CV</Button>
       

    </div>
  )
}

export default App
