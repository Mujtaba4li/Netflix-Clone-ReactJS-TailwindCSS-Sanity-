import { useSelector } from 'react-redux'

// import { MainState } from '@mainSlice/types'
import { State } from '@redux'
import { createSelector } from '@reduxjs/toolkit'
import { UserState } from '@userSlice/types'

type UseUserSlice = <T = unknown>(selector: (state: UserState) => T) => T

const user = (state: State) => state.user

export const useMainSlice: UseUserSlice = selector =>
	useSelector(createSelector(user, selector))
