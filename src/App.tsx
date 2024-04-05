import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import LayoutStyle from './pages/LayoutStyle'
import './app.scss'



function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/layoutStyle' element={<LayoutStyle />}/>
    </Routes>
  )
}

function WrappedApp() {
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default WrappedApp
