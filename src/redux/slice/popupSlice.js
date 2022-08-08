import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	open:false,
	massive:[],
	number:0
}

export const popupSlice = createSlice({
	name: 'popup',

	initialState,
	reducers: {
		setClose: state => {
			state.open = !state.open
		},
		setMassive: (state, action) => {
			state.massive = action.payload
		},
		setNumber: (state, action) => {
			state.number = action.payload
		},
	},
})
export const { setClose, setMassive, setNumber } = popupSlice.actions
export default popupSlice.reducer
