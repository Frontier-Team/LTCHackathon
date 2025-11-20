import styled from "@emotion/styled";
import mapImage from "../assets/map.png";

export default function Map() {
  return (
    <ImageContainer>
      <ResponsiveImage src={mapImage} alt="Map" />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 900px; /* Adjust this value as needed */
`;
