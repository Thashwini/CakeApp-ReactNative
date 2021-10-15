import {configureStore} from '@reduxjs/toolkit'
import { CartSlice } from './Cart.redux'

//import cart reducer

//lets see if everything

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer
    }
})