import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route element={ <ProtectedRoutes/> }>
        <Route path='/quiz' element={ <Quiz/> } />
      </Route>  
    </Routes>
  </div>
  )
}

export default App
