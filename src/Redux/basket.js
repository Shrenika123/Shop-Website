import { createSlice } from '@reduxjs/toolkit'


export const basketSlice = createSlice({
    name: 'cart',
    initialState: {
        baskets: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(state.baskets)
            state.baskets.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            state.baskets = state.baskets.filter((res) => res.id !== action.payload.id)

        },
        increaseQuantity: (state, action) => {
            console.log(action)
            let res = action.payload.indexRes
            state.baskets[res].quantity += 1
        },
        decreaseQuantity: (state, action) => {
            let res = action.payload.indexRes
            state.baskets[res].quantity -= 1
        },
    }

});

export const { addToCart, deleteFromCart, increaseCount, increaseQuantity, decreaseQuantity, decreaseCount, decreaseCountOnId } = basketSlice.actions

export const basket = state => state.basket.baskets
// export const count=state=>state.basket.count

// export const selectProduct=state=>state.product.products


export default basketSlice.reducer