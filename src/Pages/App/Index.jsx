import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingCartProvider } from "../../Context/Index"
import { Navbar } from "../../Components/Navbar/Index"
import { Home } from "../Home/Index"
import { MyAccount } from "../MyAccount/Index"
import { MyOrder } from "../MyOrder/Index"
import { MyOrders } from "../MyOrders/Index"
import { NotFound } from "../NotFound/Index"
import { SignIn } from "../SignIn/Index"
import { CheckoutSideMenu } from "../../Components/CheckOutSideMenu/Index"
import "./App.css"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> }
    ])

    return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
