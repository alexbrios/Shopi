import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { OrderCard } from "../../Components/OrderCard/Index"
import { Layout } from "../../Components/Layout/Index"

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
    let indexId = index.substring(0,1)
    if(indexId === "l") indexId = context.order?.length - 1


    return (
            <Layout>
                <div className="flex w-80 items-center gap-1 relative justify-center mb-6">
                    <Link to="/my-orders" className="absolute left-0">
                        <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
                    </Link>
                    <h1>My Order</h1>
                </div>
                <div className='flex flex-col w-80'>
                {
                    context.order?.[indexId]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                        />
                    ))
                }
            </div>
            </Layout>
        )
}

export  { MyOrder }