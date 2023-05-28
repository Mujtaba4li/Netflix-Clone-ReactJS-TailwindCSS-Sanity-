import { T20 } from '@styles/typo'
import React, { useEffect, useState } from 'react'
import { Container, Logo } from './styled'
import { NetflixSVG, ProfileIMG } from '@assets/components/Nav'
import { IPos } from '@styles/util'
import { useNavigate } from 'react-router-dom'

interface INav extends IPos {}

const Nav = (p: INav) => {
	const [scrolled, setScrolled] = useState(false)
	const Navigate = useNavigate()

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
		Navigate('/')
	}

	const handleProfileButton = () => {
		Navigate('/editprofile')
	}

	return (
		<Container {...p} scrolled={scrolled}>
			<Logo src={NetflixSVG} onClick={handleLogo} />
			<Logo src={ProfileIMG} onClick={handleProfileButton} />
		</Container>
	)
}

export default Nav
