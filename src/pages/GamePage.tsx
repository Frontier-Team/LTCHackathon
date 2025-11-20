import React from "react";
import { Game } from "../components/Game";
import {
  CenteredParagraph,
  Heading,
  PageContainer,
} from "../styles/sharedStyles";

export const GamePage: React.FC = () => {
  return (
    <PageContainer>
      <Heading>People Adventure</Heading>
       <Game />
      <CenteredParagraph>
        This game has been built in Unity. You can tap on the screen to move
        your character to a location, so you can explore the riverside in
        Dundee. You can speak to the characters by tapping on them when you're
        nearby. In order to submit your favourite at the post box you'll need to
        find and listen to all of the characters, making sure you read
        everything they have to say. Once you've done that the postbox to send
        your vote will become clickable and you can send off your favourite.
      </CenteredParagraph>
    </PageContainer>
  );
};
