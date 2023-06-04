import React, { useRef } from 'react'
import {
	Box,
	Container,
	Content,
	LowerContent,
	SignDetails,
	SignUp,
	StyledT14,
	UpperContent,
} from './styled'
import { T14, T14Bold, T20, T24Bold } from '@styles/typo'
import Nav from '@components/Nav'
import TextField from '@components/TextField'
import Button from '@components/Button'
import { darkRed } from '@styles/colors'
import { Row } from '@styles/util'
import { useNavigate } from 'react-router-dom'

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import user, { setLogin } from '@userSlice'

interface ISignIn {}

const SignIn = (p: ISignIn) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)

	const handleSignup = () => {
		// Navigate('/');
		const auth = getAuth()
		createUserWithEmailAndPassword(
			auth,
			`${emailRef.current?.value}`,
			`${passwordRef.current?.value}`,
		)
			.then(userCredential => {
				const user = userCredential.user
				console.log(user)
				alert("User with '" + user.email + "' create successfully!!!")

				resetFields()
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message

				alert(errorMessage)
			})
	}

	const handleSignIn = () => {
		// Navigate('/home')
		const auth = getAuth()
		signInWithEmailAndPassword(
			auth,
			`${emailRef.current?.value}`,
			`${passwordRef.current?.value}`,
		)
			.then(userCredential => {
				const USER = userCredential.user
				console.log(USER)
				dispatch(
					setLogin({
						userId: `${USER?.uid}`,
						userEmail: `${USER?.email}`,
					}),
				)

				alert('login successfully!!!')
				navigate('/home')
				resetFields()
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message

				alert(errorMessage)
			})
	}

	const resetFields = () => {
		if (emailRef.current) {
			emailRef.current.value = ''
		}
		if (passwordRef.current) {
			passwordRef.current.value = ''
		}
	}
	//Authentication
	const register = (e: any) => {
		e.preventDetault()
	}

	const signIn = (e: any) => {
		e.preventDetault()
	}

	return (
		<Container {...p}>
			<Nav buttonsNone />
			<Content>
				<Box>
					<UpperContent>
						<T24Bold alignSelf='flex-start' white>
							Sigin In <SignDetails>(email: test@gmail.com, password:123123)</SignDetails>
						</T24Bold>

						<TextField
							ref={emailRef}
							type='email'
							placeholder='Enter email address'
							above={20}
						/>
						<TextField
							ref={passwordRef}
							type='password'
							placeholder='Enter password'
							above={10}
						/>
					</UpperContent>

					<LowerContent>
						<Button background={darkRed} width='100%' above={20} onClick={handleSignIn}>
							Sigin In
						</Button>
						<Row gap={5} above={10}>
							<StyledT14 white>To register just enter credentials and click here !!!</StyledT14>
							<SignUp white onClick={handleSignup}>
								Sign Up Now.
							</SignUp>
						</Row>
					</LowerContent>
				</Box>
			</Content>
		</Container>
	)
}

export default SignIn
