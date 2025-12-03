import { CenteredParagraph, Heading, PageContainer, Paragraph } from "../styles/sharedStyles";
import {
  AccessibilityCards,
  AccessibilityCardWrapper,
  AccessibilityCard as StyledAccessibilityCard,
  AccessibilityIconCircle,
  AccessibilityCardTitle,
} from "./SupportPage.styled";
import { Variants, motion } from "framer-motion";

const AccessibilityCard = motion(StyledAccessibilityCard);

const accessibilityItems = [
  {
    title: "Washrooms",
    description:
      "Washrooms and toilets are available on all floors (22nd, 23rd and 24th) of the LTC building. These include toilets for attendees with additional needs.",
    emoji: "🚻",
  },
  {
    title: "Quiet rooms",
    description:
      "There are prayer rooms on each floor of the LTC. There are also seven meeting rooms which can act as ‘Thinking/Strategy’ rooms should the teams need them. Please be aware that these rooms will have a time limit as they will be available for all teams.",
    emoji: "🤫",
  },
  {
    title: "Attendees",
    description:
      "There will be around 220 guests at this event.",
    emoji: "👥",
  },
  {
    title: "Food",
    description: (
      <>
        Snacks will be served throughout the day, and lunch will also be provided. Your dietary requirements were taken during registration and will be catered for. If you need to discuss anything further, please speak to an organiser or supporter. Or email us in advance at{" "}
        <a href="mailto:IP&Ihackathon@lloydsbanking.com">IP&amp;Ihackathon@lloydsbanking.com</a>
      </>
    ),
    emoji: "🍽️",
  },
  {
    title: "Sight",
    description:
      "Dress for comfort — wear what you feel comfortable in. There may be flash photography as we will have photographers. Videographers using large lights may also be present.",
    emoji: "👀",
  },
  {
    title: "Sound",
    description:
      "Hackathon events are generally loud. Networking and collaborating are encouraged. Music may play at the start and end of the event. Sound speakers and microphones will be in use. Bring sound-cancelling equipment if helpful.",
    emoji: "🔊",
  },
  {
    title: "Smell",
    description:
      "We have asked colleagues not to wear fragrance where possible.",
    emoji: "👃",
  },
  {
    title: "Touch",
    description:
      "There will be silent screens showing signage.",
    emoji: "🫳",
  },
];

export const SupportPage = () => {
  const cardVariants: Variants = {
    hidden: (custom: "left" | "right") => ({
      opacity: 0,
      x: custom === "left" ? -50 : 50,
    }),
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <PageContainer>
      <Heading>Accessibility</Heading>

      <CenteredParagraph>
        We strive to create an event where everyone can succeed. This means removing barriers, offering reasonable adjustments, and ensuring accessible tools and flexible arrangements. If you need any adjustments on the day, speak to an organiser or supporter. Or email us in advance at{" "}
        <a href="mailto:IP&Ihackathon@lloydsbanking.com">IP&amp;Ihackathon@lloydsbanking.com</a>
      </CenteredParagraph>

      <AccessibilityCards>
        {accessibilityItems.map((item, index) => {
          const variant = index % 2 === 0 ? "outline" : "primary";
          const side = index % 2 === 0 ? "left" : "right";

          return (
            <AccessibilityCardWrapper key={item.title}>
              <AccessibilityIconCircle side={side}>
                {item.emoji}
              </AccessibilityIconCircle>

              <AccessibilityCard
                variant={variant}
                side={side}
                custom={side}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div>
                  <AccessibilityCardTitle variant={variant}>
                    {item.title}
                  </AccessibilityCardTitle>

                  <Paragraph>{item.description}</Paragraph>
                </div>
              </AccessibilityCard>
            </AccessibilityCardWrapper>
          );
        })}
      </AccessibilityCards>
    </PageContainer>
  );
};
