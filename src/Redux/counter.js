import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'count',
    initialState: {
        count: 0
    },
    reducers: {
        increaseCount: (state) => {
            state.count += 1
        },
        decreaseCount: (state) => {
            state.count -= 1
        },
        decreaseCountOnId: (state, action) => {


            state.count = state.count - action.payload
        }
    }

});

export const { increaseCount, decreaseCount, decreaseCountOnId } = counterSlice.actions

export const count = state => state.counter.count

// export const selectProduct=state=>state.product.products


export default counterSlice.reducer