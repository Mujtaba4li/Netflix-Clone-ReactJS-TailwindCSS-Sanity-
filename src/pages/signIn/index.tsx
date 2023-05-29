import React from 'react'
import {
	Box,
	Container,
	Content,
	LowerContent,
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

interface ISignIn {}

const SignIn = (p: ISignIn) => {
	const Navigate = useNavigate()

	const handleSignup = () => {
		Navigate('/')
	}

	const handleSignIn = () => {
		Navigate('/home')
	}

	return (
		<Container {...p}>
			<Nav buttonsNone />
			<Content>
				<Box>
					<UpperContent>
						<T24Bold alignSelf='flex-start' white>
							Sigin In
						</T24Bold>
						<TextField type='email' placeholder='Enter email address' above={20} />
						<TextField type='password' placeholder='Enter password' above={10} />
					</UpperContent>

					<LowerContent>
						<Button background={darkRed} width='100%' above={20} onClick={handleSignIn}>
							Sigin In
						</Button>
						<Row gap={5} above={10}>
							<StyledT14 white>New to Netflix?</StyledT14>
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
