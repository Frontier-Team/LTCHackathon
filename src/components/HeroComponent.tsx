import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import hero from "../assets/Hero.jpg";

export default function HeroComponent() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const arrowRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const img = new Image();
    img.src = hero;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  // hide arrow after scrolling past it
  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setShowArrow(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      if (arrowRef.current) {
        observer.observe(arrowRef.current);
      }

      return () => {
        if (arrowRef.current) {
          observer.unobserve(arrowRef.current);
        }
      };
    } else {
      // Fallback for environments without IntersectionObserver
      const handleScroll = () => {
        if (arrowRef.current) {
          const rect = arrowRef.current.getBoundingClientRect();
          setShowArrow(rect.top >= 0 && rect.bottom <= window.innerHeight);
        }
      };

      if (typeof window !== "undefined") {
        (window as Window).addEventListener("scroll", handleScroll);
        return () =>
          (window as Window).removeEventListener("scroll", handleScroll);
      }
    }
  }, []);

  return (
    <Wrapper>


      <GifImage
        src={hero}
        alt="Game Jam Animation"
        className={isImageLoaded ? "loaded" : ""}
      />

      {showArrow && <ScrollDownArrow ref={arrowRef}>↓</ScrollDownArrow>}
    </Wrapper >
  );
}


const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
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
width: 80vw;
animation: ${scaleIn} 2s cubic - bezier(0.25, 0.1, 0.25, 1);
animation - fill - mode: backwards;
animation - play - state: paused;
  &.loaded {
  animation - play - state: running;
}
transition: transform 0.3s ease -in -out;

  @media (max-width: 1300px) {
    margin-top: 0;
  width: 100%;
  }

`;

const ScrollDownArrow = styled.div`
position: absolute;
bottom: 50px;
font - size: 3rem;
color: ${({ theme }) => theme.colors.turquoise};
animation: ${bounce} 1s infinite;

@media(min - width: ${({ theme }) => theme.breakpoints.md}) {
  display: none;
}
`;
