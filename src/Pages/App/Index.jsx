import { useRoutes, BrowserRouter } from "react-router-dom"
import { Home } from "../Home/Index"
import { MyAccount } from "../MyAccount/Index"
import { MyOrder } from "../MyOrder/Index"
import { MyOrders } from "../MyOrders/Index"
import { NotFound } from "../NotFound/Index"
import { SignIn } from "../SignIn/Index"
import "./App.css"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/MyAccount", element: <MyAccount /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/MyOrders", element: <MyOrders /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/*", element: <NotFound /> }
    ])

    return routes
}

const App = () => {
  return (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  )
}

export default App
