import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Index from './componenets/index/Index.jsx'
import Shop from './componenets/shop/Shop.jsx'
import LogIn from './componenets/login/LogIn.jsx'
import SignUp from './componenets/login/SignUp.jsx'
import Error from './componenets/Error.jsx'
import CreateProduct from './componenets/admin/CreateProduct.jsx'
import CreateUser from './componenets/admin/CreateUser.jsx'
import DashBoard from './componenets/admin/Dashboard.jsx'
import ProductDetails from './componenets/admin/ProductDetails.jsx'
import UserDetails from './componenets/admin/UserDetails.jsx'
import PromotionList from './componenets/admin/PromotionList.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <Index />},
      {path: "shop", element: <Shop />},
      {path: "login", element: <LogIn />},
      {path: "signup", element: <SignUp />},
      {path: "admin", element: <DashBoard />},
      {path: "admin/create-product", element: <CreateProduct />},
      {path: "admin/create-user", element: <CreateUser />},
      {path: "admin/product-details", element: <ProductDetails />},
      {path: "admin/user-details", element: <UserDetails />},
      {path: "admin/promotion-details/:id", element: <PromotionList />},
    ],
    errorElement: <Error />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
