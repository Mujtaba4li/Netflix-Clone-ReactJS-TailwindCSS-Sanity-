import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initMainState } from './init'

const MainSlice = createSlice({
	name: 'main',
	initialState: initMainState,
	reducers: {
		setDummy: (state, action: PayloadAction<string>) => {
			state.dummy = action.payload
		},
		setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
			state.isLoggedIn = action.payload
		},
	},
})

export const { setDummy, setIsLoggedIn } = MainSlice.actions

export default MainSlice.reducer
