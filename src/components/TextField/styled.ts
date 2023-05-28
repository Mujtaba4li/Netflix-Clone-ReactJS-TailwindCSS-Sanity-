import styled from '@emotion/styled'
import { black, darkRed } from '@styles/colors'
import { T14, T14Bold } from '@styles/typo'
import { withPos } from '@styles/util'
import { Bin } from '@types'
import { keyframes } from '@emotion/react';

interface IContainer {
	width?: string
	backgroundColor?: string
}
interface IEye {
	visible: Bin
}


const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = withPos(styled.div<IContainer>`
	display: flex;

	align-items: center;
	justify-content: space-between;

	gap: 3rem;
	width: ${p => (p.width ? p.width : '100%')};
	height: 50rem;

	padding: 10rem;
	background-color: ${p => (p.backgroundColor ? p.backgroundColor : 'white')};
	border: 2px solid ${black}1D;
	border-radius: 5rem;
	&:focus-within {
		border: 2px solid ${black}8d;
	}
`)

export const Input = styled.input<IContainer>`
	width: 95%;

	font-size: 15rem;
	font-family: Arial, Helvetica, sans-serif;

	border: none;

	background-color: ${p => (p.backgroundColor ? p.backgroundColor : 'white')};

	padding: 5rem;
	color: ${p => (p.backgroundColor ? 'white' : 'black')}; 
	
	::placeholder{
		color:${p => (p.backgroundColor ? 'white' : 'black')};
		opacity: 0.5;
	}
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



export const Error = styled(T14Bold)`
  margin: 0;
  color: ${darkRed};
  font-weight: 600;
  width: 10%;

animation: ${blinkAnimation} 1.5s infinite;
`;

export const CardIcon=styled.img`

`
export const Cards=styled.div`
display:flex;
gap: 6rem;

`