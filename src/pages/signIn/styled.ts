import { MoviesListImg } from '@assets/pages'
import styled from '@emotion/styled'
import { T14 } from '@styles/typo'

interface IContainer {}



export const Container = styled.div<IContainer>`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: black;
	background: rgba(0, 0, 0, 0.5) url(${MoviesListImg});
	background-size: cover;
	background-position: center;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

    padding: 10% 25%;
	background-color: rgba(0, 0, 0, 0.7);
	
    gap: 10rem;
    
	`

export const Box=styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;

width: 100%;


padding: 8%;
background-color: rgba(0, 0, 0, 0.7);
`

export const StyledT14=styled(T14)`
opacity: 0.7;
`
export const SignUp=styled(T14)`
cursor: pointer;
`
export const UpperContent=styled.div`
display: flex;
flex-direction: column;
`

export const LowerContent=styled(UpperContent)`

`
export const SignDetails=styled.span`
color:white;
font-size:12rem;
`