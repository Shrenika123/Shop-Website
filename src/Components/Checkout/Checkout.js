import Cart from '../CartTotal/Cart/Cart'
import React from 'react'
import { basket } from '../../Redux/basket'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './Checkout.css'


//checkout page

function Checkout() {
    const basket1 = useSelector(basket)
    const history = useHistory()

    //redirect to checkout page
    const reRoute = () => {
        history.push("/")
    }

    return (
        <div className="checkout">
            {basket1.length === 0 ? <div><h2 className="message"> Basket is empty :(</h2> <button className="checkout-button" onClick={reRoute}>Back To Home</button></div> : (
                <div className="checkout_basket">
                    {
                        basket1.map((item) => {

                            return (<Cart
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                            />)
                        }
                        )}

                    <button className="cart-button"  >Buy now</button><br/><br/>
                    <button className="cart-button" onClick={reRoute}>Back To Home</button>
                </div>

            )
            }
        </div>
    )
}

export default Checkout
