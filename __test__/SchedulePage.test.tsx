import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';
import { SchedulePage } from '../src/pages/SchedulePage';
import data from '../src/db.json';

describe('SchedulePage', () => {
  test('renders the heading', () => {
    renderWithProviders(<SchedulePage />);
    const headingElement = screen.getByText(/Schedule of the Day/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the date paragraph', () => {
    renderWithProviders(<SchedulePage />);
    const dateParagraph = screen.getByText(/March 3, 2025 - Game Jam for participating teams/i);
    expect(dateParagraph).toBeInTheDocument();
  });

  test('renders the running order paragraph', () => {
    renderWithProviders(<SchedulePage />);
    const runningOrderParagraph = screen.getByText(/Find below the running order for March 4, 2025./i);
    expect(runningOrderParagraph).toBeInTheDocument();
  });

  test('renders the timeline component with schedule data', () => {
    renderWithProviders(<SchedulePage />);
    data.schedule.forEach((item) => {
      const strings = item.description.split('\n\n');
      strings.forEach((string) => {
        const timelineStr = screen.getAllByText(string);
        timelineStr.forEach((str) => expect(str).toBeInTheDocument());
      })
    });
  });
});
