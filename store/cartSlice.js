import { createSlice } from '@reduxjs/toolkit'
import { categories } from '../utils/categories'

const initialState = {
    value: 0,
}

export const cartSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        addToCart: (state, action) => {
           const categoriesData = categories;
           console.log(categoriesData);
        },
        removefromCart: (state) => {
            state.value -= 1
        },
        cartValues: (state, action) => {
            console.log(action.payload);
        },
    },
})

export const { addToCart, removefromCart, cartValues } = cartSlice.actions

export default cartSlice.reducer