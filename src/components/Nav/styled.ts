import styled from '@emotion/styled';
import { withPos } from '@styles/util';

interface IContainer {
  scrolled: boolean;
}

export const Container = withPos(styled.div<IContainer>`
  display: flex;
  padding: 12rem 25rem;
  justify-content: space-between;
  height: 55rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${props => (props.scrolled ? 'black' : 'transparent')};
  transition: background-color 0.3s ease-in-out;
`);

export const Logo = styled.img`
  height: 30rem;
  cursor:pointer;
`;