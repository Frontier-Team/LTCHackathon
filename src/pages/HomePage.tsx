import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaMapPin, FaWifi } from "react-icons/fa";
import HeroComponent from "../components/HeroComponent";
import { Paragraph } from "../styles/sharedStyles";
import {
  AddressText,
  CloseButton,
  Content,
  ContentBody,
  ContentCard,
  Footer,
  FooterContent,
  IconWrapper,
  MapFrame,
  MapHover,
  MapPopover,
  MapToggleButton,
  PopoverHeader,
  Section,
  SectionTitle,
  WelcomeSection,
  WelcomeText,
  WifiNotice,
  Wrapper,
} from "./HomePage.styled";

export const HomePage: React.FC = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const closePopover = () => setMapOpen(false);
  const togglePopover = () => {
    setHasInteracted(true);
    setMapOpen((o) => !o);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMapOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (!mapOpen) return;
      const target = e.target as Node;
      if (
        popoverRef.current &&
        !popoverRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setMapOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [mapOpen]);

  useEffect(() => {
    // Only manage focus after user has interacted with the map toggle
    if (!hasInteracted) return;

    if (mapOpen) {
      const closeBtn = popoverRef.current?.querySelector<HTMLButtonElement>(
        "button[data-close]"
      );
      closeBtn?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [mapOpen, hasInteracted]);

  return (
    <Wrapper>
      <HeroComponent />
      <Content as="main" aria-label="Main content">
        <ContentBody>
          <WelcomeSection aria-labelledby="welcome-heading">
            <WelcomeText id="welcome-heading">
              Welcome to the CIO IP&I Hackathon!
            </WelcomeText>
          </WelcomeSection>
          <Section as="section">

            <Paragraph>
              Thank you for joining us for this fast-paced, creative sprint! Over the next 48 hours, you'll collaborate with around 220 colleagues to prototype bold new ideas.
            </Paragraph>
            <Paragraph>
              Form teams of up to six and tackle a real-world business challenge. Brainstorm, design, build, and pitch a working MVP from scratch.
            </Paragraph>
            <Paragraph>
              Volunteers and mentors are available throughout to guide you. Good luck, have fun, and let's innovate together!
            </Paragraph>
          </Section>
          <Section as="section" aria-labelledby="event-details-heading">
            <SectionTitle id="event-details-heading">
              <IconWrapper><FaCalendarAlt /></IconWrapper>
              Event Details
            </SectionTitle>
            <ContentCard>
              <Paragraph>
                <strong>Dates:</strong> Wednesday 10 and Thursday 11 December 2025
              </Paragraph>
              <Paragraph>
                <strong>Time:</strong> 08:00 – 17:30 each day
              </Paragraph>
              <Paragraph>
                <strong>Lunch:</strong> Day 1: 13:30 – 14:30 | Day 2: 13:15 – 13:45
              </Paragraph>
              <Paragraph>
                Refreshments and snacks will be served throughout both days.
              </Paragraph>
            </ContentCard>
          </Section>
          <Section as="section" aria-labelledby="location-heading">
            <SectionTitle id="location-heading">
              <IconWrapper><FaMapMarkerAlt /></IconWrapper>
              Getting here
            </SectionTitle>
            <ContentCard>
              <AddressText aria-label="Event location">
                Lloyds Banking Group, Wing A & B, 22nd, 23rd and 24th Floor, Tower 2, Sattva Knowledge Park, Hitec City, Hyderabad, Telangana - 500081
              </AddressText>
              <Paragraph>
                Transport between the University and Venue will be arranged by LTC
              </Paragraph>
              <MapHover>
                <MapToggleButton
                  ref={triggerRef}
                  id="map-toggle"
                  aria-controls="map-popover"
                  aria-expanded={mapOpen}
                  aria-haspopup="dialog"
                  onClick={togglePopover}
                  aria-label="Show map for event location"
                >
                  <FaMapPin />
                </MapToggleButton>
                <MapPopover
                  ref={popoverRef}
                  role="dialog"
                  aria-modal="true"
                  id="map-popover"
                  aria-label="Interactive map showing event location"
                  data-open={mapOpen}
                  aria-hidden={!mapOpen}
                >
                  <PopoverHeader>
                    <span>Event Location</span>
                    <CloseButton
                      type="button"
                      data-close
                      aria-label="Close map"
                      onClick={closePopover}
                    >
                      ×
                    </CloseButton>
                  </PopoverHeader>
                  <MapFrame
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.85499019360776!2d78.3789896180973!3d17.430148513850565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9300552ecdf9%3A0xbdaa716d8948f405!2sLloyds%20Technology%20Centre%20(%20Knowledge%20Park%20)!5e0!3m2!1sen!2suk!4v1763983338734!5m2!1sen!2suk"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google map showing Hackathon Location in Hyderabad"
                  />
                </MapPopover>
              </MapHover>
            </ContentCard>
          </Section>

          <Section as="section" aria-labelledby="wifi-heading">
            <SectionTitle id="wifi-heading">
              <IconWrapper><FaWifi /></IconWrapper>
              WiFi
            </SectionTitle>
            <ContentCard aria-label="WiFi connection information">
              <WifiNotice>WiFi login will be available on the day</WifiNotice>
            </ContentCard>
          </Section>
        </ContentBody>
        <Footer as="footer" aria-label="Contact information">
          <FooterContent>
            <p>Questions? Contact us at{" "}
              <a
                href="mailto:IP&Ihackathon@lloydsbanking.com"
                aria-label="Send email to IP&I Hackathon team at IP&Ihackathon@lloydsbanking.com"
              >
                IP&Ihackathon@lloydsbanking.com
              </a>
            </p>
            <p style={{ marginTop: '1rem' }}>
              Our organisers and support team will be available to help during the event.
            </p>
          </FooterContent>
        </Footer>
      </Content>
    </Wrapper>
  );
};
