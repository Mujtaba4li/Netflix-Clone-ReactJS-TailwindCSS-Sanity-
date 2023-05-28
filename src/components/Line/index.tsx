import React from 'react'
import { Container } from './styled'
import { IPos } from '@styles/util'

interface ILine extends IPos{
opacity?:number;
width?:number;
dark?:boolean;
}
const Line = (p:ILine) => {
  return (
   <Container {...p}/>
  )
}

export default Line