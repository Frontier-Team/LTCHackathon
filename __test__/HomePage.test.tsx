import { screen } from '@testing-library/react';
import React from 'react';
import { HomePage } from '../src/pages/HomePage';
import { renderWithProviders } from './test-utils';

describe('HomePage', () => {
  test('renders without crashing', () => {
    renderWithProviders(<HomePage />);
  });

  test('renders the HeroComponent', () => {
    renderWithProviders(<HomePage />);
    expect(
      screen.getAllByText('Welcome to Game Jam Dundee')[0]
    ).toBeInTheDocument();
  });

  test('renders the main subtitle', () => {
    renderWithProviders(<HomePage />);
    expect(
      screen.getByText(
        'Thank you for joining us for Game Jam Dundee! The Scottish Widows team are thrilled to have you here and extend a warm welcome to all of you.'
      )
    ).toBeInTheDocument();
  });

  test("renders the 'What's a Game Jam' section", () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText("What's a Game Jam")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Think of Reboot (who are supporting the event) but with a focus on games and gamification. It's a super fun event where we come together to brainstorm, design, and develop a game or gamified app from scratch - all within a limited time frame."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Whether you're a coding wizard, a design guru, or just someone with a wild imagination and an interest in games, there's a place for you in this adventure! In the Game Jam, 60 attendees will work to solve challenges using games or gamification techniques over a 2-day period at the V&A Museum in Dundee."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'This is a fantastic way to unleash creativity and explore new possibilities in game design by bringing together developers, designers, and other creatives to rapidly prototype and experiment with new ideas, mechanics, and art styles.'
      )
    ).toBeInTheDocument();
  });

  test("renders the 'Not wanting to compete but still want to come along?' section", () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText(/Tuesday 4th March/)).toBeInTheDocument();
    expect(screen.getByText(/Tech Talks, Workshops and Exhibits!/)).toBeInTheDocument();
    expect(screen.getByText(/Tuesday 4th March/).closest('strong')).toBeInTheDocument();
    expect(screen.getByText(/Tech Talks, Workshops and Exhibits!/).closest('strong')).toBeInTheDocument();
    expect(screen.getByText(/curated content focusing on game development/)).toBeInTheDocument();
  });

  test('renders the closing subtitles', () => {
    renderWithProviders(<HomePage />);
    expect(
      screen.getByText("Let's make this Game Jam an unforgettable experience!")
    ).toBeInTheDocument();
    expect(screen.getByText('Ready, Set, Create! 🚀')).toBeInTheDocument();
  });
});
