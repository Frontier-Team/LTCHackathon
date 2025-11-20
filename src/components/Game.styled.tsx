import styled from "@emotion/styled";
import { Unity } from "react-unity-webgl";

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnityCanvas = styled(Unity)`
width: 425px;
 aspect-ratio: 9 / 13;


  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {

    max-width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

    max-width: 300px;
  }
`;

export const PacmanContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 2rem;

`;