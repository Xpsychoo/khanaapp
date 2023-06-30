import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const SideToggle = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        openSide: (state) => {
            state.value = true;
        },
        closeSide: (state) => {
            state.value = false;
        },
    },
})

export const { openSide, closeSide } = SideToggle.actions

export default SideToggle.reducer