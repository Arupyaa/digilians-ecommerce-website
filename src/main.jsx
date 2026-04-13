import { createRoot } from 'react-dom/client'
import "./index.css"
import Home from './pages/Home'
import Master from './pages/Master'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './pages/Products'

const routes = createBrowserRouter([
  {
    path: '/', element: <Master />, children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={routes}/>
  </>,
)
