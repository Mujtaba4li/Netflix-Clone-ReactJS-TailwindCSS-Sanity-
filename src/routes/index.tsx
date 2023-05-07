import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '@pages/home'

export default function Routing() {
	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Suspense>
	)
}
