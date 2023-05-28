

import React from 'react'
import { Container } from './styled'
import Nav from '@components/Nav'
import Header from '@components/Header'
interface IHome{

}

const Home = (p:IHome) => {
  return (
	<Container>
		<Nav/>
		<Header/>
	</Container>
  )
}

export default Home