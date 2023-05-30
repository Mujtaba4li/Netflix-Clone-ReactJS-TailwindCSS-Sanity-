import React from 'react'
import { Container } from './styled'
import { T20 } from '@styles/typo'

interface IMoviesRow{}
const MoviesRow = (p:IMoviesRow) => {
  return (
   <Container {...p}>
    <T20>Hello this is row</T20>
   </Container>
  )
}

export default MoviesRow