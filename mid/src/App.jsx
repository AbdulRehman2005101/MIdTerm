import { useState } from 'react'
import './App.css'
import { Component } from './Componenets/Navbar/Navbar'
import Search from './Componenets/Search/Search'
import { Comp } from './Componenets/Footer/Footer'
import { MyProvider } from './Componenets/Provider/Provider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyProvider>
      <div className="App">
      <header className="App-header">
        <Component /> 
        <Search />
      </header>
    </div>
    <Comp/>
    </MyProvider>
     </>
  )
}

export default App











