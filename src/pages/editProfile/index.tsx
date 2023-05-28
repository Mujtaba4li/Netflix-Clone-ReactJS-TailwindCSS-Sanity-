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


interface IEditPrifole {}

const EditProile = (p: IEditPrifole) => {
	const Navigate=useNavigate();


	const handleClick = () => {
		Navigate('/checkout')
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
					<Plans below={30}>
						<PlansText>
							<Text white alignSelf='flex-start'>
								Netflix Standard
								<T14 white alignSelf='flex-start'>
									1080p
								</T14>
							</Text>
							<Text white alignSelf='flex-start'>
								Netflix Basic
								<T14 white alignSelf='flex-start'>
									480p
								</T14>
							</Text>
							<Text white alignSelf='flex-start'>
								Netflix Premium
								<T14 white alignSelf='flex-start'>
									4K+HDR
								</T14>
							</Text>
						</PlansText>
						<Buttons>
							<Button background={darkRed} alignSelf='flex-end' onClick={handleClick}>
								Subcribe
							</Button>
							<Button background={darkRed} alignSelf='flex-end'>
								Subcribe
							</Button>
							<Button background='grey' alignSelf='flex-end'>
								Current Pakage
							</Button>
						</Buttons>
					</Plans>
					<Button background={darkRed} alignSelf='flex-end' width='100%'>
						Sign out
					</Button>
				</Right>
			</Content>
		</Container>
	)
}

export default EditProile
