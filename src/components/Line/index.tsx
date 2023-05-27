import React from 'react'
import { Container } from './styled'
import { IPos } from '@styles/util'

interface IContainer extends IPos{
opacity?:number;
width?:number;
}
const Line = (p:IContainer) => {
  return (
   <Container {...p}/>
  )
}

export default Line