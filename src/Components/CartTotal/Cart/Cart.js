import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, basket, increaseQuantity, decreaseQuantity } from '../../../Redux/basket'
import {increaseCount,decreaseCount,decreaseCountOnId} from '../../../Redux/counter'
//induvidual cart item

function Cart({ id, image, name }) {
    const dispatch = useDispatch()
    const basket1 = useSelector(basket)


    let indexRes = basket1.findIndex((res) => res.id === id)


    const quantity1 = basket1[indexRes].quantity



    const removeItem = () => {
        let indexRes = basket1.findIndex((res) => res.id === id)
        let res = basket1[indexRes].quantity
        console.log(res)

        dispatch(deleteFromCart({
            id: id
        }))
        dispatch(
            decreaseCountOnId(res)
        )


    }

    //increment count for product and cart
    const incrementQuantity = () => {
        let indexRes = basket1.findIndex((res) => res.id === id)
        dispatch(increaseQuantity({ indexRes }))

        dispatch(
            increaseCount()
        )
    }


    const decrementQuantity = () => {
        let indexRes = basket1.findIndex((res) => res.id === id)

        if (basket1[indexRes].quantity !== 1) {
            dispatch(decreaseQuantity({ indexRes }))
            dispatch(
                decreaseCount()
            )
        }
        else {
            removeItem()

        }

    }

    return (
        
        <div className="Cart-container">
            <img className="Cart_image" src={image} alt="product-image1"/>
            <div className="rightContainer">
            <p>{name}</p>
            <div className="quantity-container-main">
                <p>quantity: </p>
                <div className="quantity-container">
                    <p className="arrow-up" onClick={incrementQuantity}></p>
                    <p className="quantity"> {quantity1}</p>
                    <p className="arrow-down" onClick={decrementQuantity}></p>
                </div>
            </div>
            </div>

            <button className="remove_button"onClick={removeItem}>Remove from cart</button>
        </div>
    )
}

export default Cart
