import { useState, useMemo } from "react";
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
import data from "../db.json";

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

// Helper function to parse schedule description and extract title, presenter, and purpose
const parseScheduleEntry = (description: string) => {
  // Remove "Day 2: " prefix if present
  const cleanDesc = description.replace(/^Day 2:\s*/, "");

  // Try to match pattern: "Title by Presenter. Purpose"
  const byMatch = cleanDesc.match(/^(.+?)\s+by\s+(.+?)\.\s+(.+)$/);
  if (byMatch) {
    return {
      title: byMatch[1].trim(),
      presenters: byMatch[2].trim(),
      purpose: byMatch[3].trim(),
    };
  }

  // Try to match pattern: "Title. Purpose"
  const dotMatch = cleanDesc.match(/^(.+?)\.\s+(.+)$/);
  if (dotMatch) {
    return {
      title: dotMatch[1].trim(),
      presenters: "All attendees",
      purpose: dotMatch[2].trim(),
    };
  }

  // Default: use entire description as title
  return {
    title: cleanDesc,
    presenters: "All attendees",
    purpose: "",
  };
};

// Transform db.json schedule data into agenda format
const transformScheduleToAgenda = (): Record<string, AgendaDay> => {
  const day1Slots: AgendaSlot[] = [];
  const day2Slots: AgendaSlot[] = [];

  data.schedule.forEach((item) => {
    const timeRange = item.time;
    const description = item.description;

    // Determine if this is Day 2
    const isDay2 = description.startsWith("Day 2:");

    // Parse time range
    let start = "";
    let end: string | undefined = undefined;

    if (timeRange.includes(" - ")) {
      const [s, e] = timeRange.split(" - ");
      start = s.trim();
      end = e.trim();
    } else {
      start = timeRange.trim();
    }

    // Parse description
    const { title, presenters, purpose } = parseScheduleEntry(description);

    // Only use purpose if it's different from title (avoid repetition)
    const finalPurpose = purpose && purpose !== title ? purpose : "";

    const slot: AgendaSlot = {
      start,
      end,
      title,
      presenters,
      purpose: finalPurpose,
    };

    if (isDay2) {
      day2Slots.push(slot);
    } else {
      day1Slots.push(slot);
    }
  });

  return {
    Wednesday: {
      date: "10 December, 2025",
      slots: day1Slots,
    },
    Thursday: {
      date: "11 December, 2025",
      slots: day2Slots,
    },
  };
};

const formatTimeRange = (slot: AgendaSlot) =>
  slot.end ? `${slot.start} – ${slot.end}` : slot.start;

const formatPresenterLine = (presenter?: string) => {
  let p = presenter?.trim() || "all attendees";

  const lower = p.toLowerCase();

  if (lower === "all attendees") {
    p = "all attendees";
  } else if (lower === "all other attendees") {
    p = "all other attendees";
  }

  const genericKeywords = ["attendees", "judges", "participants", "other attendees"];
  const isGeneric = genericKeywords.some(word => lower.includes(word));

  const prefix = isGeneric ? "For" : "By";

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
  const agenda = useMemo(() => transformScheduleToAgenda(), []);
  const [activeDay, setActiveDay] = useState<"Wednesday" | "Thursday">("Wednesday");
  const activeAgenda = agenda[activeDay];

  return (
    <PageContainer>
      <Heading>Agenda</Heading>

      <CenteredParagraph>
        The Hackathon runs across two days. Use the tabs below to view the
        schedule for each day and plan your arrival, breaks and final pitches.
      </CenteredParagraph>

      <DayTabsWrapper>
        {Object.entries(agenda).map(([day, dayData]) => (
          <DayTab
            key={day}
            active={activeDay === day}
            onClick={() => setActiveDay(day as "Wednesday" | "Thursday")}
          >
            <DayTabText>
              {day} • {dayData.date}
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
