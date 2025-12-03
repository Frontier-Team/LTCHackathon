import React from "react";
// import React, { useState } from "react";
// import { FaDatabase, FaWallet, FaMicrophone, FaHome, FaFileAlt, FaRobot, FaChartLine, FaCalculator, FaChevronDown, FaShieldAlt, FaLaptop, FaTrophy, FaGavel, FaLightbulb } from "react-icons/fa";
import {  FaMicrophone, FaLaptop, FaTrophy, FaGavel, FaLightbulb } from "react-icons/fa";
import Accordion from "../components/Accordion";
import db from "../db.json";
import {
  CenteredParagraph,
  Heading,
  PageContainer,
  Paragraph,
} from "../styles/sharedStyles";
import {
  JudgingContainer,
  // ChallengeContent,
  // ChallengeSection,
  // SectionLabel,
  // ChallengesGrid,
  // ChallengeCard,
  // ChallengeHeader,
  // IconWrapper,
  // ChallengeTitle,
  // ExpandButton,
  // ChallengeDetails,
  SectionTitle,
  TitleIconWrapper,
  InfoList,
  InfoItem,
} from "./HackersPage.styled";

export const HackersPage: React.FC = () => {
  const hacker = db.hackers[0];
  // const [expandedChallenges, setExpandedChallenges] = useState<Record<string, boolean>>({});

  // const toggleChallenge = (id: string) => {
  //   setExpandedChallenges(prev => ({ ...prev, [id]: !prev[id] }));
  // };

  // const getChallengeIcon = (id: string) => {
  //   const icons: Record<string, JSX.Element> = {
  //     "1.1": <FaDatabase />,
  //     "2.1": <FaWallet />,
  //     "2.2": <FaMicrophone />,
  //     "3.1": <FaRobot />,
  //     "3.2": <FaFileAlt />,
  //     "3.3": <FaChartLine />,
  //     "4.1": <FaHome />,
  //     "4.2": <FaShieldAlt />,
  //     "5": <FaCalculator />,
  //   };
  //   return icons[id] || <FaDatabase />;
  // };

  return (
    <PageContainer>
      <>
        <Heading>{hacker.welcome}</Heading>
        <CenteredParagraph>{hacker.welcomeDescription}</CenteredParagraph>

        <SectionTitle>
          <TitleIconWrapper><FaLaptop /></TitleIconWrapper>
          {hacker.importantInfo.title}
        </SectionTitle>
        <InfoList>
          {hacker.importantInfo.items.map((item, index) => (
            <InfoItem key={index}>{item}</InfoItem>
          ))}
        </InfoList>

        <SectionTitle>
          <TitleIconWrapper><FaLightbulb /></TitleIconWrapper>
          {hacker.challengeTitle}
        </SectionTitle>
        <CenteredParagraph>{hacker.challengeDescription}</CenteredParagraph>

        {/* <ChallengesGrid>
          {hacker.challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} isExpanded={expandedChallenges[challenge.id]}>
              <ChallengeHeader
                onClick={() => toggleChallenge(challenge.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleChallenge(challenge.id);
                  }
                }}
                aria-expanded={expandedChallenges[challenge.id]}
                aria-label={`${challenge.title}. Click to ${expandedChallenges[challenge.id] ? 'collapse' : 'expand'} details`}
              >
                <IconWrapper aria-hidden="true">{getChallengeIcon(challenge.id)}</IconWrapper>
                <ChallengeTitle>{challenge.title}</ChallengeTitle>
                <ExpandButton
                  isExpanded={expandedChallenges[challenge.id]}
                  aria-hidden="true"
                  tabIndex={-1}
                >
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
        </ChallengesGrid> */}

        <SectionTitle>
          <TitleIconWrapper><FaMicrophone /></TitleIconWrapper>
          {hacker.Pitches.title}
        </SectionTitle>
        <Paragraph>{hacker.Pitches.description}</Paragraph>
        <Paragraph>{hacker.Pitches.length}</Paragraph>
        <Paragraph>{hacker.Pitches.presentation}</Paragraph>
        <InfoList>
          <InfoItem>{hacker.Pitches.coachTime}</InfoItem>
          <InfoItem>{hacker.Pitches.judgeTime}</InfoItem>
        </InfoList>

        <SectionTitle>
          <TitleIconWrapper><FaGavel /></TitleIconWrapper>
          {hacker.judgingTitle}
        </SectionTitle>
        <Paragraph>{hacker.judgingDescription}</Paragraph>
        <JudgingContainer>
          {hacker.judgingCriteria.criteria.map((criteria, index) => (
            <Accordion key={index} title={criteria.title}>
              {criteria.description.split('\n\n').map((paragraph, pIndex) => (
                <Paragraph key={pIndex}>
                  {paragraph.split('\n').map((line, lIndex) => {
                    const colonIndex = line.indexOf(':');
                    if (colonIndex !== -1) {
                      const beforeColon = line.substring(0, colonIndex + 1);
                      const afterColon = line.substring(colonIndex + 1);
                      return (
                        <React.Fragment key={lIndex}>
                          {lIndex > 0 && <br />}
                          <strong style={{ color: '#6CF479' }}>{beforeColon}</strong>{afterColon}
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
        <SectionTitle>
          <TitleIconWrapper><FaTrophy /></TitleIconWrapper>
          Winners
        </SectionTitle>
        <Paragraph>Judges will deliberate and will announce the winners at 5pm.</Paragraph>
      </>
    </PageContainer>
  );
};
