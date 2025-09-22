
import './App.css'
import { createBrowserRouter,createRoutesFromElements, Route,Routes,RouterProvider, Navigate,useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './Pages/Layout'
import Signup from './components/LoginSignup/SignupForm'
import Login from './components/LoginSignup/login'
function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route pathname="/"  element={<Layout />}>

        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      
    )
  )


  return(
      <RouterProvider router={router} />
  )

}

export default App
