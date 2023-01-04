import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from './Configredux';

export const store = configureStore({
    reducer: {
        ToDo: todoSlice.reducer,
    },
});