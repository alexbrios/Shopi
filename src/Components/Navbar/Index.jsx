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
                    >
                            Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                            Others
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
                    {context.count}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }