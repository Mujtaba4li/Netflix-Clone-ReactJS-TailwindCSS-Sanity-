import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyD1iNUYZLFnd7uyLuLyYjnq1ZwD6e-JtmY',
	authDomain: 'netflix-clone-e5db1.firebaseapp.com',
	projectId: 'netflix-clone-e5db1',
	storageBucket: 'netflix-clone-e5db1.appspot.com',
	messagingSenderId: '353871039935',
	appId: '1:353871039935:web:ddefee10e08d521866e50a',
	measurementId: 'G-80DTCFT9T4',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { auth, firebaseApp }
export default db
