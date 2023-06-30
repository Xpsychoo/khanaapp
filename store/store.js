import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cartSlice';
import sideReducer from '../store/SideToggle';

export const store = configureStore({
    reducer: {
        cartData: cartReducer,
        sideToggler: sideReducer,
    },

})