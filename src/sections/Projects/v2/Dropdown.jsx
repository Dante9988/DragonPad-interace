import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownButton = styled.div`
  padding: 12px 15px;
  background-color: #ffffff;
  border: 2px solid #e2e2e2;
  border-radius: 8px;
  font-size: 16px;
  color: #333333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownContent = styled.div`
  position: absolute;
  width: 100%;
  background-color: #f9f9f9;
  border: 2px solid #e2e2e2;
  border-radius: 8px;
  z-index: 1;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

const DropdownItem = styled.div`
  padding: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option); // Pass selected option up to parent component
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption}
        <span>{isOpen ? '▲' : '▼'}</span>
      </DropdownButton>
      {isOpen && (
        <DropdownContent style={{maxHeight: isOpen ? "200px" : "0"}}>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

// Usage
// <Dropdown options={['ETH', 'USDT']} onSelect={(value) => console.log(value)} />
