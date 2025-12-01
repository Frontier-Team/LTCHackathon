import styled from "@emotion/styled";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { StyledCard } from "../styles/sharedStyles";

const AccordionSection = styled(StyledCard)`
  margin-bottom: 1rem;
  overflow: hidden;
  padding: 0;
`;

const AccordionTitle = styled.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  font-size: 1.25rem;
  font-weight: 400;
  font-family: "GT Ultra", sans-serif;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  transition: background 0.2s ease;
  color: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.teal}10;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.teal};
    transition: color 0.2s ease;
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease;
  background: ${({ theme, isOpen }) => (isOpen ? theme.colors.teal : 'transparent')};
  color: ${({ theme }) => theme.colors.white};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1.25rem;
  padding: ${({ isOpen }) => (isOpen ? "1.25rem" : "0")};
  font-size: 0.95rem;
  line-height: 1.6;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`;

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionSection>
      <AccordionTitle
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
        id={`accordion-title-${title}`}
      >
        {title}
        {isOpen ? (
          <FaChevronUp data-testid="chevron-up" />
        ) : (
          <FaChevronDown data-testid="chevron-down" />
        )}
      </AccordionTitle>
      <AccordionContent
        isOpen={isOpen}
        id={`accordion-content-${title}`}
        aria-labelledby={`accordion-title-${title}`}
      >
        {children}
      </AccordionContent>
    </AccordionSection>
  );
};

export default Accordion;
