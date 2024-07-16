import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const backendCall = async () => {
    const response = await axios.get('https://flames-deploy.onrender.com/')
    if(response.status === 200){
      setData(response.data.message)
    }
  }
  useEffect(() => {
    backendCall()
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Backend Data</h1>
        {data ? <h2>{data}</h2> : <h2>Click the button to get data from backend</h2>}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
