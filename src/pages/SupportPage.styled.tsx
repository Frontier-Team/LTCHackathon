import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const AccessibilityCards = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 3rem;
  margin-top: 4rem;
  width: 100%;
  max-width: 100%;

  @media (max-width: 600px) {
    gap: 2.5rem;
    margin-top: 3rem;
  }

  @media (max-width: 320px) {
    gap: 2rem;
    margin-top: 2rem;
  }
`;

export const AccessibilityCardWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 600px) {
    margin-top: 1.75rem;
  }

  @media (max-width: 320px) {
    margin-top: 1.5rem;
  }
`;

export const AccessibilityCard = styled(motion.div) <{
  variant: "primary" | "outline";
  side: "left" | "right";
}>`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2.5rem;
  padding-top: 3rem;
  margin-top: 0;
  border-radius: 18px;
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.teal : theme.colors.white};
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.white : theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.teal};
  box-shadow: 0 10px 28px ${({ theme }) => theme.colors.teal}26;

  p {
    margin: 0;
    word-break: break-word;
    hyphens: auto;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    word-break: break-all;
    hyphens: auto;
  }

  ${({ variant, theme }) =>
    variant === "primary"
      ? `
    a {
      color: ${theme.colors.white};
      text-decoration-color: ${theme.colors.white}40;
    }

    a:hover,
    a:focus {
      color: ${theme.colors.white};
      text-decoration-color: ${theme.colors.white}80;
    }
  `
      : `
    a {
      color: ${theme.colors.teal};
      text-decoration-color: ${theme.colors.teal}66;
    }

    a:hover,
    a:focus {
      color: ${theme.colors.teal};
      text-decoration-color: ${theme.colors.teal};
    }
  `}

  @media (max-width: 600px) {
    padding: 2rem 1.25rem;
    padding-top: 2.5rem;
    border-radius: 14px;
  }

  @media (max-width: 320px) {
    padding: 1.5rem 0.75rem;
    padding-top: 2rem;
    border-radius: 12px;
    font-size: 0.85rem;
    line-height: 1.5;
  }
`;

export const AccessibilityCardTitle = styled.h2<{ variant: "primary" | "outline" }>`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.white : theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const AccessibilityIconCircle = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: 0;
  ${({ side }) => (side === "left" ? "left: 2rem;" : "right: 2rem;")}
  transform: translateY(-50%);
  z-index: 1;

  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.teal};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 6px 16px ${({ theme }) => theme.colors.teal}38;
  pointer-events: none;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    font-size: 24px;
    ${({ side }) => (side === "left" ? "left: 0.625rem;" : "right: 0.625rem;")}
  }

  @media (max-width: 320px) {
    width: 38px;
    height: 38px;
    font-size: 19px;
    ${({ side }) => (side === "left" ? "left: 0.375rem;" : "right: 0.375rem;")}
  }
`;
