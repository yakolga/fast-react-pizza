import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice';
import cartResucer from './features/cart/cartSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartResucer,
    }
})

export default store