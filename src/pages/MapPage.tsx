import styled from "@emotion/styled";
import { Heading, PageContainer, Paragraph } from "../styles/sharedStyles";

export default function MapPage() {
  const Link = styled.a`
    color: ${({ theme }) => theme.colors.teal};
    text-decoration: bold;
    font-size: 2rem;

    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <PageContainer>
      <Heading>Getting to the Radisson Blu</Heading>
      <Wrapper>
        <Heading>From Edinburgh Airport</Heading>
        <Paragraph>
          By bus: Airlink buses leave from the airport regularly, and it's about
          a 30-minute ride to the Waverly Bridge stop just 400 meters from the
          hotel.
        </Paragraph>
        <Paragraph>
          By tram: Take a convenient tram ride to the Princes Street stop, which
          leaves you a quick 800-meter walk to the hotel.
        </Paragraph>
        <Heading>From Edinburgh Waverly Station</Heading>
        <Paragraph>
          On foot: The hotel is a quick 250-meter walk from Edinburgh Waverly,
          the city's central railway hub.
        </Paragraph>
        <Heading> From Edinburgh Bus Station</Heading>
        <Paragraph>
          On foot: Located by St Andrews Square, Edinburgh Bus Station is the
          main bus route into the city and is only a 1km walk from the hotel.
        </Paragraph>
      </Wrapper>
      <Heading>Raddison Blu Floor Plan</Heading>
      <Paragraph>You can find a virtual tour of the building here:</Paragraph>
      <Link
        href="https://www.mymatterport.com/show/?m=7J9nb7s5w4W"
        target="_blank"
        rel="noopener noreferrer"
      >
        Virtual Tour
      </Link>
      <Wrapper></Wrapper>
    </PageContainer>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
`;
