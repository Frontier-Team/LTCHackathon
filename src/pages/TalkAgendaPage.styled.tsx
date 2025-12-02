import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const DayTabsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 640px;
  margin: 2rem auto 2.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  column-gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    border-bottom: none;
    gap: 1rem;
    column-gap: 0;
  }
`;

export const DayTab = styled.div<{ active: boolean }>`
  flex: 1;
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  border-bottom: ${({ active, theme }) =>
    active ? `3px solid ${theme.colors.teal}` : "3px solid transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.teal : "rgba(0,0,0,0.8)"};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }

  @media (max-width: 600px) {
    border-bottom: none;
    border-radius: 999px;
    background: ${({ active, theme }) =>
      active ? theme.colors.grey : "transparent"};
    color: ${({ active }) =>
      active ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.8)"};
  }
`;

export const DayTabText = styled.span`
  white-space: nowrap;

  @media (max-width: 600px) {
    white-space: normal;
  }
`;

export const TimelineWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const Timeline = styled.div`
  position: relative;
  padding: 1.5rem 0 2.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0.5rem;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: ${({ theme }) => theme.colors.teal};
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    &::before {
      left: 32px;
      transform: none;
    }
  }
`;

export const TimelineRow = styled(motion.div)<{ side: "left" | "right" }>`
  position: relative;
  display: flex;
  margin-bottom: 5.5rem;

  ${({ side }) =>
    side === "left"
      ? "justify-content: flex-end;"
      : "justify-content: flex-start;"}

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const TimelineCard = styled.div<{
  side: "left" | "right";
  variant: "primary" | "outline";
}>`
  position: relative;
  flex: 0 0 420px;
  max-width: 420px;
  width: 100%;
  box-sizing: border-box;

  padding: 2.7rem 1.75rem 1.6rem;
  border-radius: 18px;
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.teal : theme.colors.white};
  color: ${({ variant }) =>
    variant === "primary" ? "white" : "rgba(0,0,0,0.8)"};
  border: 2px solid ${({ theme }) => theme.colors.teal};
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.16);

  ${({ side }) =>
    side === "left" ? "margin-right: 3rem;" : "margin-left: 3rem;"}

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 64px);
    max-width: calc(100% - 64px);
    width: calc(100% - 64px);
    margin-left: 64px;
  }
`;

export const IconCircle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.teal};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.22);
  z-index: 2;

  @media (max-width: 768px) {
    left: 32px;
  }
`;

export const TimeLabel = styled.div`
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 0 0 0.75rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.45rem;
  line-height: 1.35;
`;

export const CardPresenters = styled.h4<{ variant?: "primary" | "outline" }>`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 0.65rem;
  opacity: 0.9;
  color: ${({ variant }) =>
    variant === "primary" ? "white" : "rgba(0,0,0,0.8)"};
`;

export const CardDash = styled.div<{ variant?: "primary" | "outline" }>`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0.35rem 0 0.65rem;
  opacity: 0.9;
  color: ${({ variant }) =>
    variant === "primary" ? "white" : "rgba(0,0,0,0.8)"};
`;

export const CardPurpose = styled.p<{ variant?: "primary" | "outline" }>`
  font-size: 0.86rem;
  line-height: 1.6;
  margin: 0;
  color: ${({ variant }) =>
    variant === "primary" ? "white" : "rgba(0,0,0,0.8)"};
`;
