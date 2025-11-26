import React, { useState } from "react";
import { FaDatabase, FaWallet, FaMicrophone, FaHome, FaFileAlt, FaRobot, FaChartLine, FaCalculator, FaChevronDown } from "react-icons/fa";
import Accordion from "../components/Accordion";
import db from "../db.json";
import {
  CenteredParagraph,
  Heading,
  PageContainer,
  Paragraph,
  StyledCard,
  SubHeading,
} from "../styles/sharedStyles";
import {
  JudgingContainer,
  PrizesContainer,
  ChallengeContent,
  ChallengeSection,
  SectionLabel,
  ChallengesGrid,
  ChallengeCard,
  ChallengeHeader,
  IconWrapper,
  ChallengeTitle,
  ExpandButton,
  ChallengeDetails,
} from "./HackersPage.styled";

export const HackersPage: React.FC = () => {
  const hacker = db.hackers[0];
  const [expandedChallenges, setExpandedChallenges] = useState<Record<string, boolean>>({});

  const toggleChallenge = (id: string) => {
    setExpandedChallenges(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getChallengeIcon = (id: string) => {
    const icons: Record<string, JSX.Element> = {
      "1.1": <FaDatabase />,
      "2.1": <FaWallet />,
      "2.2": <FaMicrophone />,
      "3.1": <FaRobot />,
      "3.2": <FaFileAlt />,
      "3.3": <FaChartLine />,
      "4.1": <FaHome />,
      "4.2": <FaHome />,
      "5": <FaCalculator />,
    };
    return icons[id] || <FaDatabase />;
  };

  return (
    <PageContainer>
      <>
        <Heading>{hacker.welcome}</Heading>
        <CenteredParagraph>{hacker.welcomeDescription}</CenteredParagraph>

        <h2>{hacker.challengeTitle}</h2>
        <CenteredParagraph>{hacker.challengeDescription}</CenteredParagraph>

        <ChallengesGrid>
          {hacker.challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} isExpanded={expandedChallenges[challenge.id]}>
              <ChallengeHeader onClick={() => toggleChallenge(challenge.id)}>
                <IconWrapper>{getChallengeIcon(challenge.id)}</IconWrapper>
                <ChallengeTitle>{challenge.title}</ChallengeTitle>
                <ExpandButton isExpanded={expandedChallenges[challenge.id]}>
                  <FaChevronDown />
                </ExpandButton>
              </ChallengeHeader>

              <ChallengeDetails isExpanded={expandedChallenges[challenge.id]}>
                <ChallengeContent>
                  <ChallengeSection>
                    <SectionLabel>Business Problem</SectionLabel>
                    <Paragraph>{challenge.businessProblem}</Paragraph>
                  </ChallengeSection>

                  <ChallengeSection>
                    <SectionLabel>Hackable Scope</SectionLabel>
                    <Paragraph>{challenge.hackableScope}</Paragraph>
                  </ChallengeSection>
                </ChallengeContent>
              </ChallengeDetails>
            </ChallengeCard>
          ))}
        </ChallengesGrid>

        <h2>{hacker.Pitches.title}</h2>
        <Paragraph>{hacker.Pitches.description}</Paragraph>
        <Paragraph>{hacker.Pitches.length}</Paragraph>
        <PrizesContainer>
          <StyledCard>
            <CenteredParagraph>{hacker.Pitches.coachTime}</CenteredParagraph>
          </StyledCard>
          <StyledCard>
            <CenteredParagraph>{hacker.Pitches.judgeTime}</CenteredParagraph>
          </StyledCard>
          <Paragraph>{hacker.Pitches.presentation}</Paragraph>
        </PrizesContainer>

        <h2>{hacker.judgingTitle}</h2>
        <Paragraph>{hacker.judgingDescription}</Paragraph>
        <JudgingContainer>
          {hacker.judgingCriteria.criteria.map((criteria, index) => (
            <Accordion key={index} title={criteria.title}>
              {criteria.description.split('\n\n').map((paragraph, pIndex) => (
                <Paragraph key={pIndex}>
                  {paragraph.split('\n').map((line, lIndex) => {
                    const colonIndex = line.indexOf(':');
                    if (colonIndex !== -1) {
                      const beforeColon = line.substring(0, colonIndex);
                      const afterColon = line.substring(colonIndex);
                      return (
                        <React.Fragment key={lIndex}>
                          {lIndex > 0 && <br />}
                          <strong>{beforeColon}</strong>{afterColon}
                        </React.Fragment>
                      );
                    }
                    return (
                      <React.Fragment key={lIndex}>
                        {lIndex > 0 && <br />}
                        {line}
                      </React.Fragment>
                    );
                  })}
                </Paragraph>
              ))}
            </Accordion>
          ))}
        </JudgingContainer>
      </>
      <>
        <h2>Winners</h2>
        <Paragraph>{hacker.Awards.description}</Paragraph>
        <PrizesContainer>
          {hacker.Awards.awards.map((award, index) => (
            <StyledCard key={index}>
              <SubHeading>
                {award.title.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </SubHeading>
              <CenteredParagraph style={{ marginBottom: "0" }}>
                {award.prizes.all}
              </CenteredParagraph>
            </StyledCard>
          ))}
        </PrizesContainer>
      </>
    </PageContainer>
  );
};
