import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { Layout } from "../../Components/Layout/Index"
import {OrdersCard} from "../../Components/OrdersCard/Index"

function MyOrders() {
    const context = useContext(ShoppingCartContext)

    return (
        <>
            <Layout>
                <div className="flex w-80 items-center gap-1 relative justify-center mb-4">
                    <h1 className="font-medium text-xl">My Orders</h1>
                </div>
                {
                    context.order.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}}`}>
                            <OrdersCard
                                totalPrice={order.totalPrice}
                                totalProducts={order.totalProducts}
                            />
                        </Link>
                    ))
                }
            </Layout>
        </>
        )
}

export { MyOrders }