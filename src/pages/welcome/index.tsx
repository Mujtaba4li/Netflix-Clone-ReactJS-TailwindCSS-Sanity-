import React from 'react'
import { Container, Content, StyledButton, StyledTextField } from './styled.'
import { T14, T16, T20, T36Bold } from '@styles/typo'
import Nav from '@components/Nav'
import { Row } from '@styles/util'
import TextField from '@components/TextField'
import Button from '@components/Button'
import { darkRed } from '@styles/colors'
interface IWelcome {}
export const Welcome = (p: IWelcome) => {
	return (
		<Container {...p}>
			<Nav />
			<Content>
				<T36Bold white>Unlimited films,TV programmes and more.</T36Bold>
				<T16 white>Watch anywhere, Cancel at any time.</T16>
				<T14 white above={10}>
					Ready to watch? Enter your email to create or restart your membership
				</T14>
				<Row>
					<StyledTextField type='email' placeholder='Email address' />
					<StyledButton background={darkRed}>Get Started</StyledButton>
				</Row>
			</Content>
		</Container>
	)
}
