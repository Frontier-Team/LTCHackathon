import styled from "@emotion/styled";

export const AccessibilityCards = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 5rem;
  margin-top: 4rem;
`;

export const AccessibilityCard = styled.div<{
  variant: "primary" | "outline";
  side: "left" | "right";
}>`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: visible;
  box-sizing: border-box;
  padding: 2.5rem;
  border-radius: 18px;
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.teal : theme.colors.white};
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.white : theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.teal};
  box-shadow: 0 10px 28px ${({ theme }) => theme.colors.teal}26;

  p {
    margin: 0;
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
    padding: 2.5rem;
    border-radius: 14px;
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
`;

export const AccessibilityIconCircle = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: 0;
  ${({ side }) => (side === "left" ? "left: 2rem;" : "right: 2rem;")}
  transform: translateY(-50%);

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

  @media (max-width: 600px) {
    ${({ side }) => (side === "left" ? "left: 1.25rem;" : "right: 1.25rem;")}
  }
`;
