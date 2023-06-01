import Routing from '@routes'
import { useEffect } from 'react'
import { firebaseApp } from './firebase'

const App = () => {


	useEffect(()=>{
		console.log("app run successfull...")
		firebaseApp
	},[])
	return <Routing />
}

export default App
