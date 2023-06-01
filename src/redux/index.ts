import { persistReducer, persistStore } from 'redux-persist'
import { PersistPartial } from 'redux-persist/lib/persistReducer'
import storage from 'redux-persist/lib/storage'

import mainSlice from '@mainSlice'
import { initMainState } from '@mainSlice/init'
import { MainState } from '@mainSlice/types'
import { combineReducers, configureStore, EmptyObject } from '@reduxjs/toolkit'
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

import userSlice from '@userSlice'
import { UserState } from '@userSlice/types'
import { initUserState } from '@userSlice/init'



type MiddlewareGenerator = (
	getDefaultMiddleware: CurriedGetDefaultMiddleware<
		EmptyObject & {
			main: MainState
			user:UserState
		} & PersistPartial
	>,
) => any[]

const persistConfig: any = {
	key: 'root',
	storage,
	migrate: (state: State) => {
		const { _persist = {} } = state || {}
		const main = { ...initMainState, ...(state?.main || {}) }
		const user = { ...initUserState, ...(state?.user || {}) }
		return Promise.resolve({ _persist, main })
	},
}

const rootReducer = combineReducers({
	main: mainSlice,
	user:userSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const generateMiddleware: MiddlewareGenerator = def => {
	const ret = [...def({ serializableCheck: false })]
	// ret.push(someMiddleware)
	return ret
}

export const store = configureStore({
	reducer: persistedReducer,
	middleware: generateMiddleware,
})

export const persistor = persistStore(store)

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
