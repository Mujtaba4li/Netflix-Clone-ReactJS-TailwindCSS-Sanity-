import styled from '@emotion/styled'
import { withPos } from '@styles/util'

interface IContainer {
	opacity?: number
	width?: number
}

export const Container = withPos(styled.hr<IContainer>`
	display: flex;
	justify-content: center;

	width: ${p => (p.width ? p.width : 100)}%;
	height: 2rem;
	border: none;
	background: white;
	opacity: ${p => (p.opacity ? p.opacity : 1)};
	align-self: center;
`)
