import styled from '@emotion/styled'
import { T14Bold } from '@styles/typo'
import { Row, withPos } from '@styles/util'

interface IContainer {}

interface IImage {
	isLarger?: boolean
}

export const Container = withPos(styled.div<IContainer>`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow: hidden;
`)

export const StyledRow = styled(Row)`
	display: flex;
	width: 100%;
	scroll-snap-type: x mandatory;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}

	&:hover {
		cursor: grab;
	}

	&:active {
		cursor: grabbing;
	}
`

export const Card = styled.div`
	position: relative;
	display: flex;
	background: black;
	width: 100%;
`

export const Image = styled.img<IImage>`
	max-height: ${p => (p.isLarger ? '200rem' : '150rem')};
	width: auto;
	object-fit: contain;
	transition: transform 450ms;

	:hover {
		cursor: pointer;
		transform: scale(1.08);
		z-index: 1;
		opacity: 0.5;
	}
`

export const MovieName = styled(T14Bold)`
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 0;
	padding: 2rem;
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`
