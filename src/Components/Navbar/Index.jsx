import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const activeStyle = "underline underline-offset-4"
    const context = useContext(ShoppingCartContext)

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3 text-lg">
                <li className="font-bold">
                    <NavLink
                        to="/"
                        onClick={() => context.setSearchByCategory()}
                    >
                            Store
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/mens-clothing"
                        onClick={() => context.setSearchByCategory("men's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/womens-clothing"
                        onClick={() => context.setSearchByCategory("women's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            Women's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/jewelery"
                        onClick={() => context.setSearchByCategory("jewelery")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        onClick={() => context.setSearchByCategory("electronics")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            Electronics
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3 text-lg">
                <li className="text-black/60">
                    correo@prueba.com
                </li>
                <li>
                    <NavLink to="/my-orders">
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="my-account">
                        MyAccount
                    </NavLink>
                </li>
                <li>
                    <NavLink to="sign-in">
                        SignIn
                    </NavLink>
                </li>
                <li>
                    <div className="flex gap-3">
                    <ShoppingCartIcon className="w-6 h-6"></ShoppingCartIcon>
                    {context.cartProducts.length}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }