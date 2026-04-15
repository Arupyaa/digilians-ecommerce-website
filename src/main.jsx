import { createRoot } from 'react-dom/client'
import "./index.css"
import Home from './pages/Home'
import Master from './pages/Master'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Products from './pages/Products'

const routes = createBrowserRouter([
  {
    path: '/', element: <Master />, children: [
      { path: '/', element: <Home /> },
      { path: '/products/:currentCategory/page/:currentPage', element: <Products /> },
      {path: '/products', element: <Navigate to="/products/1" replace/>}

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={routes}/>
  </>,
)
