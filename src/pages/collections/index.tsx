import { T20 } from '@styles/typo'
import React from 'react'
import { Container } from './styled'
import Button from '@components/Button'
import GpaySVG from '@assets/components/Button'
import TextField from '@components/TextField'
import DropDown from '@components/Dropdown'

const Collections = () => {
	return (
		<Container>
			<T20>collections</T20>
			<Button background='red' color='white'>
				Button
			</Button>
			<Button icon={GpaySVG}>Button with Icon</Button>
			<TextField placeholder='Enter password' type='password'/>
			<TextField placeholder='Enter password' type='text' conditionalField='cvv' />
			<TextField placeholder='Enter password' type='text' conditionalField='cardNumber' />
			<DropDown />
		</Container>
	)
}

export default Collections 
