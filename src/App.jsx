import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Article1 from './components/Article1'
import Article2 from './components/Article2'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Header />
    <Article1/>
    <Article2 />
    <Footer />
   </main>
  )
}

export default App
