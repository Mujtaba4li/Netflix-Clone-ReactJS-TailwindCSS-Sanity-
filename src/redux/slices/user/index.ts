import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initUserState } from './init'

const UserSlice = createSlice({
	name: 'user',
	initialState: initUserState,
	reducers: {
		setLogin: (state, action: PayloadAction<boolean>) => {
			state.login = action.payload
		},
		setLogout: (state, action: PayloadAction<boolean>) => {
			state.logout = action.payload
		},
	},
})

export const { setLogin, setLogout } = UserSlice.actions

export default UserSlice.reducer
