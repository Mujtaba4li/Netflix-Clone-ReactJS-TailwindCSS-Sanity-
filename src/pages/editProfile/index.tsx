import React from 'react'
import {
	Buttons,
	Container,
	Content,
	Image,
	Left,
	Plans,
	PlansText,
	Right,
	Text,
} from './styled'
import { T14, T16, T20, T20Bold, T36Bold } from '@styles/typo'
import { ProfileIMG } from '@assets/components/Nav'
import TextField from '@components/TextField'
import Line from '@components/Line'
import Nav from '@components/Nav'
import Button from '@components/Button'
import { darkRed } from '@styles/colors'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import NetflixPlans from '@components/NetflixPlans'
import { setLogout } from '@userSlice'

interface IEditPrifole {}

const EditProile = (p: IEditPrifole) => {
	const Navigate = useNavigate()
	const dispatch = useDispatch()

	const handleClick = () => {
		Navigate('/checkout')
	}

	const handleSignout = () => {
		dispatch(setLogout())
	}

	return (
		<Container>
			<Nav />
			<T36Bold white alignSelf='flex-start'>
				Edit Profile
			</T36Bold>
			<Line above={10} below={10} opacity={0.5} />

			<Content>
				<Left>
					<Image src={ProfileIMG} />
				</Left>
				<Right>
					<TextField
						type='email'
						placeholder='Enter Email address'
						backgroundColor='grey'
					/>
					<T20Bold above={10} alignSelf='flex-start' white>
						PLans
					</T20Bold>
					<Line above={10} below={10} opacity={0.5} />

					<NetflixPlans />

					<Button
						background={darkRed}
						alignSelf='flex-end'
						width='100%'
						onClick={handleSignout}
					>
						Sign out
					</Button>
				</Right>
			</Content>
		</Container>
	)
}

export default EditProile
