import { Suspense } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import Home from '@pages/home'
import Collections from '@pages/collections'
import EditProile from '@pages/editProfile'
import Checkout from '@pages/checkout'
import { Welcome } from '@pages/welcome'
import SignIn from '@pages/signIn'
import { useDispatch } from 'react-redux'
import { useUserSlice } from '@userSlice/hooks'

export default function Routing() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useUserSlice(e=>e.login)

	return (
		<Suspense>
			<Routes>
				{!user ? (
					<>
						<Route path='/' element={<Welcome />} />
						<Route path='/signin' element={<SignIn />} />
						<Route path='*' element={<Navigate to='/' replace />} />
					</>
				) : (
					<>
						<Route path='/home' element={<Home />} />
						<Route path='/collections' element={<Collections />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/editprofile' element={<EditProile />} />
						<Route path='*' element={<Navigate to='/' replace />} />
					</>
				)}
			</Routes>
		</Suspense>
	)
}
