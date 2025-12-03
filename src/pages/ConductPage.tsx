import { FaHandshake, FaHeart, FaLeaf, FaRocket, FaUsers } from 'react-icons/fa';
import db from '../db.json';
import { Heading, Paragraph } from '../styles/sharedStyles';
import {
  BottomParagraph,
  ConductParagraph,
  Content,
  Icon,
  Section,
  SubTitle,
  ValueCard,
} from './ConductPage.styled';

const getValueIcon = (iconName: string) => {
  const icons: Record<string, JSX.Element> = {
    FaUsers: <FaUsers />,
    FaLeaf: <FaLeaf />,
    FaHandshake: <FaHandshake />,
    FaRocket: <FaRocket />,
    FaHeart: <FaHeart />,
  };
  return icons[iconName] || <FaUsers />;
};

export const ConductPage: React.FC = () => {
  const conduct = db.conduct;

  return (
    <Content>
      <Section>
        <Heading>{conduct.title}</Heading>

        <ConductParagraph>
          {conduct.introduction}
        </ConductParagraph>

        <SubTitle>{conduct.valuesTitle}</SubTitle>

        {conduct.values.map((value, index) => (
          <ValueCard key={index}>
            <Icon aria-label={`${value.name.toLowerCase()} icon`}>
              {getValueIcon(value.icon)}
            </Icon>
            <div>
              <h2>{value.name}</h2>
              <Paragraph>{value.description}</Paragraph>
            </div>
          </ValueCard>
        ))}
      </Section>

      <Section>
        <BottomParagraph>
          {conduct.closing}
        </BottomParagraph>
      </Section>
    </Content>
  );
};
