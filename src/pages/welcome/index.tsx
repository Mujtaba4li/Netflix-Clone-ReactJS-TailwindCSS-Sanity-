import React from 'react'
import { Container } from './styled.'
import { T20 } from '@styles/typo'
interface IWelcome {}
export const Welcome = (p: IWelcome) => {
	return (
		<Container {...p}>
			<T20>Hello and welcome to Netflix clone</T20>
		</Container>
	)
}
