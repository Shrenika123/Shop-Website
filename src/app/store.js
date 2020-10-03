import {configureStore} from '@reduxjs/toolkit'
import productSlice from '../Redux/product'
import basketSlice from '../Redux/basket'
import counterSlice from '../Redux/counter'

export const rootStore=configureStore({
    reducer:{
            product:productSlice,
            basket:basketSlice,
            counter:counterSlice

    }
})