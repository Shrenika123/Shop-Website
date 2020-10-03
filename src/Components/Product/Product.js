import React from 'react'
import './Product.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, basket, increaseQuantity } from '../../Redux/basket'
import { increaseCount } from '../../Redux/counter'

function Product({ id, image, name }) {
    const dispatch = useDispatch()
    const basket1 = useSelector(basket)

    //add item to the cart 
    const addItems = () => {
        let exist = basket1.find((res) => {
            if (res.id === id) {
                return true
            }
            else return false
        }
        )
        if (!exist) {
            dispatch(
                //adding item to cart
                addToCart({
                    id: id, image: image, name: name, quantity: 1
                })
            )
                //increase cart count
                dispatch(
                increaseCount()
            )
        }
        else {
            let indexRes = basket1.findIndex((res) => res.id === id)
            //increase count of quantity of the product
            dispatch(increaseQuantity({ indexRes }))
            dispatch(
                //increase cart count
                increaseCount()
            )
            return

        }
        return
    }
    return (
        <div className="Product-container">
            <img className="product_image" src={image} alt={id} />
            <p>{name}</p>
            <button onClick={addItems}>Add to Cart</button>
        </div>
    )
}

export default Product
