import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"
import { ShoppingCartProvider } from "../../Context/Index"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'


const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.closeCheckoutSideMenu()
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCarts = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if(isInCart) {
            return(
                <div
                className="absolute top-0 right-0 flex justify-cenitems-center bg-green-400 w-6 h-6 rounded-full m-2 p-1 textfont-bold"
                >
                    <CheckIcon className="text-black" />
                </div>
            )
        } else {
            return (
                <div
                className="absolute top-0 right-0 flex justify-cenitems-center bg-white w-6 h-6 rounded-full m-2 p-1 textfont-bold"
                >
                    <PlusIcon
                    onClick={(event) => addProductsToCarts(event, data.data)}
                    />
                </div>
            )
        }

    }


    return (
        <div
        className="bg-white cursor-pointer w-56 h-60 rounded-s-lg"
        onClick={() => showProduct(data.data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg"
                src={data.data.image} alt=""/>
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export { Card }