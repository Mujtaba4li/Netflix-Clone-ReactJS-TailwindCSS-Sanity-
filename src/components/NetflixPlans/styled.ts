import styled from "@emotion/styled"
import { T14Bold, T16 } from "@styles/typo"
import { Row, withPos } from "@styles/util"

interface IContainer {}
export const Container=withPos(styled.div<IContainer>`
display: flex;
flex-direction: column;
width: 100%;
`)

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

export const Renewal=styled.div`
width: 100%;
display:flex


`