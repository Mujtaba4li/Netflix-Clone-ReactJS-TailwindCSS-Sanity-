import { T20 } from '@styles/typo'
import React, { useEffect, useState } from 'react'
import { Container, Logo } from './styled'
import { NetflixSVG, ProfileIMG } from '@assets/components/Nav'
import { IPos } from '@styles/util'

interface IContainer extends IPos{

}

const Nav = (p:IContainer) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container {...p} scrolled={scrolled}>
       <Logo src={NetflixSVG}/>
       <Logo src={ProfileIMG}/>
    </Container>
  )
}

export default Nav