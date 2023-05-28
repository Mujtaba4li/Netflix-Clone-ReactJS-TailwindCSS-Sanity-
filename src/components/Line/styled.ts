import styled from '@emotion/styled'
import { withPos } from '@styles/util'

interface IContainer {
	opacity?: number
	width?: number
	dark?: boolean
}

export const Container = withPos(styled.hr<IContainer>`
	display: flex;
	justify-content: center;

	width: ${p => (p.width ? p.width : 100)}%;
	height: 1.5rem;
	border: none;
	background: ${p=>p.dark?'black':'white'};
	opacity: ${p => (p.opacity ? p.opacity : 1)};
	align-self: center;
`)
