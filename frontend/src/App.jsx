import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Layout from './Layout'
import { createContext, useContext } from 'react'

export const NewContext = createContext();


const Comp = ()=>{
  const value1 = useContext(NewContext);
  return(
    <h1>vale from Comp context: {value1}</h1>
  )
}


function App() {

  let nm = 'Alice'
  let nm2 = 'Bob'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <Aboutus name={{ nm, nm2 }} />
        },
        {
          path: '/contact',
          element: <Contactus />
        }
      ]
    }
  ]);

  return (
    <>
      <NewContext.Provider value='john'>
        <Comp />
        <RouterProvider router={router} />
      </NewContext.Provider>

    </>
  )
}

export default App;
