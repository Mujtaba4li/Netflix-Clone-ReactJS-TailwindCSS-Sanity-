import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '@pages/home'
import Collections from '@pages/collections'
import EditProile from '@pages/editProfile'
import Checkout from '@pages/checkout'
import { Welcome } from '@pages/welcome'
import SignIn from '@pages/signIn'

export default function Routing() {
	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/signin' element={<SignIn />} />
				<Route path='/home' element={<Home />} />
				<Route path='/collections' element={<Collections />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/editprofile' element={<EditProile />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Suspense>
	)
}
