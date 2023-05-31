

import React from 'react'
import { Container } from './styled'
import Nav from '@components/Nav'
import Header from '@components/Header'
import MoviesRow from '@components/MoviesRow'
import requests from '@/api/requests'
interface IHome{

}

const Home = (p:IHome) => {
  return (
	<Container>
		<Nav/>
		<Header/>
		<MoviesRow title='Netflix Original' fetchURL={requests.fetchActionMovies}/>
		<MoviesRow title='Trending Now' fetchURL={requests.fetchTrending} isLarge/>
		<MoviesRow title='Top Rated' fetchURL={requests.fetchTopRated}/>
		<MoviesRow title='Action Movies' fetchURL={requests.fetchActionMovies} isLarge/>
		<MoviesRow title='Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
		<MoviesRow title='Horror Movies' fetchURL={requests.fetchHorrorMovies}/>
		<MoviesRow title='Romance Movies' fetchURL={requests.fetchRomanceMovies} isLarge/>
		<MoviesRow title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
	</Container>
  )
}

export default Home