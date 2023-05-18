import styled from "@emotion/styled";
import { withPos } from "@styles/util";
interface IContainer {}
export const Container=withPos(styled.div`
display: flex;
flex-direction: column;
padding: 20rem 0;
gap: 20rem;

width: 100%;
height: 100%;

`)