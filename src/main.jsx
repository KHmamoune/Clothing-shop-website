import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Index from './componenets/index/Index.jsx'
import Shop from './componenets/shop/Shop.jsx'
import Error from './componenets/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <Index />},
      {path: "shop", element: <Shop />},
    ],
    errorElement: <Error />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
