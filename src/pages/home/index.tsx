

import React from 'react'
import { Container } from './styled'
import Nav from '@components/Nav'
import Header from '@components/Header'
import MoviesRow from '@components/MoviesRow'
interface IHome{

}

const Home = (p:IHome) => {
  return (
	<Container>
		<Nav/>
		<Header/>
		<MoviesRow/>
	</Container>
  )
}

export default Home