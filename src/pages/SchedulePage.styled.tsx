import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 2.5rem;
  margin-top: 5rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 1.5rem;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 0.25rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.turquoise};
  transform: translateX(-50%);
`;

interface TimelineItemProps {
  side: "left" | "right";
}

export const TimelineItem = styled(motion.div)<TimelineItemProps>`
  display: flex;
  justify-content: ${({ side }) =>
    side === "left" ? "flex-start" : "flex-end"};
  width: 100%;
  max-width: 800px;
  padding: 20px 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.turquoise};
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;

    &:before {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Connector = styled.div<TimelineItemProps>`
  position: absolute;
  width: 3rem;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.turquoise};
  top: 50%;
  ${({ side }) => (side === "left" ? "right: 50%;" : "left: 50%;")}
  transform: translateY(-50%);
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.turquoise};
  color: ${({ theme }) => theme.colors.teal};
  padding: 2rem;
  border-radius: 1rem;
  width: 30%;
  max-width: 300px;
  word-wrap: break-word;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
    text-align: center;
  }
`;
