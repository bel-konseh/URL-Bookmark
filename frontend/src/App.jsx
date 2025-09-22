
import './App.css'
import { createBrowserRouter,createRoutesFromElements, Route,Routes,RouterProvider, Navigate,useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './Pages/Layout'
function App() {


  // if(!token && pathname !== "/login" && pathname !== "/signup"){
  //   // return <Navigate to="/login" />
  //   window.location.href = "/login"
    
  // }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route pathname="/"  element={<Layout />}>

        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/signup" element={<Home />} />
      </Route>
    )
  )

  return(
      <RouterProvider router={router} />
  )

}

export default App
