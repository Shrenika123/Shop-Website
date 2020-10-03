import React from 'react'
import {useSelector} from 'react-redux'
import Cart from './Cart/Cart'
import {basket} from '../../Redux/basket'
import './CartTotal.css'
import {Link} from 'react-router-dom'
//cart model page

function CartTotal() {
    const basket1=useSelector(basket)
  
    return (
        <div className="cartTotal">
          {basket1.length===0?<h2> Cart is empty :(</h2>:(
              <div className="cartBasket"> 
                {
                    basket1.map((item)=>
               {
                   
                return ( <Cart
               key={item.id}
                id={item.id}
                name={item.name} 
                image={item.image}
                />)}
                )}
                <Link to={basket1.length>0?"/checkout":"/"}>
                <button className="cart-button"  >Checkout</button>
                </Link>
                </div>
            
          )
                }
        </div>
    )
}

export default CartTotal
