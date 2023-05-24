import styled from '@emotion/styled'
import { black } from '@styles/colors'
import { withPos } from '@styles/util'
import { Bin } from '@types'

interface IContainer {
	width?: string
}
interface IEye {
	visible: Bin
}

export const Container = withPos(styled.div<IContainer>`
	display: flex;

	align-items: center;
	justify-content: space-between;

	gap: 3rem;
	width: ${p => (p.width ? p.width : '100%')};
	height: 50rem;

	padding: 10rem;

	border: 2px solid ${black}1D;
	border-radius: 10rem;
	&:focus-within {
		border: 2px solid ${black}8d;
	}
`)

export const Input = styled.input`
	width: 95%;

	font-size: 15rem;
	font-family: Arial, Helvetica, sans-serif;

	border: none;

	padding: 5rem;
	:focus {
		border: none;
		outline: none;
	}
	:active {
		border: none;
	}
`

export const Icon = styled.div`
	position: relative;
	width: 1.8%;
	margin: 8rem;
`

export const Eye = styled.img<IEye>`
	height: 20px;
	cursor: pointer;
	
	opacity: ${p => (p.visible === 0 ? '1' : '0.4')};

	&:active {
		opacity: ${p => (p.visible === 0 ? '0.4' : '1')};
	}
`

export const Line = styled.div`
	position: absolute;
	opacity: 0.3;
	top: 45%;
	width: 100%;
	color: red;
	height: 2rem;
	background-color: black;
	transform-origin: top center;
	transform: rotate(-30deg);
`

export const Error = styled.div`
	margin: 0;
	color: red;
	font-weight: 600;
	font-size: 10rem;
	width: 5%;
`

export const CardIcon=styled.img`
/* height: 100rem; */
/* height:20rem; */

`
export const Cards=styled.div`
/* height: 100rem; */
display:flex;
gap: 6rem;

`