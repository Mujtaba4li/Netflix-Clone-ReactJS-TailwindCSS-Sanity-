import React, { useEffect, useState } from 'react'
import { Container, Content, StyledRow, Description, Fade } from './styled'
import { T36Bold } from '@styles/typo'
import Button from '@components/Button'
import {imageBaseURL, instance} from '@/api/axious'
import requests from '@/api/requests'

interface IHeader {}

const Header = (p: IHeader) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const [movies, setMovies] = useState<any>([])

	useEffect(() => {
		const fetchData = () => {
			instance
				.get(requests.fetchNetflixOriginals)
				.then(moviesRequest => {
					const randomIndex = Math.floor(
						Math.random() * moviesRequest.data.results.length,
					)
					setMovies(moviesRequest.data.results[randomIndex])
				})
				.catch(error => {
					console.error('Error fetching data:', error)
				})
		}

		fetchData() // Initial fetch

		const interval = setInterval(fetchData, 3000)

		return () => {
			clearInterval(interval)
		}
	}, [])
	console.log(movies)

	const truncate = (string: string, n: any) => {
		return string?.length > n ? string.substr(0, n - 1) + '...' : string
	}

	const movieImage = `${imageBaseURL}/${movies?.backdrop_path}`
	const movieTitle = movies?.title || movies?.original_name || movies?.name
	const movieDescription = movies?.overview

	return (
		<Container {...p} image={movieImage}>
			<Content>
				<T36Bold white alignSelf='flex-start'>
					{movieTitle}
				</T36Bold>
				<StyledRow gap={10} above={10} alignSelf='flex-start'>
					<Button opacity width='125rem'>
						Play
					</Button>
					<Button opacity width='125rem'>
						My List
					</Button>
				</StyledRow>
				<Description white alignSelf='flex-start' above={20}>
					{truncate(movieDescription, 150)}
				</Description>
			</Content>
			<Fade/>
		</Container>
	)
}

export default Header
