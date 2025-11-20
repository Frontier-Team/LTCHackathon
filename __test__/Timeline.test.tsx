import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Timeline } from '../src/components/Timeline';
import { renderWithProviders } from './test-utils';

describe('Timeline Component', () => {
  const schedule = [
    { time: '10:00 AM', description: 'Event 1' },
    { time: '11:00 AM', description: 'Event 2' },
  ];

  test('renders without crashing', () => {
    const { container } = renderWithProviders(<Timeline schedule={schedule} />);
    expect(container).toBeInTheDocument();
  });

  test('renders correct number of events', () => {
    const { getAllByText } = renderWithProviders(<Timeline schedule={schedule} />);
    expect(getAllByText(/Event/).length).toBe(2);
  });

  test('renders event times and descriptions', () => {
    const { getByText } = renderWithProviders(<Timeline schedule={schedule} />);
    expect(getByText('10:00 AM')).toBeInTheDocument();
    expect(getByText('Event 1')).toBeInTheDocument();
    expect(getByText('11:00 AM')).toBeInTheDocument();
    expect(getByText('Event 2')).toBeInTheDocument();
  });

  test('renders empty timeline when no events are provided', () => {
    const { container } = renderWithProviders(<Timeline schedule={[]} />);
    expect(container).toBeInTheDocument();
    expect(container.querySelectorAll('TimelineItem').length).toBe(0);
  });
});
