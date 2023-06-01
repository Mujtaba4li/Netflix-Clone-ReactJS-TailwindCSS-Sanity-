import { T20, T48Bold } from '@styles/typo'
import React from 'react'
import { Container, HomeDummy } from './styled'
import Button from '@components/Button'
import GpaySVG from '@assets/components/Button'
import TextField from '@components/TextField'
import DropDown from '@components/Dropdown'
import CardRow from '@components/CardRow'
import Nav from '@components/Nav'
import Header from '@components/Header'
import { useDispatch } from 'react-redux'
import { useMainSlice } from '@mainSlice/hooks'
import { setDummy } from '@mainSlice'
import LinkText from '@components/LinkText'

const Collections = () => {
	const dispatch = useDispatch()

	const dummy = useMainSlice(e => e.dummy)

	const updateDummy = (e: string) => dispatch(setDummy(e))

	const onClick = () => {
		const time = new Date().getTime()
		updateDummy(time.toString())
	}

	return (
		<Container>
			<Nav />
			<HomeDummy>
				<T48Bold>{dummy}</T48Bold>
				<LinkText to='collections' above={10}>
					Go to Collection Page
				</LinkText>
				<Button above={50} onClick={onClick}>
					Click here
				</Button>
			</HomeDummy>
			<Button background='red' color='white'>
				Button
			</Button>
			<Button icon={GpaySVG}>Button with Icon</Button>
			<TextField placeholder='Enter password' type='password' />
			<TextField placeholder='Enter password' type='text' conditionalField='cvv' />
			<TextField placeholder='Enter password' type='text' conditionalField='cardNumber' />
			<DropDown />
			<CardRow title='New movies (This component is ready yet' />
			<Header />
		</Container>
	)
}

export default Collections
