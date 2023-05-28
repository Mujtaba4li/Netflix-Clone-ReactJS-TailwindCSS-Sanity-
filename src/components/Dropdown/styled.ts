import styled from '@emotion/styled'
import { black, whiteSmoke } from '@styles/colors'
import { Row, withPos } from '@styles/util'
interface IContainer {
	width?: string
}
interface IHeader {
	focused?: boolean
}
export const Container = withPos(styled.div<IContainer>`
	position: relative;
	background-color: ${whiteSmoke};
	width: ${p => (p.width ? p.width : '100%')};
`)

export const DropdownContent = styled.div`
	position: absolute;
	background-color: ${whiteSmoke};
	border: 1px solid black;
	z-index: 2;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10rem;
	align-items: center;
	justify-content: center;
	padding: 10rem;
	border-radius: 10rem;

	opacity: 0;
	transition: opacity 1.5s ease-in-out;

	&.fade-in {
		opacity: 1;
	}
`

export const Arrow = styled.img`
	height: 20rem;
	margin-right: 10rem;
	rotate: 90;
`

export const Header = styled(Row)<IHeader>`
	justify-content: space-between;
	padding: 10rem;
	height: 50rem;
	/* background-color: ${p => (p.focused ? 'red' : 'green')}; */
	border: ${p => (p.focused ? '1rem solid black' : '1rem solid grey')};
	border-radius: 10rem;
	cursor: pointer;
`
