import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { trackPromise } from 'react-promise-tracker';





//state for the  type of category to be displayed
export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    reducers: {
        selectOnCategory: (state, action) => {
            // console.log(action)
            let res = action.payload.data
            let res1 = res.filter((res2) =>
                res2.category === action.payload.category
            )
            state.products = res1
            // console.log(state.products)
        }
    }
})


export const { selectOnCategory } = productSlice.actions

export const displayProduct = category => async dispatch => {
    // console.log("jjj")
    trackPromise(axios.get('https://check-app-deploy.herokuapp.com/products').then((res) => dispatch(selectOnCategory({ data: res.data, category: category }))

    ))

}

export const selectProduct = state => state.product.products

export default productSlice.reducer