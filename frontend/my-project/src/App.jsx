import Hero from "./pages/Hero"
import Dashboard from "./pages/dashboard"

import {Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
