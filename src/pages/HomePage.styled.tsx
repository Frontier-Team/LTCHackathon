import styled from "@emotion/styled";
import { Paragraph } from "../styles/sharedStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0;
    padding: 0;
  }

  p {
    line-height: 1.8;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 0;
  text-align: left;
  margin: 2rem auto 0;
  width: 100%;
  box-sizing: border-box;
`;

export const ContentBody = styled.div`
  padding: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem;
  }
`;

export const Section = styled.div`
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.teal};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.4rem;
    gap: 0.5rem;
  }
`;

export const IconWrapper = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.turquoise};
  display: inline-flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.3rem;
  }
`;

export const WelcomeSection = styled.div`
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 1rem;
`;

export const WelcomeText = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.teal};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

export const ContentCard = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.teal};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem;
  }
`;

export const WifiNotice = styled(Paragraph)`
  text-align: center;
  margin: 0;
`;

export const AddressText = styled(Paragraph)`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.teal};
`;

export const TransportationText = styled(Paragraph)`
  hyphens: auto;
  word-break: break-word;
`;

export const MapPopover = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  transition: opacity 150ms ease, visibility 150ms ease;
  max-width: calc(100vw - 2rem);
  max-height: calc(100vh - 2rem);
  width: fit-content;
  overflow: auto;

  &[data-open='true'] {
    opacity: 1;
    visibility: visible;
  }
  
  &[aria-hidden='true'] {
    pointer-events: none;
  }
`;

export const MapHover = styled.span`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const MapToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.teal};
  border: none;
  padding: 0.5rem;
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.turquoise};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.teal};
  }
`;

export const PopoverHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.25rem 0.25rem 0.5rem 0.25rem;
  color: ${({ theme }) => theme.colors.lilac};
  font-weight: bold;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lilac};
  padding: 0.25rem 0.5rem;
  border-radius: 6px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

export const MapFrame = styled.iframe`
  display: block;
  width: 600px;
  height: 450px;
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(600px, calc(90vw - 1rem));
    height: calc(min(600px, calc(90vw - 1rem)) * 0.75);
    max-height: 450px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: min(400px, calc(90vw - 1rem));
    height: min(400px, calc(90vw - 1rem));
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.teal};
  border-radius: 10px;
  margin: 1rem;
`;

export const FooterContent = styled.div`
  color: white;
  font-size: 1.4rem;

  a {
    color: ${({ theme }) => theme.colors.turquoise};
    text-decoration: underline;
    font-weight: 700;
    
    &:hover {
      color: white;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;
