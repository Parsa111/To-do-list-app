import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoA";

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});