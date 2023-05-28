import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '@pages/home'
import Collections from '@pages/collections'
import EditProile from '@pages/editProfile'
import Checkout from '@pages/checkout'

export default function Routing() {
	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/collections' element={<Collections />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/editprofile' element={<EditProile />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Suspense>
	)
}
