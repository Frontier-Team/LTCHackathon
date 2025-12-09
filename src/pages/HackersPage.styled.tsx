import styled from "@emotion/styled";

export const PrizesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const JudgingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: -0.5rem;
  margin-bottom: 2rem;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoItem = styled.li`
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.teal}15 0%, transparent 100%);
  border-left: 4px solid ${({ theme }) => theme.colors.teal};
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.teal}25 0%, transparent 100%);
    transform: translateX(4px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.2rem;
    padding: 0.875rem 1.25rem;
  }
`;

export const ChallengeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 450px), 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ChallengeCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.teal};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.teal}20;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.teal}30;
    transform: translateY(-4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem;
  }
`;

export const ChallengeHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const ChallengeNumber = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.teal};
  margin: 0 0 0.5rem 0;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

export const ChallengeTitle = styled.h4`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 1rem 0;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.2rem;
  }
`;

export const ChallengeSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionLabel = styled.h5`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.turquoise};
  margin: 0 0 0.75rem 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

export const TeamBox = styled.div`
  background: #E8F5E9;
  border: 2px solid ${({ theme }) => theme.colors.teal};
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.25rem;
  }
`;

export const TeamTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

export const TeamMembers = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.05rem;
  }
`;

export const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 320px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }
`;

export const OldChallengeCard = styled.div<{ isExpanded?: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  min-height: 100px;
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }
`;

export const OldChallengeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease;
  min-height: 88px;

  &:hover {
    background: ${({ theme }) => theme.colors.teal}10;
    
    button {
      color: ${({ theme }) => theme.colors.turquoise};
    }
  }
  
  &:focus-within {
    button {
      color: ${({ theme }) => theme.colors.turquoise};
    }
  }
  
  @media (max-width: 320px) {
    padding: 0.875rem;
    gap: 0.625rem;
    min-height: 70px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  font-size: 1.25rem;
  
  @media (max-width: 320px) {
    width: 32px;
    height: 32px;
    min-width: 32px;
    font-size: 1rem;
    border-radius: 6px;
  }
`;

export const OldChallengeTitle = styled.h3`
  flex: 1;
  color: ${({ theme }) => theme.colors.teal};
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.4;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
    line-height: 1.3;
  }
`;

export const ExpandButton = styled.button<{ isExpanded?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.teal};
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  margin: -0.5rem;
  border-radius: 4px;
  transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0)')};

  &:hover {
    color: ${({ theme }) => theme.colors.turquoise};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
  
  @media (max-width: 320px) {
    font-size: 1rem;
    padding: 0.375rem;
    margin: -0.375rem;
  }
`;

export const ChallengeDetails = styled.div<{ isExpanded?: boolean }>`
  max-height: ${({ isExpanded }) => (isExpanded ? '2000px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

export const ChallengeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.teal};
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};
  
  @media (max-width: 320px) {
    padding: 1rem;
    gap: 1rem;
    font-size: 0.875rem;
  }
`;

export const OldChallengeSection = styled.div`
  &:last-child {
    margin-bottom: 0;
  }
`;

export const OldSectionLabel = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.turquoise};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 0.5rem 0;
  
  @media (max-width: 320px) {
    font-size: 0.8rem;
    letter-spacing: 0.3px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.teal};
  
  &:first-of-type {
    margin-top: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.4rem;
    gap: 0.5rem;
    margin-top: 2rem;
  }
`;

export const TitleIconWrapper = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.turquoise};
  display: inline-flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.3rem;
  }
`;
