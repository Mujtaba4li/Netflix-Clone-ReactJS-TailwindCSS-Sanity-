import Button from "@components/Button";
import styled from "@emotion/styled";
import { darkRed } from "@styles/colors";
import { T14 } from "@styles/typo";
import { Row } from "@styles/util";

interface IContainer{

}

export const Container=styled.div`
display: flex;

width: 100%;

`

export const Left=styled.div`
display: flex;
flex-direction: column; 

width: 50%;
height: 100%;

background: ${darkRed};

padding: 5% 10% 3% 20%;

`
export const Right=styled(Left)`
padding: 5% 10% 5% 10%;
background: white;

`
export const Content=styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
width:100%;
height: 100%;
`

export const TextwithLine=styled.div`
display: flex;
width: 100%;
margin-top: 20rem;
`

export const Text=styled(T14)`
width: 100%;
opacity: .5;
`

export const Column=styled(Row)`
flex-direction: column;
`

