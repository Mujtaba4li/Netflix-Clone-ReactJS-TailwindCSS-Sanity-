import { T20 } from '@styles/typo'
import React from 'react'
import { Container } from './styled'
import Button from '@components/Button'
import GpaySVG from '@assets/components/Button'

const Collections = () => {
	return (
		<Container>
			<T20>collections</T20>
			<Button background='red' color='blue'>
				Button
			</Button>
			<Button icon={GpaySVG}>Button with Icon</Button>
		</Container>
	)
}

export default Collections
