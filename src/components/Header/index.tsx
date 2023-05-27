import React, { useEffect, useState } from 'react'
import { Container, ImageContainer, Image, Content } from './styled'
import { T14, T20, T20Bold, T36Bold } from '@styles/typo'
import { slides } from './extras'
import Button from '@components/Button'
import { Row } from '@styles/util'

interface IHeader {}

const Header = (p: IHeader) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	const { imageSrc, title, description } = slides[currentSlide]

	return (
		<Container {...p}>
			<ImageContainer>
				<Image src={imageSrc} alt='Slide' />
			</ImageContainer>
			<Content>
				<T36Bold white alignSelf='flex-start'>{title}</T36Bold>
				<Row gap={10}>
					<Button opacity={true} width='130rem'>Play</Button>
					<Button opacity={true} width='130rem'>My List</Button>
				</Row>
				<T14 white alignSelf='flex-start'>{description}</T14>
			</Content>
		</Container>
	)
}

export default Header
