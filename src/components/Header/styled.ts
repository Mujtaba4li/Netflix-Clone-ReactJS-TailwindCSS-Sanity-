import styled from '@emotion/styled'
import { T14 } from '@styles/typo'
import { Row } from '@styles/util'

interface IContainer {
	image: string
}

export const Container = styled.div<IContainer>`
	display: flex;
	position: relative;
	background-size: cover;
	background-image: url(${p => (p.image ? p.image : '')});
	background-position: center center;
	height: 50%;
	object-fit: contain;

	::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background: black;
		opacity: .2;
	}
`

export const Content = styled.div`
	position: absolute;

	display: flex;
	flex-direction: column;

	top: 30%;
	left: 5%;

	width: 500rem;

`

export const StyledRow = styled(Row)`
	/* background: orange; */
	justify-content: flex-start;
`

export const Description = styled(T14)`
	text-align: left;
	line-height: 18rem;
`

export const Fade = styled.div`
	position: absolute;

	width: 100%;
	height: 10vh;

	bottom: 0;
	background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
`
