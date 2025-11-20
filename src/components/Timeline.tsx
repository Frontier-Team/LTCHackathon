import { Paragraph } from '../styles/sharedStyles';
import { Card, Connector, Line, TimelineContainer, TimelineItem } from './Timeline.styled';

interface TimelineProps {
  schedule: {
    time: string;
    description: string;
  }[];
};

export const Timeline = ({
  schedule
}: TimelineProps) => {

  const timelineVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    }
  };

  return (
    <TimelineContainer>
      <Line />
      {schedule.length > 0 && schedule.map((event, index) => {
        const formattedDescription = event.description.split('\n\n').map((text, i) => (
          <Paragraph key={i}>{text}</Paragraph>
        ));
        return (
          <TimelineItem
            key={event.description || index}
            side={index % 2 === 0 ? 'left' : 'right'}
            variants={timelineVariants}
            initial='hidden'
            animate='visible'
          >
            <Connector side={index % 2 === 0 ? 'left' : 'right'} />
            <Card>
              <Paragraph>{event.time}</Paragraph>
              {formattedDescription}
            </Card>
          </TimelineItem>
        )
      })}
    </TimelineContainer>
  );
};
