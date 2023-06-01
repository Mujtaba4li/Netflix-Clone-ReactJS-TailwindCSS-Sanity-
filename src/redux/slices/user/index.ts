import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initUserState } from './init'
import { IUser } from './types'

const UserSlice = createSlice({
	name: 'user',
	initialState: initUserState,
	reducers: {
		setLogin: (state, action: PayloadAction<IUser|null>) => {
			state.login = action.payload
		},
		setLogout: (state) => {
			state.login = null;
		},
	},
})

export const { setLogin, setLogout } = UserSlice.actions

export default UserSlice.reducer
