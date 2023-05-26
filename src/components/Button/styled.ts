import styled from '@emotion/styled'
import { T14BoldSpaced } from '@styles/typo'
import { withPos } from '@styles/util'

interface IButton {
	background?: string
	color?: string
	opacity?:boolean;
}

export const Container = withPos(styled.button<IButton>`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 20px 30px;

	border-radius: 8px;
	border: none;

	gap: 5rem;
	
	opacity: ${p => (p.opacity ? `0.5` : '1')};;
	background-color: ${p => (p.background ? `${p.background}` : 'black')};

	cursor: pointer;

	outline: 2px solid transparent;
	transition: all 0.2s ease-in-out;

	:focus-visible {
		outline: 2px solid 'orange' 88; // 0x88 = 50% opacity
	}

	color: ${p => (p.color ? p.color : 'white')};
`)

export const Icon = styled.img`
	height: 25rem;
`
export const Text = styled(T14BoldSpaced)<IButton>`
	color: ${p => (p.color ? p.color : 'white')};
`
