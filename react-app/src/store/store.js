import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./slices/projectsSlice";


const store = configureStore({
    reducer:{
        projectsReducer: projectsSlice.reducer
    }
})

export default store;