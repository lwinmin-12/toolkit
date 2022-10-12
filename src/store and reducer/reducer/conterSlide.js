import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "count",
    initialState: {value:0} ,
    reducers: {
        Add: (state , actions) => {
            state.value += actions.payload.amount
        },
        Remove: (state , actions) => {
            state.value -= actions.payload.amount
        }
    }
})
export const {Add,Remove} = counterSlice.actions
export default counterSlice.reducer