import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaMapPin, FaWifi } from "react-icons/fa";
import HeroComponent from "../components/HeroComponent";
import { Paragraph } from "../styles/sharedStyles";
import db from "../db.json";
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
  const home = db.homepage;

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
              {home.welcome}
            </WelcomeText>
          </WelcomeSection>
          <Section as="section">
            {home.intro.map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
          </Section>
          <Section as="section" aria-labelledby="event-details-heading">
            <SectionTitle id="event-details-heading">
              <IconWrapper><FaCalendarAlt /></IconWrapper>
              {home.eventDetails.title}
            </SectionTitle>
            <ContentCard>
              <Paragraph>
                <strong>Dates:</strong> {home.eventDetails.dates}
              </Paragraph>
              <Paragraph>
                <strong>Time:</strong> {home.eventDetails.time}
              </Paragraph>
              <Paragraph>
                <strong>Lunch:</strong> {home.eventDetails.lunch}
              </Paragraph>
              <Paragraph>
                {home.eventDetails.refreshments}
              </Paragraph>
            </ContentCard>
          </Section>
          <Section as="section" aria-labelledby="location-heading">
            <SectionTitle id="location-heading">
              <IconWrapper><FaMapMarkerAlt /></IconWrapper>
              {home.location.title}
            </SectionTitle>
            <ContentCard>
              <AddressText aria-label="Event location">
                {home.location.address}
              </AddressText>
              <Paragraph>
                {home.location.transport}
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
                    src={home.location.mapUrl}
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
              {home.wifi.title}
            </SectionTitle>
            <ContentCard aria-label="WiFi connection information">
              <WifiNotice>{home.wifi.description}</WifiNotice>
            </ContentCard>
          </Section>
        </ContentBody>
        <Footer as="footer" aria-label="Contact information">
          <FooterContent>
            <p>{home.footer.contactText}{" "}
              <a
                href={`mailto:${home.footer.email}`}
                aria-label={`Send email to IP&I Hackathon team at ${home.footer.email}`}
              >
                {home.footer.email}
              </a>
            </p>
            <p style={{ marginTop: '1rem' }}>
              {home.footer.supportText}
            </p>
          </FooterContent>
        </Footer>
      </Content>
    </Wrapper>
  );
};
