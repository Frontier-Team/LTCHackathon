import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import hero from "../assets/Hero.jpg";

export default function HeroComponent() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = hero;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <Wrapper>
      <GifImage
        src={hero}
        alt="Game Jam Animation"
        className={isImageLoaded ? "loaded" : ""}
      />
    </Wrapper>
  );
}


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lilac};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 36px 0px,
    rgba(0, 128, 128, 0.2) 0px 0px 0px 1px;
  position: relative;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
`;

const GifImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: block;
  animation: ${fadeIn} 2s ease-in-out;
  animation-fill-mode: backwards;
  animation-play-state: paused;
  
  &.loaded {
    animation-play-state: running;
  }
  
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1300px) {
    margin-top: 0;
    max-width: 100%;
  }
`;
