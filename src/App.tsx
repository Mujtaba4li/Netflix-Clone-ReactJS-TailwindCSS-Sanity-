import Routing from '@routes'
import { useEffect } from 'react'
import { firebaseApp } from './firebase'
import { useNavigate } from 'react-router-dom'
import { useUserSlice } from '@userSlice/hooks'

const App = () => {
	// const navigate=useNavigate();
	// const isUserLogin=useUserSlice(e=>e.login);

	useEffect(() => {
		console.log('app run successfull...')
		firebaseApp
		// userAuthentication();

		// const timer = setInterval(() => {
		// 	// userAuthentication();
		// 	console.log("I triged every 3s bro")
		//   }, 3000); // Run authentication every 10 seconds

		//   return () => {
		// 	clearInterval(timer); // Cleanup the interval on component unmount
		//   };
	}, [])

	// const userAuthentication=()=>{
	// 	!isUserLogin&&(
	// 		navigate('/'))
	// }
	return <Routing />
}

export default App
