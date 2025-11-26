import styled from "@emotion/styled";

export const PrizesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -0.5rem;

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

export const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ChallengeCard = styled.div<{ isExpanded?: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.teal};
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: ${({ isExpanded }) =>
    isExpanded ? '0 4px 12px rgba(0, 106, 77, 0.2)' : '0 2px 4px rgba(0, 106, 77, 0.1)'};
`;

export const ChallengeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.teal}10;
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
`;

export const ChallengeTitle = styled.h3`
  flex: 1;
  color: ${({ theme }) => theme.colors.teal};
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.95rem;
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
  padding: 0;
  transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0)')};

  &:hover {
    color: ${({ theme }) => theme.colors.turquoise};
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
  padding: 0 1.25rem 1.5rem 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.colors.teal}20;
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const ChallengeSection = styled.div`
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionLabel = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.teal};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 0.5rem 0;
`;
