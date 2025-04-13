import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Layout from './Layout'

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
          element: <Aboutus name={{nm,nm2}} />
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
      <RouterProvider router={router} />
    </>
  )
}

export default App;
