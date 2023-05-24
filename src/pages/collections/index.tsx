import { T20 } from '@styles/typo'
import React from 'react'
import { Container } from './styled'
import Button from '@components/Button'
import GpaySVG from '@assets/components/Button'
import TextField from '@components/TextField'
import DropDown from '@components/Dropdown'
import CardRow from '@components/CardRow'
import Nav from '@components/Nav'

const Collections = () => {
	return (
		<Container>
			<Nav/>
			<Button background='red' color='white'>
				Button
			</Button>
			<Button icon={GpaySVG}>Button with Icon</Button>
			<TextField placeholder='Enter password' type='password' />
			<TextField placeholder='Enter password' type='text' conditionalField='cvv' />
			<TextField placeholder='Enter password' type='text' conditionalField='cardNumber' />
			<DropDown />
			<CardRow title='New movies (This component is ready yet' />
		</Container>
	)
}

export default Collections
