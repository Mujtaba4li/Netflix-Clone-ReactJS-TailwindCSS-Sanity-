import React from 'react'
import { Container, Eye, Input } from './styled'
import { IPos } from '@styles/util';
import EyeSVG from '@assets/components/TextField';

type TFieldType='text' | 'password' | 'number';
interface ITextField extends IPos{
	placeholder?: string
  type:TFieldType
}
  
const TextField = ({ ...p }:ITextField) => {
	const { placeholder,type } = p
	return (
		<Container>
			<Input type={type} placeholder={placeholder} />
  <Eye src={EyeSVG} />
		</Container>
	)
}

export default TextField
