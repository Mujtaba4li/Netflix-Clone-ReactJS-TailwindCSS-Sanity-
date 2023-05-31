import React, { useEffect, useRef, useState } from 'react'
import { Card, Container, Image, MovieName, StyledRow } from './styled'
import { T20, T30Bold } from '@styles/typo'
import { instance, imageBaseURL } from '@/api/axious'
import { Row } from '@styles/util'

interface IMoviesRow {
	title: string
	fetchURL: string
	isLarge?: boolean
}

const MoviesRow = (p: IMoviesRow) => {
	const { title, fetchURL, isLarge } = p
	const rowRef = useRef<HTMLDivElement>(null)

	const handleMouseEnterRow = () => {
		if (rowRef.current) {
			rowRef.current.style.overflowY = 'scroll'
			rowRef.current.scrollLeft = 0
		}
	}

	const handleMouseLeaveRow = () => {
		if (rowRef.current) {
			rowRef.current.style.overflowY = 'hidden'
			rowRef.current.scrollLeft = 0
		}
	}

	const [movies, setMovies] = useState<any>([])
	const [hoveredMovie, setHoveredMovie] = useState<any>(null)

	useEffect(() => {
		const fetchData = async () => {
			const request = await instance.get(fetchURL)
			setMovies(request.data.results)
			return request
		}
		fetchData()
	}, [fetchURL])

	const handleMouseEnter = (movie: any) => {
		setHoveredMovie(movie)
	}

	const handleMouseLeave = () => {
		setHoveredMovie(null)
	}

	return (
		<Container>
			<T30Bold alignSelf='flex-start' above={20} below={10} white>
				{title}
			</T30Bold>
			<StyledRow
				gap={10}
				ref={rowRef}
				onMouseEnter={handleMouseEnterRow}
				onMouseLeave={handleMouseLeaveRow}
			>
				{movies.map(
					(movie: any) =>
						(movie.poster_path || movie.backdrop_path) && (
							<Card key={movie.id}>
								<Image
									src={`${imageBaseURL}/${
										isLarge ? movie?.poster_path : movie?.backdrop_path
									}`}
									alt={movie?.title}
									onMouseEnter={() => handleMouseEnter(movie)}
									onMouseLeave={handleMouseLeave}
									isLarger={isLarge}
								/>
								{hoveredMovie && hoveredMovie.id === movie.id && (
									<Container>
										<MovieName white>
											{movie?.title || movie?.original_title || movie?.original_name}
										</MovieName>
									</Container>
								)}
							</Card>
						),
				)}
			</StyledRow>
		</Container>
	)
}

export default MoviesRow
