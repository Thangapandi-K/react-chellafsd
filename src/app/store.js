import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'


configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default configureStore;