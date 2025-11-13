import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element: <><Navbar/><Home/></>
      // element: <Home/>
    },
    {
      path : "/Login",
      element: <><Navbar/><Login/></>
      // element: <Login/>
    },
    {
      path : "/about",
      element: <><Navbar/><About/></>
      // element: <About/>
    },
    {
      path : "/user/:username",
      element: <><Navbar/><User/></>
      // element: <About/>
    },

  ])
  return (
    <>
        {/* <Navbar/> */}
        <RouterProvider router={router} />
    </>
  )
}

export default App
