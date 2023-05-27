

import React from 'react'
import { Container } from './styled'
import Nav from '@components/Nav'
import Header from '@components/Header'
interface IContainer{

}

const Home = (p:IContainer) => {
  return (
	<Container>
		<Nav/>
		<Header/>
	</Container>
  )
}

export default Home