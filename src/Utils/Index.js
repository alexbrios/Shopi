import { ShoppingCartContext } from "../Context/Index"

/**
 * This function calculates total price of new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {numbrer} Total Price
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}

