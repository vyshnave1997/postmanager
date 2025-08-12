import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostManager from './components/PostManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
  <PostManager />
    </>
  )
}

export default App
