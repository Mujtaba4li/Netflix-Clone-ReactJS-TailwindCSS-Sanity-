import styled from '@emotion/styled'

export const Container = styled.div`
	background-color: red;
	position: relative;
   
`

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
`



export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	opacity: 0.7;
`

export const Content=styled.div`
position: absolute;

display: flex;
flex-direction: column;

top: 35%;
left: 5%;

gap:20rem;
`
