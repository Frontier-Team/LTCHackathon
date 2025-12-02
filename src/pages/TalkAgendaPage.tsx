import { useState } from "react";
import {
  PageContainer,
  CenteredParagraph,
  Heading,
} from "../styles/sharedStyles";
import {
  DayTabsWrapper,
  DayTab,
  DayTabText,
  TimelineWrapper,
  Timeline,
  TimelineRow,
  IconCircle,
  TimeLabel,
  TimelineCard,
  CardTitle,
  CardPresenters,
  CardPurpose,
  CardDash,
} from "./TalkAgendaPage.styled";

type AgendaSlot = {
  start: string;
  end?: string;
  title: string;
  presenters?: string;
  purpose: string;
};

type AgendaDay = {
  date: string;
  slots: AgendaSlot[];
};

const agenda: Record<string, AgendaDay> = {
  Wednesday: {
    date: "10 December, 2025",
    slots: [
      {
        start: "08:00",
        end: "08:45",
        title: "Arrival, Registration, Refreshments",
        presenters: "All attendees",
        purpose: "Welcome",
      },
      {
        start: "09:00",
        end: "09:20",
        title: "Kick-off Session – Welcome note",
        presenters: "Amit Thawani and Sirisha Voruganti",
        purpose: "Welcome message and motivating participants",
      },
      {
        start: "09:20",
        end: "09:35",
        title: "Kick-off Session – Hackathon Overview & Resources",
        presenters: "Mukul Saini",
        purpose: "Hackathon format and resources overview",
      },
      {
        start: "09:40",
        end: "09:55",
        title: "Kick-off Session – Agentic AI Evangelist",
        presenters: "Aritra Chakravarty",
        purpose:
          "Agentic AI capabilities and how they can address business issues",
      },
      {
        start: "10:00",
        end: "10:15",
        title: "Tooling / Resource – Learning Session",
        presenters: "Google",
        purpose: "Sandbox overview",
      },
      {
        start: "10:15",
        end: "11:15",
        title: "Set up IT – Presentation and set up time",
        presenters: "IT",
        purpose: "Wi-Fi setup, sandbox access and queries",
      },
      {
        start: "11:15",
        end: "11:30",
        title: "Break & Networking",
        presenters: "All attendees",
        purpose: "Break for participants",
      },
      {
        start: "11:30",
        end: "13:30",
        title: "Hack – Ideation Phase",
        presenters: "All attendees",
        purpose: "Hack to proceed; coaches to support and walk around",
      },
      {
        start: "13:30",
        end: "14:30",
        title: "Lunch & Networking",
        presenters: "All attendees",
        purpose: "Lunch break for all attendees",
      },
      {
        start: "14:30",
        end: "15:45",
        title: "Hack – Build and Test",
        presenters: "All attendees",
        purpose: "Hack to proceed; coaches to support and walk around",
      },
      {
        start: "15:45",
        end: "16:00",
        title: "Break & Networking",
        presenters: "All attendees",
        purpose: "Break for participants",
      },
      {
        start: "16:00",
        end: "17:30",
        title: "Hack – Build and Test",
        presenters: "All attendees",
        purpose: "Hack to proceed; coaches to support and walk around",
      },
      {
        start: "17:30",
        title: "Day ends",
        presenters: "All attendees",
        purpose: "End of day one",
      },
    ],
  },

  Thursday: {
    date: "11 December, 2025",
    slots: [
      {
        start: "08:00",
        end: "08:45",
        title: "Arrival, Refreshments, Hack continues",
        presenters: "All attendees",
        purpose: "Welcome and continuation of the hack",
      },
      {
        start: "09:00",
        end: "11:45",
        title: "Hack – Build and Test",
        presenters: "All attendees",
        purpose: "Hack to proceed; coaches to support and walk around",
      },
      {
        start: "11:45",
        end: "12:15",
        title: "Hack – Wrap Up",
        presenters: "All attendees",
        purpose: "Hack to wrap up; presentation preparation to start",
      },
      {
        start: "12:15",
        end: "13:15",
        title: "Pitch – Presenting back to Coaches",
        presenters: "Coaches",
        purpose: "Teams present to coaches; shortlists made",
      },
      {
        start: "13:15",
        end: "13:45",
        title: "Lunch & Networking",
        presenters: "All attendees",
        purpose: "Lunch break for all attendees",
      },
      {
        start: "13:45",
        end: "14:15",
        title: "Pitch – Shortlist announced and preparing pitches",
        presenters: "Coaches",
        purpose: "Shortlisted teams begin preparing pitches",
      },
      {
        start: "14:15",
        end: "16:45",
        title: "Pitch – Pitches to Judges",
        presenters: "Participants",
        purpose: "Teams pitch ideas; includes Q&A time",
      },
      {
        start: "16:45",
        end: "17:00",
        title: "Break & Networking",
        presenters: "All other attendees",
        purpose: "Break for participants while judges deliberate",
      },
      {
        start: "16:45",
        end: "17:00",
        title: "Wrap Up – Judges Deliberate",
        presenters: "Judges",
        purpose: "Judges select top three winners",
      },
      {
        start: "17:00",
        end: "17:30",
        title: "Wrap Up – Winners Announced, Awards & Closing Speeches",
        presenters: "Judges",
        purpose: "Winners announced and event closed",
      },
      {
        start: "17:30",
        title: "Day ends",
        presenters: "All attendees",
        purpose: "End of event",
      },
    ],
  },
};

const formatTimeRange = (slot: AgendaSlot) =>
  slot.end ? `${slot.start} – ${slot.end}` : slot.start;

const formatPresenterLine = (presenter?: string) => {
  const p = presenter?.trim() || "All attendees";
  const generics =
    /(attendees|coaches|judges|participants|other attendees)/i;
  const prefix = generics.test(p) ? "For" : "By";
  return `${prefix} ${p}`;
};

const getEmojiForSlot = (title: string) => {
  const t = title.toLowerCase();
  if (
    (t.includes("arrival") && t.includes("registration")) ||
    (t.includes("arrival") && t.includes("refreshments"))
  )
    return "👋";
  if (t.includes("hack")) return "💻";
  if (t.includes("pitch")) return "🎤";
  if (t.includes("judges")) return "⚖️";
  if (t.includes("winners")) return "🏆";
  if (t.includes("lunch") || t.includes("refreshments")) return "🍽️";
  if (t.includes("break") || t.includes("networking")) return "☕";
  if (t.includes("kick-off") || t.includes("welcome")) return "💡";
  if (t.includes("tooling") || t.includes("resource")) return "🛠️";
  if (t.includes("set up it")) return "🧩";
  return "🌅";
};

export const TalkAgendaPage = () => {
  const [activeDay, setActiveDay] = useState<keyof typeof agenda>("Wednesday");
  const activeAgenda = agenda[activeDay];

  return (
    <PageContainer>
      <Heading>Agenda</Heading>

      <CenteredParagraph>
        The Hackathon runs across two days. Use the tabs below to view the
        schedule for each day and plan your arrival, breaks and final pitches.
      </CenteredParagraph>

      <DayTabsWrapper>
        {Object.entries(agenda).map(([day, { date }]) => (
          <DayTab
            key={day}
            active={activeDay === day}
            onClick={() => setActiveDay(day as keyof typeof agenda)}
          >
            <DayTabText>
              {day} • {date}
            </DayTabText>
          </DayTab>
        ))}
      </DayTabsWrapper>

      <TimelineWrapper>
        <Timeline>
          {activeAgenda.slots.map((slot, index) => {
            const side: "left" | "right" = index % 2 === 0 ? "left" : "right";
            const variant: "primary" | "outline" =
              index % 2 === 0 ? "outline" : "primary";

            return (
              <TimelineRow
                key={`${activeDay}-${index}`}
                side={side}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
              >
                <TimelineCard side={side} variant={variant}>
                  <TimeLabel>{formatTimeRange(slot)}</TimeLabel>

                  <CardTitle>{slot.title}</CardTitle>

                  <CardPresenters variant={variant}>
                    {formatPresenterLine(slot.presenters)}
                  </CardPresenters>

                  <CardDash variant={variant}>—</CardDash>

                  <CardPurpose variant={variant}>{slot.purpose}</CardPurpose>
                </TimelineCard>

                <IconCircle>
                  <span>{getEmojiForSlot(slot.title)}</span>
                </IconCircle>
              </TimelineRow>
            );
          })}
        </Timeline>
      </TimelineWrapper>
    </PageContainer>
  );
};
