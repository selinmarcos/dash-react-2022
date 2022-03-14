import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Patients from './pages/Patients'
import Inventory from './pages/Inventory'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/home/Home'
import './scss/App.scss'

function App() {
    return (
   
        <BrowserRouter>   
            <Routes>
                <Route path='/' element={<Home />}/>    
                <Route path='login' element={<Login />}/>
                <Route path='register' element={<Register />}/>
                
                <Route path="/dash" element={<MainLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="patients" element={<Patients />} />
                        <Route path="products" element={<Inventory />} />
                        <Route path="customers" element={<Blank />} />
                        <Route path="settings" element={<Blank />} />
                        <Route path="stats" element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter> 
        
    )
}

export default App
