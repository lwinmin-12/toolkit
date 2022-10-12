import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'name',
    initialState: false,
    reducers: {
        toogle: (state) => {
            return state = !state
        }
    }
})
export const {toogle} = toggleSlice.actions
export default toggleSlice.reducer