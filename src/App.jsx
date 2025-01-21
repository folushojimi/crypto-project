import './index.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Exchanges from './pages/Exchanges'
import Dashboard from './pages/Dashboard'
import Sidebar from './component/sidebar'
import Store from "./store/store";

function App() { 

  return (
    <Store> 
    <BrowserRouter >
     <>
     <div className='bg-blue-950 h-screen flex'>
      <Sidebar/>
     <Routes>
      <Route path='/'  element={<Dashboard/>}/>
      <Route path='/exchanges'  element={<Exchanges/>}/>
     </Routes>
     </div>
    </>
    </BrowserRouter>
       </Store> 
  )
}

export default App
