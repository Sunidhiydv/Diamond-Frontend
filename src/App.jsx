import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Privacy from './components/Privacy'
import TnC from './components/TnC'
import Grading from './components/Grading'
import AboutMain from './components/AboutMain'


function App() {

  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
    {
      path : '/contact',
      element : <Contact/>
    },
    {
      path : '/privacy',
      element : <Privacy/>
    },
    {
      path : '/tnc',
      element : <TnC/>
    },
    {
      path : '/grade',
      element : <Grading/>
    },
    {
      path : '/about',
      element : <AboutMain/>
    }
  ])

  return (
    <>
      <RouterProvider router = {appRouter}/>

    </>
  )
}

export default App
