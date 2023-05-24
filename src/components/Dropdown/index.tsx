import React, { useState } from 'react';
import { Arrow, Container, DropdownContent, Header } from './styled';
import { T16, T16Bold, T20 } from '@styles/typo';
import { IPos, Row } from '@styles/util';
import { DropdownSVG } from '@assets/components/Dropdown';

interface IDropdown extends IPos {
  title?: string;
}

const DropDown = (p: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <Container {...p}>
      <Header onClick={handleDropdownToggle} focused={isOpen}>
        <T16Bold>{selectedCountry || 'Select Country'}</T16Bold>
		<Arrow src={DropdownSVG} />
      </Header>
      {isOpen && (
        <DropdownContent className={isOpen ? 'fade-in' : ''} >
          <T16  onClick={() => handleCountrySelect('USA')} alignSelf='flex-start'>USA</T16>
          <T16 onClick={() => handleCountrySelect('Canada')} alignSelf='flex-start'>Canada</T16>
          <T16 onClick={() => handleCountrySelect('UK')} alignSelf='flex-start'>UK</T16>
          <T16 onClick={() => handleCountrySelect('Pakistan')} alignSelf='flex-start'>Pakistan</T16>
          <T16 onClick={() => handleCountrySelect('India')} alignSelf='flex-start'>India</T16>
          <T16 onClick={() => handleCountrySelect('Australia')} alignSelf='flex-start'>Australia</T16>
          <T16 onClick={() => handleCountrySelect('Scotland')} alignSelf='flex-start'>Scotland</T16>
        </DropdownContent>
      )}
    </Container>
  );
};

export default DropDown;
