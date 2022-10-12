import { configureStore } from "@reduxjs/toolkit";
import conterSlide from "./reducer/conterSlide";
import toggleSlice from "./reducer/toggle";
const store = configureStore({
    reducer:{
        counter: conterSlide,
        toggle:toggleSlice
    }
})
export default store