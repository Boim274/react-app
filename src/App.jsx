import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/HomPage'
function App() {
  const [count, setCount] = useState(0)

  function Header() {
    return (
      <div>
        <h1>Belajar React JS</h1>
      </div>
    )
  }


  function Footer(props) {
    return (
      <div>
        <h2>Belajar Hari Pertama {props.name}</h2>
      </div>
    )
  }

  function MyButton() {
    return (
      <button>Saya adalah tombol</button>
    );
  }
  return (
    <>
      <div>
       {/* memanggil function */}
        <Header />
        <Footer name="FB"/>
        <Footer name="IG"/>
        <Footer name="YT"/>
        <Homepage />
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Belajar</h1>
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
      <h1>Selamat datang di aplikasi saya</h1>
      <MyButton />
    </>
  )
}

export default App
