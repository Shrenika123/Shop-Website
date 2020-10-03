import React, { useEffect, useState } from 'react'
import './Home.css'
import { selectProduct, displayProduct } from '../../Redux/product'
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product/Product'
import LoaderSpinner from '../../Helper/Loadspinner'



function Home() {
    const dispatch = useDispatch();
    const product = useSelector(selectProduct)
    const [category, setCategory] = useState('Pant')

    useEffect(() => {
        dispatch(displayProduct(category))

    }, [category])


    return (
        <div className="Home-container">
            <div className="Home-category">
                <button value="Pant" onClick={(e) => setCategory(e.target.value)}>Pant</button>
                <button value="Shirt" onClick={(e) => setCategory(e.target.value)}>Shirt</button>
                <button value="Shoe" onClick={(e) => setCategory(e.target.value)}>Shoes</button>
            </div>
            <div className="Home-right">

                <h2 className="header">Products under the category {category}</h2>
                <LoaderSpinner/>
                <div className="Home-products">

                    {
                        product.map((item) => {
                            return (
                                <Product
                                    key={item._id}
                                    id={item._id}
                                    image={item.image}
                                    name={item.name}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
