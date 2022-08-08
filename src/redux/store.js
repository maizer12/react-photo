import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { popupSlice } from './slice/popupSlice'
const rootReducer = combineReducers({
	popup: popupSlice.reducer
})



export const store = configureStore({
	reducer:rootReducer
})