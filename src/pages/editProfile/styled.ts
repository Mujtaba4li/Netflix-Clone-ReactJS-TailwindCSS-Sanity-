import styled from '@emotion/styled'
import { T16 } from '@styles/typo'
import { Row } from '@styles/util'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: black;
	width: 100%;
	height: 100%;
	padding: 8%;
`

export const Content = styled.div`
	display: flex;
`
export const Left = styled.div`
	display: flex;
	flex-direction: column;

	width: 10%;
`

export const Right = styled.div`
	display: flex;
	flex-direction: column;

	width: 90%;
`

export const Image = styled.img`
	width: 100rem;
	height: auto;
`

export const Plans = styled(Row)`
	display: flex;
	justify-content: space-between;
`

export const PlansText = styled.div`
	display: flex;
	flex-direction: column;

	width: 50%;
	height: 100%;
	justify-content: space-evenly;
	gap: 20rem;
`

export const Text = styled(T16)`
	display: flex;
	flex-direction: column;
`

export const Buttons = styled(PlansText)``
