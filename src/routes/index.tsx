import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '@pages/home'
import Collections from '@pages/collections'
import EditProile from '@pages/editProfile'

export default function Routing() {
	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/collections' element={<Collections />} />
				<Route path='/editprofile' element={<EditProile />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Suspense>
	)
}
