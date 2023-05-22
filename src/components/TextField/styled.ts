import EyeSVG from '@assets/components/TextField'
import styled from '@emotion/styled'
import { black } from '@styles/colors'
import { withPos } from '@styles/util'
import { Bin } from '@types'

interface IContainer {
	width?: string
}
interface IEye{
    visibile:Bin
}

export const Container = withPos(styled.div<IContainer>`
	display: flex;

	width: ${p => (p.width ? p.width : '100%')};
	
	padding: 10rem;

	border: 2px solid ${black}1D;
    border-radius: 5rem;
	&:focus-within {
		border: 2px solid ${black}8d;
	}
`)

export const Input = styled.input`
	width: 100%;
    
    font-size: 15rem;
    font-family:Arial, Helvetica, sans-serif;

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

export const Eye=styled.img`
    height: 20rem;
    cursor:pointer;

    &*{
        color:red;
    }

`