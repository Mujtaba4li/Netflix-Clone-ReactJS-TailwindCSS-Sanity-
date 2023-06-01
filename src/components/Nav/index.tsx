import { T14 } from '@styles/typo'
import React, { useEffect, useState } from 'react'
import { Container, Logo } from './styled'
import { NetflixSVG, ProfileIMG } from '@assets/components/Nav'
import { IPos } from '@styles/util'
import { useNavigate } from 'react-router-dom'
import { SignButton } from '@components/Button/styled'
import { useDispatch } from 'react-redux'
import { useUserSlice } from '@userSlice/hooks'

interface INav extends IPos {
	buttonsNone?: boolean
}

const Nav = (p: INav) => {
	const { buttonsNone } = p
	const [scrolled, setScrolled] = useState(false)
	const Navigate = useNavigate()

	const isLoggedIn = useUserSlice(e=>e.login)
	const dispatch = useDispatch()

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0
			setScrolled(isScrolled)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleLogo = () => {
		Navigate('/home')
	}

	const handleProfileButton = () => {
		Navigate('/editprofile')
	}

	const handleSigin = () => {
		Navigate('/signin')
	}

	return (
		<Container {...p} scrolled={scrolled}>
			<Logo src={NetflixSVG} onClick={handleLogo} />
			{!buttonsNone && (
				<>
					{!isLoggedIn ? (
						<SignButton onClick={handleSigin}>
							<T14 white>Sign in</T14>
						</SignButton>
					) : (
						<Logo src={ProfileIMG} onClick={handleProfileButton} />
					)}
				</>
			)}
		</Container>
	)
}

export default Nav
