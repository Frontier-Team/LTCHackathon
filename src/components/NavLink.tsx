import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { buttonAndLinkStyles } from "../styles/sharedStyles";

const StyledLink = styled(Link)`
  ${({ theme }) => buttonAndLinkStyles(theme)};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

interface NavLinkProps {
  to: string;
  onClick: () => void;
  className: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  onClick,
  className,
  children,
}) => (
  <StyledLink
    to={to}
    onClick={onClick}
    className={className}
    rel={
      to === "https://ivrgame.netlify.app" ? "noopener noreferrer" : undefined
    }
    target={to === "https://ivrgame.netlify.app" ? "_blank" : undefined}
  >
    {children}
  </StyledLink>
);

export default NavLink;
